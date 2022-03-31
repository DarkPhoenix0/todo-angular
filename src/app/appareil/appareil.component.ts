import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string
  @Input() appareilStatus :string;

  constructor() {
    this.appareilName = '' 
    this.appareilStatus = ''
   }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }

  getColor():any{
    if(this.appareilStatus==='allumé'){
      return 'green'
    }else if(this.appareilStatus==='éteint'){
      return 'red'
    }
  }

}