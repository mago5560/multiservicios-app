import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-proveedortecleo',
  templateUrl: './proveedortecleo.component.html',
  styleUrls: ['./proveedortecleo.component.css']
})
export class ProveedortecleoComponent implements OnInit {

  public cls:Proveedor=new Proveedor();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/proveedor'], { relativeTo: this.rutaActiva });
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
        this.service.postProveedor(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putProveedor(this.cls).subscribe(data =>{
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
      this.service.getProveedorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }


}
