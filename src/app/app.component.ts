import { Component } from '@angular/core';
import {Entry } from 'contentful';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  courses: Entry<any>[]= []; 
  constructor(private contentfulService:ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getCourses()
    .then( courses=>this.courses = courses);
  }
}
