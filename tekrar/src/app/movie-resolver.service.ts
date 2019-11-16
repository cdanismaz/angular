import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Movie} from "./movies/model/movie.model";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
  }
)
export class MovieResolverService implements Resolve<Movie[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> | Promise<Movie[]> | Movie[] {
    return [
      new Movie("Mist", "korku", 3),
      new Movie("Batman", "action",8)
    ];
  }

}
