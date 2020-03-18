import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {ToServerUrlService} from './toServer.url.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class DataCallService {

  serverUrl: string;
  url: any;
  options: Object;

  constructor(private http: HttpClient,
              private toServerUrlService: ToServerUrlService) {

    this.serverUrl = this.toServerUrlService.serviceURL;
  }

  handleError(error: HttpResponseBase) {
    console.log(error);
    return of(error);
  }

  public getImageData(imageID){
    this.url = this.serverUrl + 'image/' + imageID;
    this.options = {
      responseType: 'text'
    };
    this.http.get<any>(this.url, this.options)
      .pipe(map(res => res), catchError(error => this.handleError(error)))
      .subscribe(
      data => {
        console.log(data);
      });
  }

  public getImagesRecommendations(imageNumber){
    this.url = this.serverUrl + 'get_images_recommendations/' + imageNumber;
    this.options = {
      responseType: 'application/json'
    };
    return (this.http.get<any>(this.url, this.options)
      .pipe(map(res => JSON.parse(res)), catchError(error => this.handleError(error))));
  }

  public getCordinates(imageID){
    this.url = this.serverUrl + 'get_image_cordinates/' + imageID;
    this.options = {
      responseType: 'text'
    };
    return (this.http.get<any>(this.url, this.options)
      .pipe(map(res => res), catchError(error => this.handleError(error))));
  }

  public getSearchedImages(searchedTerm){
    this.url = this.serverUrl + 'get_searched_images/' + searchedTerm;
    this.options = {
      responseType: 'text'
    };
    console.log(searchedTerm);
    return (this.http.get<any>(this.url, this.options)
      .pipe(map(res => JSON.parse(res)), catchError(error => this.handleError(error))));
  }
}
