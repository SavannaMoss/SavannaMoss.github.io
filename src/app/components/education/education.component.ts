import { Component, OnInit } from '@angular/core';
import { Data }              from '../../../assets/data';
import { College }           from "../../../models/College";
import { Course }            from "../../../models/Course";
import { Organization }      from "../../../models/Organization";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {
  college: College = Data.COLLEGE;
  courses: Course[] = Data.COURSES;
  organizations: Organization[] = Data.ORGANIZATIONS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
