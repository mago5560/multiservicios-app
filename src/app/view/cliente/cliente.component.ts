import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public _datos:Cliente[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,public storageService: StorageService) { 

    if(storageService.getUserToken().data[0].tipousuario.descripcion != "Administrador"){
      alert("Usuario sin accesos");
      this.router.navigate(['/principal']);
    }
  }

  ngOnInit(): void {
    this.buscar();
  }


  buscar(){

      this.service.getCliente().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./clientetecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Cliente){
    this.router.navigate(['./clientetecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Cliente){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteCliente(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

}
