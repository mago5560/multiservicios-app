import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCredito } from 'src/app/model/tipocredito';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipocreditotecleo',
  templateUrl: './tipocreditotecleo.component.html',
  styleUrls: ['./tipocreditotecleo.component.css']
})
export class TipocreditotecleoComponent implements OnInit {


  public cls:TipoCredito=new TipoCredito();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/tipocredito'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.descripcion == ""){
      this.snackBar.open('El Campo Descripcion es requerido', '', {
        duration: 4000,
      });      
    }
    else{
      if(this.cls.id ==0){
        this.service.postTipoCredito(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putTipoCredito(this.cls).subscribe(data =>{
          this.snackBar.open('Registro modificado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }
    }
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getTipoCreditoId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}
