import { Component } from '@angular/core';
import { AppState } from './app.service';
import { ActivatedRoute,Params } from '@angular/router';
import { EditStringComponent } from './editString.component';
import { EditIntegerComponent } from './editInteger.component';

import { ViewChild, AfterViewInit, ApplicationRef, Injector, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'resource',  // <home></home>
  styleUrls: [ './resource.style.css' ],
  templateUrl: './resource.template.html'
})
export class ResourceComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  resourceName;
  items = [];
  config;

  constructor(private service: AppState, private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) {
  }
  ngOnInit(){
    this.resourceName = this.route.snapshot.params['name'];
    this.route.params.subscribe((r:any) => {
      this.resourceName = r.name;
      this.service.getItems(this.resourceName).then((items)=>{
        console.log(items.json());
        this.items = items.json();
      });
    });

    this.service.getConfig((config)=>{
      if (config === undefined) return;
      console.log("Config", config);
      this.config = config.resources;
      this.config.forEach(v => {
        if(v.name !== this.resourceName) return;
        console.log(v);

        v.model.forEach(element => {
          console.log(element);
          let factory = this.componentFactoryResolver.resolveComponentFactory(this.variableComponentFactory(element.type));
          let c = this.container.createComponent(factory);  
          (<any>c.instance).init(element);
        });

      });
    });
  }

  variableComponentFactory(rt) : any{
    console.log("Variable Component factory", rt);
    if (rt === "cms.string"){
        return EditStringComponent;
    }else if(rt === "cms.int"){
        return EditIntegerComponent;
    }
    return undefined;

  }

  saveItem(){

  }
    
  
}
