import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './guard/authorization.guard';
import { ArticuloComponent } from './view/articulo/articulo.component';
import { ArticulotecleoComponent } from './view/articulo/articulotecleo/articulotecleo.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { ClientetecleoComponent } from './view/cliente/clientetecleo/clientetecleo.component';
import { CreditoComponent } from './view/credito/credito.component';
import { CreditotecleoComponent } from './view/credito/creditotecleo/creditotecleo.component';
import { CreditoconsultaComponent } from './view/creditoconsulta/creditoconsulta.component';
import { LoginComponent } from './view/login/login.component';
import { MovimientoComponent } from './view/movimiento/movimiento.component';
import { MovimientotecleoComponent } from './view/movimiento/movimientotecleo/movimientotecleo.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { ProveedorComponent } from './view/proveedor/proveedor.component';
import { ProveedortecleoComponent } from './view/proveedor/proveedortecleo/proveedortecleo.component';
import { TipoclienteComponent } from './view/tipocliente/tipocliente.component';
import { TipoclientetecleoComponent } from './view/tipocliente/tipoclientetecleo/tipoclientetecleo.component';
import { TipocreditoComponent } from './view/tipocredito/tipocredito.component';
import { TipocreditotecleoComponent } from './view/tipocredito/tipocreditotecleo/tipocreditotecleo.component';
import { TipomovimientoComponent } from './view/tipomovimiento/tipomovimiento.component';
import { TipomovimientotecleoComponent } from './view/tipomovimiento/tipomovimientotecleo/tipomovimientotecleo.component';
import { TipopagoComponent } from './view/tipopago/tipopago.component';
import { TipopagotecleoComponent } from './view/tipopago/tipopagotecleo/tipopagotecleo.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { UsuariotecleoComponent } from './view/usuario/usuariotecleo/usuariotecleo.component';


const routes: Routes = [
  {path: 'movimiento',canActivate: [AuthorizationGuard],children:[{path:'', component:MovimientoComponent},{path:'movimientotecleo/:Id',component:MovimientotecleoComponent}]},
  {path: 'credito',canActivate: [AuthorizationGuard],children:[{path:'', component:CreditoComponent},{path:'creditotecleo/:Id',component:CreditotecleoComponent},{path:'creditoconsulta/:Id',component:CreditoconsultaComponent}]},
  {path: 'tipocredito',canActivate: [AuthorizationGuard],children:[{path:'', component:TipocreditoComponent},{path:'tipocreditotecleo/:Id',component:TipocreditotecleoComponent}]},
  {path: 'tipomovimiento',canActivate: [AuthorizationGuard],children:[{path:'', component:TipomovimientoComponent},{path:'tipomovimientotecleo/:Id',component:TipomovimientotecleoComponent}]},
  {path: 'usuario',canActivate: [AuthorizationGuard],children:[{path:'', component:UsuarioComponent},{path:'usuariotecleo/:Id',component:UsuariotecleoComponent}]},
  {path: 'tipopago',canActivate: [AuthorizationGuard],children:[{path:'', component:TipopagoComponent},{path:'tipopagotecleo/:Id',component:TipopagotecleoComponent}]},
  {path: 'tipocliente',canActivate: [AuthorizationGuard],children:[{path:'', component:TipoclienteComponent},{path:'tipoclientetecleo/:Id',component:TipoclientetecleoComponent}]},
  {path: 'articulo',canActivate: [AuthorizationGuard],children:[{path:'', component:ArticuloComponent},{path:'articulotecleo/:Id',component:ArticulotecleoComponent}]},
  {path: 'cliente',canActivate: [AuthorizationGuard],children:[{path:'', component:ClienteComponent},{path:'clientetecleo/:Id',component:ClientetecleoComponent}]},
  {path: 'proveedor',canActivate: [AuthorizationGuard],children:[{path:'', component:ProveedorComponent},{path:'proveedortecleo/:Id',component:ProveedortecleoComponent}]},
  {path: 'principal',component:PrincipalComponent,canActivate: [AuthorizationGuard]},
  {path: 'login',component:LoginComponent},
  {path: '', redirectTo: '/principal', pathMatch: 'full' },
  {path: '**', redirectTo: '/principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
