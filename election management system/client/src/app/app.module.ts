import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';

import { VoteService } from './vote.service';
import { AppComponent } from './app.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { adminPageComponent } from './admin-page/admin-page.component';
import { adminComponent } from './admin-page/admin';
import { homePageComponent } from './home-page/home-page.component';
import { signUpComponent } from './signUp/signUp';
import { Task } from '../task';
import { voterData } from './admin-page/voterData';
import { contactPage } from './contactPage/contactPage';

const appRoutes = [
{path: 'home-page/home-page', component: homePageComponent},
{path: 'vote-page/vote-page', component: VotePageComponent},
{path: 'contactPage/contactPage', component: contactPage},
{path: 'admin-page/admin-page', component: adminPageComponent},
{path: 'admin-page/voterData', component: voterData},
{path: 'signUp/signUp', component: signUpComponent},
{path: 'admin', component: adminComponent},
{path: '**', component: homePageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    VotePageComponent,
    contactPage,
    adminPageComponent,
    homePageComponent,
    adminComponent, signUpComponent, voterData
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule, Ng2PaginationModule
  ],
  providers: [VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
