import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipomovimiento',
  templateUrl: './tipomovimiento.component.html',
  styleUrls: ['./tipomovimiento.component.css']
})
export class TipomovimientoComponent implements OnInit {

  public _datos:TipoMovimiento[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,public storageService: StorageService) { 

    if(storageService.getUserToken().data[0].tipousuario.descripcion != "Administrador"){
      alert("Usuario sin accesos");
      this.router.navigate(['/principal']);
    }}

  ngOnInit(): void {
    this.buscar();
  }


  buscar(){

      this.service.getTipoMovimiento().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./tipomovimientotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:TipoMovimiento){
    this.router.navigate(['./tipomovimientotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:TipoMovimiento){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteTipoMovimiento(data).subscribe(()=>{
        this.buscar()
      })
    }
  }


}
