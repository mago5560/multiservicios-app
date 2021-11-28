import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPago } from 'src/app/model/tipopago';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipopagotecleo',
  templateUrl: './tipopagotecleo.component.html',
  styleUrls: ['./tipopagotecleo.component.css']
})
export class TipopagotecleoComponent implements OnInit {

 
  public cls:TipoPago=new TipoPago();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/tipopago'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.descripcion == ""){
      this.snackBar.open('El Campo Descripcion es requerido', '', {
        duration: 4000,
      });      
    }
    else{
      if(this.cls.id ==0){
        this.service.postTipoPago(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putTipoPago(this.cls).subscribe(data =>{
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
      this.service.getTipoPagoId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}
