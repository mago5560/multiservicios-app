import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Credito } from 'src/app/model/credito';
import { WebServices } from 'src/app/service/web.service';
import { CreditoabonoComponent } from './creditoabono/creditoabono.component';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  public _datos:Credito[]= [];
  clienteId:number=0;
  public _datosCliente:Cliente[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private dialog: MatDialog,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.buscar();
  }


  buscar(){
    
    if(this.clienteId == 0){
      this.service.getCredito().subscribe(data => {
        this._datos=data 
      });
    }else{
      this.service.getCreditoClienteId(this.clienteId).subscribe(data => {
        this._datos=data 
      });
    }
  
  }

  grabar(){
    this.router.navigate(['./creditotecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Credito){
    this.router.navigate(['./creditotecleo',data.id], { relativeTo: this.rutaActiva });
  }

  abonar(data:Credito){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
   
    const dialogRef = this.dialog.open(CreditoabonoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      (confirmDialog: boolean) => {
        if(confirmDialog){
          this.snackBar.open('Registro creada correctamente', 'Aceptar', {
            duration: 2000,
          });
          this.buscar()
        }
      }
    );
  }

  eliminar(data:Credito){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {      
      this.service.deleteCredito(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  estadoCuenta(data:Credito){
    this.router.navigate(['./creditoconsulta',data.id], { relativeTo: this.rutaActiva });
  }

  setFiltros(){
    this.service.getCliente().subscribe(data=>{
      this._datosCliente = data;
    })    
  }

}
