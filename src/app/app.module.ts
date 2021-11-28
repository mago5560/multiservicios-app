import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './view/login/login.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { ProveedorComponent } from './view/proveedor/proveedor.component';
import { ProveedortecleoComponent } from './view/proveedor/proveedortecleo/proveedortecleo.component';
import { TipoclienteComponent } from './view/tipocliente/tipocliente.component';
import { TipoclientetecleoComponent } from './view/tipocliente/tipoclientetecleo/tipoclientetecleo.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { ClientetecleoComponent } from './view/cliente/clientetecleo/clientetecleo.component';
import { TipopagoComponent } from './view/tipopago/tipopago.component';
import { TipopagotecleoComponent } from './view/tipopago/tipopagotecleo/tipopagotecleo.component';
import { DialogmensajeComponent } from './view/dialogos/dialogmensaje/dialogmensaje.component';
import { DialogconfirmComponent } from './view/dialogos/dialogconfirm/dialogconfirm.component';
import { ArticuloComponent } from './view/articulo/articulo.component';
import { ArticulotecleoComponent } from './view/articulo/articulotecleo/articulotecleo.component';
import { TipocreditoComponent } from './view/tipocredito/tipocredito.component';
import { TipocreditotecleoComponent } from './view/tipocredito/tipocreditotecleo/tipocreditotecleo.component';
import { TipomovimientoComponent } from './view/tipomovimiento/tipomovimiento.component';
import { TipomovimientotecleoComponent } from './view/tipomovimiento/tipomovimientotecleo/tipomovimientotecleo.component';
import { CreditoComponent } from './view/credito/credito.component';
import { CreditotecleoComponent } from './view/credito/creditotecleo/creditotecleo.component';
import { MovimientoComponent } from './view/movimiento/movimiento.component';
import { MovimientotecleoComponent } from './view/movimiento/movimientotecleo/movimientotecleo.component';
import { CreditoconsultaComponent } from './view/creditoconsulta/creditoconsulta.component';
import { CreditoabonoComponent } from './view/credito/creditoabono/creditoabono.component';
import { MovimientodetalleComponent } from './view/movimiento/movimientodetalle/movimientodetalle.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { UsuariotecleoComponent } from './view/usuario/usuariotecleo/usuariotecleo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ProveedorComponent,
    ProveedortecleoComponent,
    TipoclienteComponent,
    TipoclientetecleoComponent,
    ClienteComponent,
    ClientetecleoComponent,
    TipopagoComponent,
    TipopagotecleoComponent,
    DialogmensajeComponent,
    DialogconfirmComponent,
    ArticuloComponent,
    ArticulotecleoComponent,
    TipocreditoComponent,
    TipocreditotecleoComponent,
    TipomovimientoComponent,
    TipomovimientotecleoComponent,
    CreditoComponent,
    CreditotecleoComponent,
    MovimientoComponent,
    MovimientotecleoComponent,
    CreditoconsultaComponent,
    CreditoabonoComponent,
    MovimientodetalleComponent,
    UsuarioComponent,
    UsuariotecleoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
