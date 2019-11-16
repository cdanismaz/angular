import {NgModule} from "@angular/core";
import {MovieComponent} from "./movies/movie/movie.component";
import {SayfaBulunamadiComponent} from "./sayfa-bulunamadi/sayfa-bulunamadi.component";
import {MoviesComponent} from "./movies/movies.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth-guard.service";
import {MovieResolverService} from "./movie-resolver.service";

const appRoutes : Routes = [
  {path : "", component: HomeComponent},
  {path : "movies",
    canActivate: [AuthGuard],
    resolve: {movies: MovieResolverService},
    //canActivateChild: [AuthGuard],
    component: MoviesComponent},
  {path : "movies/:name/edit", component: MovieComponent},
  // {path : "movies/:name/edit", component: MoviesComponent}
  {path : "not-found", component: SayfaBulunamadiComponent},
  {path : "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
