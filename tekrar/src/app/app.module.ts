import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movies/movie/movie.component';
import {HomeComponent} from './home/home.component';
import {SayfaBulunamadiComponent} from './sayfa-bulunamadi/sayfa-bulunamadi.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HomeComponent,
    SayfaBulunamadiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
