import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted: boolean = false;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  onMoviesClicked() {
    this.router.navigate(['/movies']);
  }

  onLoginClicked() {
    this.authService.login();
  }

  onLogoutClicked() {
    if(this.authService.loggedIn){
      this.authService.logout();
    }
  }

  onUserFormSubmit(form: NgForm) {
    console.log(form)
  }
}
