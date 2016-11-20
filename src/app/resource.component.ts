import { Component } from '@angular/core';
import { AppState } from './app.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'resource',  // <home></home>
  styleUrls: [ './resource.style.css' ],
  templateUrl: './resource.template.html'
})
export class ResourceComponent {
  resourceName;
  items = [];
  constructor(private service: AppState, private route: ActivatedRoute) {

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
  }
}
