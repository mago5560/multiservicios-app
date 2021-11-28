import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCliente } from 'src/app/model/tipocliente';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipocliente',
  templateUrl: './tipocliente.component.html',
  styleUrls: ['./tipocliente.component.css']
})
export class TipoclienteComponent implements OnInit {

  public _datos:TipoCliente[]= [];

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

      this.service.getTipoCliente().subscribe(data => {
        this._datos=data 
      });

  }

  grabar(){
    this.router.navigate(['./tipoclientetecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:TipoCliente){
    this.router.navigate(['./tipoclientetecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:TipoCliente){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteTipoCliente(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

}
