import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { InfosComponent } from './infos/infos.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
      { path: '', component: InfosComponent }, //si l'utilisateur va sur l'url "localhost:4200" alors on invoque le component a1
      { path: 'skills', component: SkillsComponent }, //si l'utilisateur va sur l'url "localhost:4200/page-b" alors on invoque le component b1
      { path: 'projects', component: ProjectsComponent },
      { path: 'exp', component: ExperienceComponent },
      { path: 'music', component: MusicComponent },
      { path: 'contact', component: ContactComponent }
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }) //le enableTracing permet d'avoir des infos liées aux routes sur le debugger de son navigateur (partie console), très pratique !
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
