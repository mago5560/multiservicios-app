import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Credito } from 'src/app/model/credito';
import { CreditoDetalle } from 'src/app/model/creditodetalle';
import { TipoCredito } from 'src/app/model/tipocredito';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-creditotecleo',
  templateUrl: './creditotecleo.component.html',
  styleUrls: ['./creditotecleo.component.css']
})
export class CreditotecleoComponent implements OnInit {

  public cls:Credito=new Credito();
  public clsDetalle:CreditoDetalle=new CreditoDetalle();
  public _datosCliente:Cliente[]= [];
  public _datosTipoCredito:TipoCredito[]= [];
  public _datosTipoMovimiento:TipoMovimiento[]= [];

  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
    if(this.cls.fechainicial ==""){
      this.cls.fechainicial = new Date().toISOString();
    }
  }

  cerrar() {
    this.router.navigate(['/credito'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.fechainicial == ""){
      this.snackBar.open('El Campo Fecha Inicial es requerido', '', {
        duration: 4000,
      });      
    }else if (this.cls.fechafinal == ""){
      this.snackBar.open('El Campo Fecha Final es requerido', '', {
        duration: 4000,
      });
    }else if (this.cls.valor == 0){
      this.snackBar.open('El Campo Valor es requerido', '', {
        duration: 4000,
      });
    }else if (this.cls.clienteId == 0){
      this.snackBar.open('El Campo Cliente es requerido', '', {
        duration: 4000,
      });
    }
    else if (this.cls.tipocreditoId == 0){
      this.snackBar.open('El Campo Tipo Credito es requerido', '', {
        duration: 4000,
      });
    }else{
 

      if(this.cls.id ==0){
        this.service.postCredito(this.cls).subscribe(data =>{
          this.clsDetalle.fecha = this.cls.fechainicial
          this.clsDetalle.creditoId = data.id
          this.clsDetalle.valor = this.cls.valor
          this.service.postCreditoDetalle(this.clsDetalle).subscribe(detalle =>{
            this.snackBar.open('Registro grabado', '', {
              duration: 4000,
            });
            this.cerrar();

          })
        })
      }else{
        this.service.putCredito(this.cls).subscribe(data =>{
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
      this.service.getCreditoId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

  setFiltros(){
    this.service.getCliente().subscribe(data=>{
      this._datosCliente = data;
    })
    this.service.getTipoCredito().subscribe(data=>{
      this._datosTipoCredito = data;
    })
    this.service.getTipoMovimientoCredito().subscribe(data=>{
      this._datosTipoMovimiento = data;
    })
  }

}
