import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContributeToComponent } from './contribute-to/contribute-to.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { HeaderComponent } from './header/header.component';
import { GPhotosComponent } from './gphotos/gphotos.component';
import { GVideosComponent } from './gvideos/gvideos.component';
import { CDonationComponent } from './cdonation/cdonation.component';
import { CertificateComponent } from './certificate/certificate.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'certi',component:CertificateComponent},
  {path:'about',component:AboutComponent},
  {path:'contributeto',component:ContributeToComponent},
  {path:'contributions',component:ContributionsComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},

  {path:'header',component:HeaderComponent},
  {path:'gphotos',component:GPhotosComponent},
  {path:'gvideos',component:GVideosComponent},
  {path:'cdonation',component:CDonationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
