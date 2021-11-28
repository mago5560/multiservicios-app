import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movimiento } from 'src/app/model/movimiento';
import { MovimientoDetalle } from 'src/app/model/movimientodetalle';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-movimientodetalle',
  templateUrl: './movimientodetalle.component.html',
  styleUrls: ['./movimientodetalle.component.css']
})
export class MovimientodetalleComponent implements OnInit {

  public clsMovimiento:Movimiento;
  public _datosDetalle:MovimientoDetalle[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<MovimientodetalleComponent>,@Inject(MAT_DIALOG_DATA) public data: Movimiento) {
    this.clsMovimiento = data;
   }


  ngOnInit(): void {
    this.obtenerDatos(this.clsMovimiento.id);  
  }

  cerrar() {
    this.dialogRef.close(false);
  }


  obtenerDatos(id:number){
    if(id>0){

      this.service.getMovimientoDetalleMovimientoId(id).subscribe(data =>{
        this._datosDetalle=data;    
      })


    }
  }
}
