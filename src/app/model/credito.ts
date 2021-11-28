import { Cliente } from "./cliente";
import { TipoCredito } from "./tipocredito";

export class Credito{
    public id:number=0;
    public fechainicial:string="";
    public fechafinal:string="";
    public valor:number=0.00;
    public descripcion:string="";
    public clienteId:number=0;
    public cliente:Cliente = new Cliente();
    public tipocreditoId:number=0;
    public tipocredito:TipoCredito = new TipoCredito();
}