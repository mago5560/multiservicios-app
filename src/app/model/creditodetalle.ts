import { Credito } from "./credito";
import { TipoMovimiento } from "./tipomovimiento";

export class CreditoDetalle{
    public id:number=0;
    public fecha:string="";
    public valor:number=0.00;
    public tipomovimientoId:number=0;
    public tipomovimiento:TipoMovimiento = new TipoMovimiento();
    public creditoId:number=0;
    public credito:Credito = new Credito();
}