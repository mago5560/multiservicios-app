import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  public _datos:Proveedor[]= [];

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

      this.service.getProveedor().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./proveedortecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Proveedor){
    this.router.navigate(['./proveedortecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Proveedor){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteProveedor(data).subscribe(()=>{
        this.buscar()
      })
    }
  }
}
