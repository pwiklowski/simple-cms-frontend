import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
        <template ngFor let-resource [ngForOf]="resources">
          <div class="mdl-navigation__link" (click)="showResource(resource); layout.toggleDrawer()">
            {{ resource.name }}
          </div>
        </template>
      </nav>
    </mdl-layout-drawer>
    <mdl-layout-content>
     <router-outlet></router-outlet>
    </mdl-layout-content>
  </mdl-layout>
 `
 })
export class AppComponent {
  resources = [];
  constructor(public appState: AppState, private router: Router) {

  }

  ngOnInit() {
    this.appState.getConfig((config)=>{
      this.resources = config.resources;
      console.log(config);
    });
  }

  showResource(resource){
    this.router.navigate(['/resource', resource.name]);
  }

}