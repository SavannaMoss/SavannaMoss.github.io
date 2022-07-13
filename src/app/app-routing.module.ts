import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from "./components/home/home.component";
import { ProjectsComponent }    from "./components/projects/projects.component";
import { EducationComponent }   from "./components/education/education.component";
import { ExperienceComponent }  from "./components/experience/experience.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
