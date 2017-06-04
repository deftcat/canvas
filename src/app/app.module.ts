import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CirclesComponent } from './circles/circles.component';
import { GravityComponent } from './gravity/gravity.component';

import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [{
  path: '',
  redirectTo: '/gravity',
  pathMatch: 'full'
},{
  path: 'circles',
  component: CirclesComponent
}, {
  path: 'gravity',
  component: GravityComponent
}, ];
@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent,
    GravityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
