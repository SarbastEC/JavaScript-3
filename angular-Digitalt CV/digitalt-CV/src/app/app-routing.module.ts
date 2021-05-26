import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';
import { GithubComponent } from './views/social/github/github.component';
import { LinkedInComponent } from './views/social/linked-in/linked-in.component';
import { TwitterComponent } from './views/social/twitter/twitter.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"resume", component: ResumeComponent},
  {path:"contact", component: ContactComponent},
  {path:"linkedIn", component: LinkedInComponent},
  {path:"github", component: GithubComponent},
  {path:"twitter", component: TwitterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
