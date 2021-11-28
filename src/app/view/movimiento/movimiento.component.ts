import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Movimiento } from 'src/app/model/movimiento';
import { WebServices } from 'src/app/service/web.service';
import { MovimientodetalleComponent } from './movimientodetalle/movimientodetalle.component';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

 
  public _datos:Movimiento[]= [];
  clienteId:number=0;
  public _datosCliente:Cliente[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private dialog: MatDialog,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.buscar();
  }


  buscar(){
    
    if(this.clienteId == 0){
      this.service.getMovimiento().subscribe(data => {
        this._datos=data 
      });
    }else{
      this.service.getMovimientoClienteId(this.clienteId).subscribe(data => {
        this._datos=data 
      });
    }
  
  }

  grabar(){
    this.router.navigate(['./movimientotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Movimiento){
    this.router.navigate(['./movimientotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Movimiento){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {      
      this.service.deleteMovimiento(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  detalle(data:Movimiento){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
   
    const dialogRef = this.dialog.open(MovimientodetalleComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      (confirmDialog: boolean) => {
        this.buscar();
      }
    );
  }

  setFiltros(){
    this.service.getCliente().subscribe(data=>{
      this._datosCliente = data;
    })    
  }

  setVisibleSalida(data:Movimiento){
    if(data.tipomovimiento.descripcion =='Salida'){
      return true;
    }
    return false;
  }

}
