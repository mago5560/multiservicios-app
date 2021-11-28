import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogMensaje } from 'src/app/model/dialogmensaje';

@Component({
  selector: 'app-dialogmensaje',
  templateUrl: './dialogmensaje.component.html',
  styleUrls: ['./dialogmensaje.component.css']
})
export class DialogmensajeComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<DialogmensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogMensaje) { }

    cerrar(): void {
      this.dialogo.close();
    }

  ngOnInit(): void {
    
  }

}
