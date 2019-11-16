import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Movie} from "../model/movie.model";
import {MovieServiceService} from "../services/movie-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  @ViewChild("nameInput", {static:true}) name : ElementRef;

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        let movieName = params['name'];
        //this.movie = this.movieService.getMovie(movieName);
      }
    );
    this.route.queryParams.subscribe(
      (params: Params)=> {
        console.log(params['allowEdit']);
      }
    );
    this.route.fragment.subscribe(
      (f: string)=> {
        console.log(f);
      }
    );
  }

  onInputChanged(value) {
    //console.log(this.name.nativeElement.value);
    this.movieService.nameChanged.emit(value);
  }

  movieLoad(id: number) {
    this.router.navigate(['/movies', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }
}
