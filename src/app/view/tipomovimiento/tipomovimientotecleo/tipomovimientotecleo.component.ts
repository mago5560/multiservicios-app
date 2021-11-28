import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-tipomovimientotecleo',
  templateUrl: './tipomovimientotecleo.component.html',
  styleUrls: ['./tipomovimientotecleo.component.css']
})
export class TipomovimientotecleoComponent implements OnInit {

  public chkVenta:boolean=true;
  public cls:TipoMovimiento=new TipoMovimiento();
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  cerrar() {
    this.router.navigate(['/tipomovimiento'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.descripcion == ""){
      this.snackBar.open('El Campo Descripcion es requerido', '', {
        duration: 4000,
      });      
    }
    else{
      if(this.chkVenta){
        this.cls.signo = "-1"
      }else{
        this.cls.signo = "1"
      }
      if(this.cls.id ==0){
        this.service.postTipoMovimiento(this.cls).subscribe(data =>{
          this.snackBar.open('Registro grabado', '', {
            duration: 4000,
          });
          this.cerrar();
        })
      }else{
        this.service.putTipoMovimiento(this.cls).subscribe(data =>{
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
      this.service.getTipoMovimientoId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}
