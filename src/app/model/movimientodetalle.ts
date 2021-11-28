import { Articulo } from "./articulo";
import { Movimiento } from "./movimiento";

export class MovimientoDetalle{
    public id:number=0;
    public cantidad:number=0;
    public valor:number=0;
    public articuloId:number=0;
    public articulo:Articulo = new Articulo();
    public movimientoId:number=0;
    public movimiento:Movimiento = new Movimiento();


}