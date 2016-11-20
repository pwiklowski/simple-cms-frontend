import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <mdl-layout #layout mdl-layout-fixed-header mdl-layout-header-seamed>
    <mdl-layout-header>
      <mdl-layout-header-row>
        <mdl-layout-title>CMS</mdl-layout-title>
        <mdl-layout-spacer></mdl-layout-spacer>
      </mdl-layout-header-row>
    </mdl-layout-header>
    <mdl-layout-drawer>
      <mdl-layout-title>Resources</mdl-layout-title>
      <nav class="mdl-navigation">
          <div class="mdl-navigation__link" >
          sdf
          </div>
      </nav>
    </mdl-layout-drawer>
    <mdl-layout-content>
     <router-outlet></router-outlet>
    </mdl-layout-content>
  </mdl-layout>
  
  
  
  <main> </main>`
 })
export class AppComponent {
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}