import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  cordinatesChange: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  setNewCordinates(cordinates){
    this.cordinatesChange.next(cordinates);
  }

  getNewCordinates(){
    return this.cordinatesChange;
  }
}
