import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoUsuario } from 'src/app/model/tipousuario';
import { Usuario } from 'src/app/model/usuario';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-usuariotecleo',
  templateUrl: './usuariotecleo.component.html',
  styleUrls: ['./usuariotecleo.component.css']
})
export class UsuariotecleoComponent implements OnInit {

  
  public cls:Usuario=new Usuario();
  hide = true;
  public _datosTipoUsuario:TipoUsuario[]=[];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/usuario'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.nombre == ""){
      this.snackBar.open('El Campo nombre es requerido', '', {
        duration: 4000,
      });      
    }
   else if(this.cls.usuario == ""){
      this.snackBar.open('El Campo Usuario es requerido', '', {
        duration: 4000,
      });      
    }
    else if(this.cls.password == ""){
      this.snackBar.open('El Campo Passowrd es requerido', '', {
        duration: 4000,
      });      
    }
    else{
      if(this.cls.id ==0){
        this.service.postUsuario(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putUsuario(this.cls).subscribe(data =>{
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
      this.service.getUsuarioId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

  setFiltros(){
    this.service.getTipoUsuario().subscribe(data=>{
      this._datosTipoUsuario = data;
    })
  }
}
