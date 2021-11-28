import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMensaje } from 'src/app/model/dialogmensaje';
import { DialogmensajeComponent } from '../dialogos/dialogmensaje/dialogmensaje.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  about() {

    let mensaje: DialogMensaje={titulo: "Informacion",mensaje:"Este prototipo fue creado por Edwin Alexander Menèndez Castillo con carnet 0394-07-4387 y telefono 3648-8304."}

    this.dialog
    .open(DialogmensajeComponent, {
      data: mensaje
    })
    .afterClosed()
    .subscribe();

  }
}
