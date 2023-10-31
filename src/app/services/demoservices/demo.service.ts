import { Injectable } from '@angular/core';
import { demdata } from 'src/app/list/demo/data';
import { project } from 'src/app/list/demo/project';
import { datatype } from 'src/app/list/demodata/demoData';
import { demoProjects } from 'src/app/list/demodata/demoProjects';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  getBlogData(): datatype[] {
    return demdata;
  }

  getProjectsData(): demoProjects[] {
    return project;
  }
}
