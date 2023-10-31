import { Component } from '@angular/core';
import { DemoService } from './services/demoservices/demo.service';
import { datatype } from './list/demodata/demoData';
import { demoProjects } from './list/demodata/demoProjects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-website-pages';
  name = 'HELLLO THIS IS PAVAN';
  blogdata: datatype[] = [];
  projectdata: demoProjects[] = [];

  constructor(private services: DemoService) {
    this.blogdata = services.getBlogData();
    this.projectdata = services.getProjectsData();
  }
}
