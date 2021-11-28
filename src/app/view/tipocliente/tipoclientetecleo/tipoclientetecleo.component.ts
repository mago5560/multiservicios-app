import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCliente } from 'src/app/model/tipocliente';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipoclientetecleo',
  templateUrl: './tipoclientetecleo.component.html',
  styleUrls: ['./tipoclientetecleo.component.css']
})
export class TipoclientetecleoComponent implements OnInit {


  public cls:TipoCliente=new TipoCliente();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/tipocliente'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.clasificacion == ""){
      this.snackBar.open('El Campo Clasificacion es requerido', '', {
        duration: 4000,
      });      
    }else if (this.cls.monto == 0){
      this.snackBar.open('El Campo Monto es requerido', '', {
        duration: 4000,
      });
    }else if (this.cls.interes == 0){
      this.snackBar.open('El Campo Interes es requerido', '', {
        duration: 4000,
      });
    }
    else{
      if(this.cls.id ==0){
        this.service.postTipoCliente(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putTipoCliente(this.cls).subscribe(data =>{
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
      this.service.getTipoClienteId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }
}
