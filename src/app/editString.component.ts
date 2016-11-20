import { Component } from '@angular/core';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  template:`
  <div>
    <h5>{{ resource.name }}</h5>
    <mdl-textfield type="text" label="Text..." placeholder="type a text" ></mdl-textfield> 
  </div>
  `
})
export class EditStringComponent {
  resource;
  constructor() {

  }

  init(res){
    this.resource = res;
  }


}
