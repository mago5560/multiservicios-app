import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/model/articulo';
import { Cliente } from 'src/app/model/cliente';
import { Credito } from 'src/app/model/credito';
import { CreditoDetalle } from 'src/app/model/creditodetalle';
import { Movimiento } from 'src/app/model/movimiento';
import { MovimientoDetalle } from 'src/app/model/movimientodetalle';
import { Proveedor } from 'src/app/model/proveedor';
import { TipoCredito } from 'src/app/model/tipocredito';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { TipoPago } from 'src/app/model/tipopago';
import { Usuario } from 'src/app/model/usuario';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-movimientotecleo',
  templateUrl: './movimientotecleo.component.html',
  styleUrls: ['./movimientotecleo.component.css']
})
export class MovimientotecleoComponent implements OnInit {


  public cls:Movimiento=new Movimiento();
  public clsDetalle:MovimientoDetalle = new MovimientoDetalle();

  public clsCredito:Credito=new Credito();
  public clsCreditoDetalle:CreditoDetalle = new CreditoDetalle();

  public _datos: MovimientoDetalle []=[];
  public _valorTotal:number = 0;

  public _datosTipoMovimiento:TipoMovimiento[]= [];
  public _datosTipoPago:TipoPago[]= [];
  public _datosTipoMovimientoCredito:TipoMovimiento[]= [];

  public _datosCliente:Cliente[]= [];
  public _datosProveedor:Proveedor[]= [];
  public _datosTipoCredito:TipoCredito[]= [];
  public _datosArticulo:Articulo[]= [];

  public _UsuarioCreacion:string="";
  public usuario:Usuario = new Usuario();


  transferidos:number = 0;
  public ventaCredito:boolean = false;
  public salida:boolean=false;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,private storage: StorageService) { 
    
    this.usuario = storage.getUserToken().data[0];
    
    this._UsuarioCreacion = this.usuario.nombre +" " + this.usuario.apellido
    this.cls.usuarioId = this.usuario.id;
  }

  ngOnInit(): void {
    this.setFiltros();
    this.cls.fecha = new Date().toISOString();
    this.cls.clienteId = 1
    this.cls.proveedorId = 1
    
  }
  cerrar() {
    this.router.navigate(['/movimiento'], { relativeTo: this.rutaActiva });
  }

  addItem() {
    this.clsDetalle.valor = this.clsDetalle.cantidad * this.clsDetalle.articulo.valorventa;
    this._datos.push(this.clsDetalle);
    this._valorTotal += this.clsDetalle.valor;
  }



  deleteItem(data:MovimientoDetalle) {
    let index: number = this._datos.findIndex(c=> c == data);
    this._valorTotal  -= this._datos[index].valor;
    this._datos.splice(index,1);
  }

  grabar(){
      if(this.validarCampos()){
        this.service.postMovimiento(this.cls).subscribe(data=>{
          console.log(data);
            this._datos.forEach(c=>{
              c.movimientoId = data.id;
              this.service.postMovimientoDetalle(c).subscribe(data=>{
                this.transferidos +=1;
                if(this._datos.length >= this.transferidos){
                  if(this.ventaCredito){
                    this.clsCredito.clienteId = this.cls.clienteId
                    this.clsCredito.fechainicial = this.cls.fecha
                    this.clsCredito.descripcion ="Compra al credito Movimiento referencia: " + data.id
                    this.clsCredito.valor = this._valorTotal
                    console.log(this.clsCredito)
                    this.service.postCredito(this.clsCredito).subscribe(data =>{
                      this.clsCreditoDetalle.fecha = this.clsCredito.fechainicial
                      this.clsCreditoDetalle.creditoId = data.id
                      this.clsCreditoDetalle.valor = this._valorTotal
                      console.log(this.clsCreditoDetalle)
                      this.service.postCreditoDetalle(this.clsCreditoDetalle).subscribe(detalle =>{
                        this.snackBar.open('Registro grabado', '', {
                          duration: 4000,
                        });
                        this.cerrar();
            
                      })
                    })
  
                  }else{
                    this.snackBar.open('Registro creada correctamente', 'Aceptar', {
                      duration: 2000,
                    });
                    this.cerrar();
                  }
                 
                 
                }
              })
            })
        })
      }
  }


  validarCampos(){
    if(this.cls.tipomovimientoId == 0){
      this.snackBar.open('El Campo Tipo Movimiento es requerido', '', {
        duration: 4000,
      });  
      return false;    
    }
    if(this.cls.tipopagoId == 0){
      this.snackBar.open('El Campo Tipo Pago es requerido', '', {
        duration: 4000,
      });  
      return false;    
    }
    return true;
  }



  onChangeArticulo(){
    this.service.getArticuloId(this.clsDetalle.articuloId).subscribe(data => {
      this.clsDetalle.articulo = data;
      this.clsDetalle.valor = data.valorventa;
    })
  }

  onChangeTipoPago(){
    this.service.getTipoPagoId(this.cls.tipopagoId).subscribe(data => {
      if(data.descripcion =="Credito"){
        this.ventaCredito = true;
      }else{
        this.ventaCredito = false;
      }
    })
  }

  onChangeMovimiento(){
    this.service.getTipoMovimientoId(this.cls.tipomovimientoId).subscribe(data => {
      if(data.descripcion =="Salida"){
        this.salida= true;
      }else{
        this.salida= false;
      }
    })
  }

  setFiltros(){
    this.service.getArticulo().subscribe(data => {
      this._datosArticulo = data;
    })
    this.service.getCliente().subscribe(data=>{
      this._datosCliente = data;
    })
    this.service.getProveedor().subscribe(data=>{
      this._datosProveedor = data;
    })
    this.service.getTipoCredito().subscribe(data=>{
      this._datosTipoCredito = data;
    })
    
   this.service.getTipoPago().subscribe(data=>{
     this._datosTipoPago = data;
   })

    this.service.getTipoMovimientoMovimiento().subscribe(data=>{
      this._datosTipoMovimiento = data;
    })
    this.service.getTipoMovimientoCredito().subscribe(data=>{
      this._datosTipoMovimientoCredito = data;
    })
  }
}
