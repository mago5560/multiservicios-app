import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/model/articulo';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-articulotecleo',
  templateUrl: './articulotecleo.component.html',
  styleUrls: ['./articulotecleo.component.css']
})
export class ArticulotecleoComponent implements OnInit {

  public cls:Articulo=new Articulo();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/articulo'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.descripcion == ""){
      this.snackBar.open('El Campo descripcion es requerido', '', {
        duration: 4000,
      });      
    }else if (this.cls.valorventa == 0){
      this.snackBar.open('El Campo Valor de Venta es requerido', '', {
        duration: 4000,
      });
    }else{
      if(this.cls.id ==0){
        this.service.postArticulo(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putArticulo(this.cls).subscribe(data =>{
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
      this.service.getArticuloId(id).subscribe(data =>{
        console.log(data)
        this.cls=data;      
      })
    }
    
  }
}
