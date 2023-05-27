import { Component } from '@angular/core';
import { Data }      from "../assets/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = Data.NAME;
  github: string = Data.GITHUB;
  linkedin: string = Data.LINKEDIN;
}
