import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/model/articulo';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  public _datos:Articulo[]= [];

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

      this.service.getArticulo().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./articulotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Articulo){
    this.router.navigate(['./articulotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Articulo){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteTipoPago(data).subscribe(()=>{
        this.buscar()
      } , error => {
        console.log(error)
      }
      )
    }
  }
}
