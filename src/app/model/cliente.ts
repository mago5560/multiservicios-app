import { TipoCliente } from "./tipocliente";

export class Cliente{
    public id:number=0;
    public nombre:string="";
    public apellido:string="";
    
    public dpi:string="";
    public nit:string="";
    public telefono:string="";
    public correo:string="";
    public direccion:string="";
    public tipoclienteId:number=0;
    public tipocliente:TipoCliente =new TipoCliente();
}