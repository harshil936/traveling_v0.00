import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesPanService {

  searchedImages: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  setSearchedImagesObject(images){
    this.searchedImages.next(images);
  }

  getSearchedImagesObject(){
    return this.searchedImages;
  }

}
