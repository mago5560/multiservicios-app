import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Articulo } from "../model/articulo";
import { Cliente } from "../model/cliente";
import { Credito } from "../model/credito";
import { CreditoDetalle } from "../model/creditodetalle";
import { JWToken } from "../model/jwtoken";
import { Movimiento } from "../model/movimiento";
import { MovimientoDetalle } from "../model/movimientodetalle";
import { Proveedor } from "../model/proveedor";
import { TipoCliente } from "../model/tipocliente";
import { TipoCredito } from "../model/tipocredito";
import { TipoMovimiento } from "../model/tipomovimiento";
import { TipoPago } from "../model/tipopago";
import { TipoUsuario } from "../model/tipousuario";
import { Usuario } from "../model/usuario";
import { URL_HOST } from "../shared/var.constants";
import { StorageService } from "./storage.service";


@Injectable({
    providedIn: 'root'
  })
  export class WebServices {
  

    url = URL_HOST;

    constructor(private http: HttpClient, private storageService:StorageService) { }

    //#SERVICE  "Usuario"

    getLogin(user:string,pass:string) : Observable<JWToken>{
        return this.http.get<JWToken>(this.url+"login/"+user+"/"+pass);
    }

    getUsuarios() : Observable<Usuario[]>{
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
        'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
      })
      return this.http.get<Usuario[]>(this.url+"usuario",{ headers: reqHeader });
    }

    getUsuarioId(id:number) : Observable<Usuario>{
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
        'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
      })
      return this.http.get<Usuario>(this.url+"usuario/"+id,{ headers: reqHeader });
    }

    postUsuario(usuario:Usuario):Observable<Usuario>{
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
      })

        return this.http.post<Usuario>(this.url+"usuario",JSON.stringify(usuario),{headers: reqHeader})
    }

    putUsuario(usuario:Usuario) : Observable<Usuario>{
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
      })
        return this.http.put<Usuario>(this.url+"usuario/"+usuario.id,JSON.stringify(usuario),{headers: reqHeader})
    }
    deleteUsuario(usuario:Usuario) : Observable<Usuario>{
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
      })
        return this.http.delete<Usuario>(this.url+"usuario/"+usuario.id,{headers: reqHeader})
    }

    //#SERVICE "Usuario"


      //#SERVICE  "Credito"
      getCredito() : Observable<Credito[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Credito[]>(this.url+"credito",{ headers: reqHeader });
      }

      getCreditoId(id:number) : Observable<Credito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Credito>(this.url+"credito/"+id,{ headers: reqHeader });
      }

      getCreditoClienteId(id:number) : Observable<Credito[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Credito[]>(this.url+"credito/cliente/"+id,{ headers: reqHeader });
      }

      getCreditoTipoCreditoId(id:number) : Observable<Credito[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Credito[]>(this.url+"credito/tipocredito/"+id,{ headers: reqHeader });
      }
   
      postCredito(data:Credito):Observable<Credito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<Credito>(this.url+"credito",JSON.stringify(data),{headers: reqHeader})
      }
  
      putCredito(data:Credito) : Observable<Credito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<Credito>(this.url+"credito/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteCredito(data:Credito) : Observable<Credito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<Credito>(this.url+"credito/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "Credito"

      //#SERVICE  "CreditoDetalle"
      getCreditoDetalle() : Observable<CreditoDetalle[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<CreditoDetalle[]>(this.url+"creditodetalle",{ headers: reqHeader });
      }

      getCreditoDetalleId(id:number) : Observable<CreditoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<CreditoDetalle>(this.url+"creditodetalle/"+id,{ headers: reqHeader });
      }

      getCreditoDetalleTipoMovimientoId(id:number) : Observable<CreditoDetalle[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<CreditoDetalle[]>(this.url+"creditodetalle/tipomovimiento/"+id,{ headers: reqHeader });
      }

      getCreditoDetalleCreditoId(id:number) : Observable<CreditoDetalle[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<CreditoDetalle[]>(this.url+"creditodetalle/credito/"+id,{ headers: reqHeader });
      }
   
      postCreditoDetalle(data:CreditoDetalle):Observable<CreditoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<CreditoDetalle>(this.url+"creditodetalle",JSON.stringify(data),{headers: reqHeader})
      }
  
      putCreditoDetalle(data:CreditoDetalle) : Observable<CreditoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<CreditoDetalle>(this.url+"creditodetalle/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteCreditoDetalle(data:CreditoDetalle) : Observable<CreditoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<CreditoDetalle>(this.url+"creditodetalle/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "CreditoDetalle"

      //#SERVICE "Movimiento"
      
      getMovimiento() : Observable<Movimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento[]>(this.url+"movimiento",{ headers: reqHeader });
      }

      getMovimientoId(id:number) : Observable<Movimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento>(this.url+"movimiento/"+id,{ headers: reqHeader });
      }

      getMovimientoClienteId(id:number) : Observable<Movimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento[]>(this.url+"movimiento/cliente/"+id,{ headers: reqHeader });
      }
   
      getMovimientoProveedorId(id:number) : Observable<Movimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento[]>(this.url+"movimiento/proveedor/"+id,{ headers: reqHeader });
      }

      getMovimientoTipoMovimientoId(id:number) : Observable<Movimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento[]>(this.url+"movimiento/tipomovimiento/"+id,{ headers: reqHeader });
      }

      getMovimientoTipoPagoId(id:number) : Observable<Movimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Movimiento[]>(this.url+"movimiento/tipopago/"+id,{ headers: reqHeader });
      }

      postMovimiento(data:Movimiento):Observable<Movimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<Movimiento>(this.url+"movimiento",JSON.stringify(data),{headers: reqHeader})
      }
  
      putMovimiento(data:Movimiento) : Observable<Movimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<Movimiento>(this.url+"movimiento/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }

      deleteMovimiento(data:Movimiento) : Observable<Movimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<Movimiento>(this.url+"movimiento/"+data.id,{headers: reqHeader})
      }

      //#SERVICE "movimeinto"



      //#SERVICE "MovimientoDetalle"
      getMovimientoDetalle() : Observable<MovimientoDetalle[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<MovimientoDetalle[]>(this.url+"movimientodetalle",{ headers: reqHeader });
      }

      getMovimientoDetalleId(id:number) : Observable<MovimientoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<MovimientoDetalle>(this.url+"movimientodetalle/"+id,{ headers: reqHeader });
      }

      getMovimientoDetalleMovimientoId(id:number) : Observable<MovimientoDetalle[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<MovimientoDetalle[]>(this.url+"movimientodetalle/movimiento/"+id,{ headers: reqHeader });
      }
   
      postMovimientoDetalle(data:MovimientoDetalle):Observable<MovimientoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<MovimientoDetalle>(this.url+"movimientodetalle",JSON.stringify(data),{headers: reqHeader})
      }
  
      putMovimientoDetalle(data:MovimientoDetalle) : Observable<MovimientoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<MovimientoDetalle>(this.url+"movimientodetalle/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteMovimientoDetalle(data:MovimientoDetalle) : Observable<MovimientoDetalle>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<MovimientoDetalle>(this.url+"movimientodetalle/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "MovimientoDetalle"

      


    //#SERVICE "Maestros"
      

      //#SERVICE  "TipoUsuario"
      getTipoUsuario() : Observable<TipoUsuario[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoUsuario[]>(this.url+"tipousuario",{ headers: reqHeader });
      }

      getTipoUsuarioId(id:number) : Observable<TipoUsuario>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoUsuario>(this.url+"tipousuario/"+id,{ headers: reqHeader });
      }
   
      postTipoUsuario(data:TipoUsuario):Observable<TipoUsuario>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<TipoUsuario>(this.url+"tipousuario",JSON.stringify(data),{headers: reqHeader})
      }
  
      putTipoUsuario(data:TipoUsuario) : Observable<TipoUsuario>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<TipoUsuario>(this.url+"tipousuario/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteTipoUsuario(data:TipoUsuario) : Observable<TipoUsuario>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<TipoUsuario>(this.url+"tipousuario/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "TipoUsuario"


      //#SERVICE  "TipoCliente"
      getTipoCliente() : Observable<TipoCliente[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoCliente[]>(this.url+"tipocliente",{ headers: reqHeader });
      }

      getTipoClienteId(id:number) : Observable<TipoCliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoCliente>(this.url+"tipocliente/"+id,{ headers: reqHeader });
      }
   
      postTipoCliente(data:TipoCliente):Observable<TipoCliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<TipoCliente>(this.url+"tipocliente",JSON.stringify(data),{headers: reqHeader})
      }
  
      putTipoCliente(data:TipoCliente) : Observable<TipoCliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<TipoCliente>(this.url+"tipocliente/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteTipoCliente(data:TipoCliente) : Observable<TipoCliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<TipoCliente>(this.url+"tipocliente/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "TipoCliente"


      //#SERVICE  "TipoPago"
      getTipoPago() : Observable<TipoPago[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoPago[]>(this.url+"tipopago",{ headers: reqHeader });
      }

      getTipoPagoId(id:number) : Observable<TipoPago>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoPago>(this.url+"tipopago/"+id,{ headers: reqHeader });
      }
   
      postTipoPago(data:TipoPago):Observable<TipoPago>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<TipoPago>(this.url+"tipopago",JSON.stringify(data),{headers: reqHeader})
      }
  
      putTipoPago(data:TipoPago) : Observable<TipoPago>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<TipoPago>(this.url+"tipopago/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteTipoPago(data:TipoPago) : Observable<TipoPago>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<TipoPago>(this.url+"tipopago/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "TipoPago"


      //#SERVICE  "TipoCredito"
      getTipoCredito() : Observable<TipoCredito[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoCredito[]>(this.url+"tipocredito",{ headers: reqHeader });
      }

      getTipoCreditoId(id:number) : Observable<TipoCredito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoCredito>(this.url+"tipocredito/"+id,{ headers: reqHeader });
      }
   
      postTipoCredito(data:TipoCredito):Observable<TipoCredito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<TipoCredito>(this.url+"tipocredito",JSON.stringify(data),{headers: reqHeader})
      }
  
      putTipoCredito(data:TipoCredito) : Observable<TipoCredito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<TipoCredito>(this.url+"tipocredito/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteTipoCredito(data:TipoCredito) : Observable<TipoCredito>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<TipoCredito>(this.url+"tipocredito/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "TipoCredito"


      //#SERVICE  "TipoMovimiento"
      getTipoMovimiento() : Observable<TipoMovimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento[]>(this.url+"tipomovimiento",{ headers: reqHeader });
      }

      getTipoMovimientoMovimiento() : Observable<TipoMovimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento[]>(this.url+"tipomovimiento/movimiento",{ headers: reqHeader });
      }

      getTipoMovimientoCredito() : Observable<TipoMovimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento[]>(this.url+"tipomovimiento/credito",{ headers: reqHeader });
      }

      getTipoMovimientoId(id:number) : Observable<TipoMovimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento>(this.url+"tipomovimiento/"+id,{ headers: reqHeader });
      }
   
      postTipoMovimiento(data:TipoMovimiento):Observable<TipoMovimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<TipoMovimiento>(this.url+"tipomovimiento",JSON.stringify(data),{headers: reqHeader})
      }
  
      putTipoMovimiento(data:TipoMovimiento) : Observable<TipoMovimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<TipoMovimiento>(this.url+"tipomovimiento/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }

      deleteTipoMovimiento(data:TipoMovimiento) : Observable<TipoMovimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<TipoMovimiento>(this.url+"tipomovimiento/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "TipoMovimiento"

      //#SERVICE  "Articulo"
      getArticulo() : Observable<Articulo[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Articulo[]>(this.url+"articulo",{ headers: reqHeader });
      }

      getArticuloId(id:number) : Observable<Articulo>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Articulo>(this.url+"articulo/"+id,{ headers: reqHeader });
      }
   
      postArticulo(data:Articulo):Observable<Articulo>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<Articulo>(this.url+"articulo",JSON.stringify(data),{headers: reqHeader})
      }
  
      putArticulo(data:Articulo) : Observable<Articulo>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<Articulo>(this.url+"articulo/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteArticulo(data:Articulo) : Observable<Articulo>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<Articulo>(this.url+"articulo/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "Articulo"

      //#SERVICE  "Cliente"
      getCliente() : Observable<Cliente[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Cliente[]>(this.url+"cliente",{ headers: reqHeader });
      }

      getClienteId(id:number) : Observable<Cliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Cliente>(this.url+"cliente/"+id,{ headers: reqHeader });
      }
   
      postCliente(data:Cliente):Observable<Cliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<Cliente>(this.url+"cliente",JSON.stringify(data),{headers: reqHeader})
      }
  
      putCliente(data:Cliente) : Observable<Cliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<Cliente>(this.url+"cliente/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteCliente(data:Cliente) : Observable<Cliente>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<Cliente>(this.url+"cliente/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "Cliente"



      //#SERVICE  "Proveedor"
      getProveedor() : Observable<Proveedor[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Proveedor[]>(this.url+"proveedor",{ headers: reqHeader });
      }

      getProveedorId(id:number) : Observable<Proveedor>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Proveedor>(this.url+"proveedor/"+id,{ headers: reqHeader });
      }
   
      postProveedor(data:Proveedor):Observable<Proveedor>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
  
          return this.http.post<Proveedor>(this.url+"proveedor",JSON.stringify(data),{headers: reqHeader})
      }
  
      putProveedor(data:Proveedor) : Observable<Proveedor>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.put<Proveedor>(this.url+"proveedor/"+data.id,JSON.stringify(data),{headers: reqHeader})
      }
      deleteProveedor(data:Proveedor) : Observable<Proveedor>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
          return this.http.delete<Proveedor>(this.url+"proveedor/"+data.id,{headers: reqHeader})
      }
      //#SERVICE "Proveedor"

    //#SERVICE "Maestros"


  }

