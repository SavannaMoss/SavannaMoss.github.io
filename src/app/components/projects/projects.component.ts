import { Component, OnInit } from '@angular/core';
import { Data }              from '../../../assets/data';
import { Project }           from "../../../models/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = Data.PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
