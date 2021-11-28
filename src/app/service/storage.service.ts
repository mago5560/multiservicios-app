import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { JWToken } from "../model/jwtoken";
import { Usuario } from "../model/usuario";
import { UsuarioToken } from "../model/usuariotoken";




@Injectable({
    providedIn: 'root'
  })
  
  export class StorageService {
  
    private localStorageService;
    private currentSession =new JWToken ;
  
    constructor(private router: Router) {
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
     }
  
     setCurrentSession(session: JWToken): void {
      this.currentSession = session;
      this.localStorageService.setItem('token', JSON.stringify(session));
    }
  
     loadSessionData(): JWToken{
      var sessionStr = this.localStorageService.getItem('token');
      return (sessionStr) ? <JWToken> JSON.parse(sessionStr) : new JWToken;
    }
  
    getCurrentSession(): JWToken {
      return this.currentSession;
    }
  
    removeCurrentSession(): void {
      this.localStorageService.removeItem('token');
      this.currentSession = new JWToken;
    }
  
    isAuthenticated(): boolean {
      const helper = new JwtHelperService();
      return (this.getCurrentToken() != null && !helper.isTokenExpired(this.getCurrentToken())) ? true : false;
    };
  
  
  
    getCurrentToken(): string {
      var session = this.getCurrentSession();
      return (session && session.token) ? session.token : '';
    };
  
    getUserToken():UsuarioToken{
      const helper = new JwtHelperService();
      var session  = this.getCurrentSession();
      return helper.decodeToken(session.token)
    }
  
    logout(): void{
      this.removeCurrentSession();
      this.router.navigate(['/login']);
    }

    /*
    titelNavBar:string ="";
    setTitelNavBar(titel:string){
      this.titelNavBar = titel;
    }
    
    getTitelNavBar():string{
      return this.titelNavBar;
    }
    */

  }