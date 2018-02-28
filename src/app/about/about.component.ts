import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  public cols: number = 2;
  
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService, private observableMedia: ObservableMedia) {
    //This grabs the query string parameters
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    
  }

  sendMeHome() {
    //This corresponds to the path in the app-routing.module.ts file
    this.router.navigate(['']);
  }
}
