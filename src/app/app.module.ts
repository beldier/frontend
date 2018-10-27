import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { appRoutes} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NabvarComponent } from './nabvar/nabvar.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    Link1Component,
    Link2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
