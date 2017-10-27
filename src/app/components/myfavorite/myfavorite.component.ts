import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-myfavorite',
    templateUrl: './myfavorite.component.html',
    styleUrls: ['./myfavorite.component.css']
  })
  export class MyfavoriteComponent implements OnInit{
      private name :String[];
      constructor(){}

      ngOnInit(){
          this.name = ["Detective Naruto","pad thai","doctor strange"];
          
      }
  }