import { Component } from '@angular/core';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  template:`
  <div>
    <h5>{{ resource.name }}</h5>
    <mdl-textfield  [(ngModel)]="value" type="text" label="Text..." placeholder="type a text" ></mdl-textfield> 
  </div>
  `
})
export class EditStringComponent {
  resource;
  value;
  constructor() {

  }

  init(res){
    this.resource = res;
  }

  getResource(){
    return this.resource;
  }

  getValue(){
    return this.value;
  }


}
