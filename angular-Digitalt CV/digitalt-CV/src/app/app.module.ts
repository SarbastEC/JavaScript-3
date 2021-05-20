import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { LinkedInComponent } from './views/social/linked-in/linked-in.component';
import { GithubComponent } from './views/social/github/github.component';
import { TwitterComponent } from './views/social/twitter/twitter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './components/resume-parts/personal-details/personal-details.component';
import { WorkExperiencesComponent } from './components/resume-parts/work-experiences/work-experiences.component';
import { EducationComponent } from './components/resume-parts/education/education.component';
import { SkillsComponent } from './components/resume-parts/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    LinkedInComponent,
    GithubComponent,
    TwitterComponent,
    PersonalDetailsComponent,
    WorkExperiencesComponent,
    EducationComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
