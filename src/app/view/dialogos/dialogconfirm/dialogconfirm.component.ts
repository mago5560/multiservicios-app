import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogMensaje } from 'src/app/model/dialogmensaje';

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent implements OnInit {

 
  constructor(
    public dialogo: MatDialogRef<DialogconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogMensaje) { }

    cerrar(): void {
      this.dialogo.close(false);
    }
    aceptar(): void {
      this.dialogo.close(true);
    }
  ngOnInit(): void {
    
  }
}
