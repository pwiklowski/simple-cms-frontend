import { Component } from '@angular/core';

@Component({
  selector: 'home',  // <home></home>
  template:`
  <div>
    <h5>{{ resource.name }}</h5>
    <mdl-textfield type="text"
      label="Number..."
      pattern="-?[0-9]*(\.[0-9]+)?" 
      placeholder="type a number">
    </mdl-textfield> 
  </div>
  `
})
export class EditIntegerComponent {
  resource;
  constructor() {

  }

  init(res){
    this.resource = res;
  }
}
