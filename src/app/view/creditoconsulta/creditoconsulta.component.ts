import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Credito } from 'src/app/model/credito';
import { CreditoDetalle } from 'src/app/model/creditodetalle';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-creditoconsulta',
  templateUrl: './creditoconsulta.component.html',
  styleUrls: ['./creditoconsulta.component.css']
})
export class CreditoconsultaComponent implements OnInit {


  public clsCredito:Credito=new Credito();
  public clsDetalle: CreditoDetalle []=[];

  public totalAbonado:number=0;
  public total:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getCreditoId(id).subscribe(data =>{
        this.clsCredito=data;   
        
        
      this.service.getCreditoDetalleCreditoId(id).subscribe(data =>{
        console.log(data)
        this.clsDetalle = data;
        data.forEach(d =>{
          if(d.tipomovimiento.signo =='-1'){
            this.total =  this.total - d.valor
          }else{
            this.total =  Number(this.total) + Number(d.valor)
          }
        }) 
        this.total = this.total * -1
        this.totalAbonado =   this.clsCredito.valor - this.total
      })
      
      })

    }
    
  }

  cerrar() {
    this.router.navigate(['/credito'], { relativeTo: this.rutaActiva });
  }

  imprimir(){

  }
}
