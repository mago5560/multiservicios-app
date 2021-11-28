import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JWToken } from 'src/app/model/jwtoken';
import { Usuario } from 'src/app/model/usuario';
import { StorageService } from 'src/app/service/storage.service';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public usuario= new Usuario();

  constructor(private router: Router, private service:WebServices,private storageService:StorageService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ingresar(){

    if(this.usuario.usuario != '' && this.usuario.password != '' ){
      this.service.getLogin(this.usuario.usuario,this.usuario.password).subscribe(data=>{
        console.log(data);
        if(data != null){
          let token =  JSON.stringify( data );
          let loginSession = new JWToken();
          loginSession  = JSON.parse(token);
          this.correctLogin(loginSession);
        }else{
          this.snackBar.open('Usuario o Contraseña no correcta, verifique', '', {
            duration: 4000,
          });
        }
      })
    }else{
      this.snackBar.open('Usuario o Contraseña requerida', '', {
        duration: 4000,
      });
    }
  }

  private correctLogin(data: JWToken){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/principal']);
  }

}
