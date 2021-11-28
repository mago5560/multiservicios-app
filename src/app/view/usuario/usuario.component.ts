import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public _datos:Usuario[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,public storageService: StorageService) { 

    if(storageService.getUserToken().data[0].tipousuario.descripcion != "Administrador"){
      alert("Usuario sin accesos");
      this.router.navigate(['/principal']);
    }}

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){

      this.service.getUsuarios().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./usuariotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Usuario){
    this.router.navigate(['./usuariotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Usuario){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteUsuario(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

}
