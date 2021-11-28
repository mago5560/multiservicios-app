import { TipoUsuario } from "./tipousuario";

export class Usuario{
    public id:number=0;
    public nombre:string="";
    public apellido:string="";
    public usuario:string="";
    public password:string="";
    public telefono:string="";
    public direccion:string="";
    public tipousuarioId:number=0;
    public tipousuario:TipoUsuario=new TipoUsuario();
}