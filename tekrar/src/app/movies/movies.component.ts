import { Component, OnInit } from '@angular/core';
import {Movie} from "./model/movie.model";
import {MovieServiceService} from "./services/movie-service.service";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = [];

  constructor(private movieService: MovieServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.movies = data['movies'];
      }
    )
    this.movieService.nameChanged.subscribe(this.onNameChanged);
  }

  onNameChanged(event) {
    console.log(event.target.value);
  }

  onReloadButtonClicked() {
    this.router.navigate(['/movies']);
  }
}
