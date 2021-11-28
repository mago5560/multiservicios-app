import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPago } from 'src/app/model/tipopago';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipopago',
  templateUrl: './tipopago.component.html',
  styleUrls: ['./tipopago.component.css']
})
export class TipopagoComponent implements OnInit {


  public _datos:TipoPago[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,public storageService: StorageService) { 

    if(storageService.getUserToken().data[0].tipousuario.descripcion != "Administrador"){
      alert("Usuario sin accesos");
      this.router.navigate(['/principal']);
    }}

  ngOnInit(): void {
    this.buscar();
  }


  buscar(){

      this.service.getTipoPago().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./tipopagotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:TipoPago){
    this.router.navigate(['./tipopagotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:TipoPago){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteTipoPago(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

}
