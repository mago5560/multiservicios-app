import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { TipoCliente } from 'src/app/model/tipocliente';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-clientetecleo',
  templateUrl: './clientetecleo.component.html',
  styleUrls: ['./clientetecleo.component.css']
})
export class ClientetecleoComponent implements OnInit {


  public cls:Cliente=new Cliente();
  public _datosTipoCliente:TipoCliente[]= [];
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/cliente'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.nombre == ""){
      this.snackBar.open('El Campo nombre es requerido', '', {
        duration: 4000,
      });      
    }else if (this.cls.dpi == ""){
      this.snackBar.open('El Campo dpi es requerido', '', {
        duration: 4000,
      });
    }else if (this.cls.nit == ""){
      this.snackBar.open('El Campo nit es requerido', '', {
        duration: 4000,
      });
    }
    else if (this.cls.telefono == ""){
      this.snackBar.open('El Campo telefono es requerido', '', {
        duration: 4000,
      });
    }else{
      
  
      if(this.cls.id ==0){
  
        this.service.postCliente(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putCliente(this.cls).subscribe(data =>{
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
      this.service.getClienteId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

  setFiltros(){
    this.service.getTipoCliente().subscribe(data=>{
      this._datosTipoCliente = data;
    })
  }

}
