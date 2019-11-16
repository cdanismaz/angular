import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  nameChanged = new EventEmitter<string>();

  constructor() { }


}
