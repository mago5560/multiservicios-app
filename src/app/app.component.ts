import { Component, OnChanges, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { WebServices } from './service/web.service';
import { Usuario } from './model/usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public location: Location;
 
  constructor(location: Location,public storageService: StorageService, private service:WebServices){
    this.location = location;
 
  }

  ngOnInit() {
   
  }


  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) == '#'){
        titlee = titlee.slice( 2 );
    }
    titlee="MULTISERVICIOS S.A."
    return titlee;
  }

 
}
