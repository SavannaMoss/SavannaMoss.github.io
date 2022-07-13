import { Component, OnInit } from '@angular/core';
import { Data }              from "../../../assets/data";
import { Experience }        from "../../../models/Experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = Data.EXPERIENCES;

  constructor() {
  }

  ngOnInit(): void {
  }

}
