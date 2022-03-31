import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false

  appareils = [
    {
      name : 'Smart Phone',
      status : 'allumé'
    },
    {
      name : 'Télévision',
      status : 'allumé'
    },
    {
      name : 'Ordinateur',
      status : 'éteint'
    },
  ]


  constructor(){

    setTimeout(() => {
      this.isAuth = true
    }, 4000);
  }

  onAllume(){
    console.log("allumer");
  }
}
