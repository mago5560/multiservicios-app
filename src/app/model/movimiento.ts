import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";
import { TipoMovimiento } from "./tipomovimiento";
import { TipoPago } from "./tipopago";
import { Usuario } from "./usuario";

export class Movimiento{
    public id:number=0;
    public fecha:string="";
    public tipomovimientoId:number=0;
    public tipomovimiento:TipoMovimiento= new TipoMovimiento();
    public tipopagoId:number=0;
    public tipopago:TipoPago=new TipoPago();
    public clienteId:number=0;
    public cliente:Cliente=new Cliente();
    public proveedorId:number=0;
    public proveedor:Proveedor = new Proveedor();
    public usuarioId:number=0;
    public usuario:Usuario = new Usuario();
}