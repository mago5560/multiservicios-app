import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Credito } from 'src/app/model/credito';
import { CreditoDetalle } from 'src/app/model/creditodetalle';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-creditoabono',
  templateUrl: './creditoabono.component.html',
  styleUrls: ['./creditoabono.component.css']
})
export class CreditoabonoComponent implements OnInit {

  
  public cls:CreditoDetalle=new CreditoDetalle();
  public _datosTipoMovimiento:TipoMovimiento[]= [];
  public clsCredito:Credito;
  public creditosDetalle:CreditoDetalle[]= [];
  public totalAbonado:number=0;
  public total:number=0;
  constructor(private service:WebServices,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<CreditoabonoComponent>,@Inject(MAT_DIALOG_DATA) public data: Credito) {
    this.clsCredito = data;
   }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.clsCredito.id);  
    this.cls.fecha = new Date().toISOString();
  }

  cerrar() {
    this.dialogRef.close(false);
  }

  grabar(){


    if(this.cls.fecha == ""){
      this.snackBar.open('El Campo Fecha  es requerido', '', {
        duration: 4000,
      });      
    }else if (this.cls.tipomovimientoId == 0){
      this.snackBar.open('El Campo Tipo Movimiento  es requerido', '', {
        duration: 4000,
      });
    }else if (this.cls.valor == 0){
      this.snackBar.open('El Campo Valor es requerido', '', {
        duration: 4000,
      });
    }else{
      this.cls.credito = this.clsCredito;
      this.cls.creditoId = this.clsCredito.id;
      if(this.cls.id ==0){
        this.service.postCreditoDetalle(this.cls).subscribe(data =>{
          this.dialogRef.close(true);
        })
      }else{
        this.service.putCreditoDetalle(this.cls).subscribe(data =>{
          this.dialogRef.close(true);
        })
      }
    }
  }

  obtenerDatos(id:number){
    if(id>0){

      this.service.getCreditoDetalleCreditoId(id).subscribe(data =>{
        this.creditosDetalle=data;    
        data.forEach(d =>{
          if(d.tipomovimiento.signo =='-1'){
            this.total =  this.total - d.valor
          }else{
            this.total =  Number(this.total) + Number(d.valor)
          }
        }) 
        this.total = this.total * -1
        this.totalAbonado =   this.clsCredito.valor - this.total
      })


    }
  }

  setFiltros(){
    this.service.getTipoMovimientoCredito().subscribe(data=>{
      this._datosTipoMovimiento = data;
    })
  }

  grabarVisible(){
    if(this.total == 0 ){
      return false;
    }else{
      return true;
    }

  }

}
