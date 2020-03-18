import {Component, OnInit, AfterViewInit, OnChanges, Input} from '@angular/core';
import {DataCallService} from '../../core/services/data-call.service';
import {ToServerUrlService} from '../../core/services/toServer.url.service';
import {GoogleMapsService} from '../../core/services/google-maps.service';
import {ImagesPanService} from '../../core/services/images-pan.service';

@Component({
  selector: 'app-images-pan',
  templateUrl: './images-pan.component.html',
  styleUrls: ['./images-pan.component.css']
})
export class ImagesPanComponent implements OnInit {

  serverUrl: string;
  ready: boolean = false;
  imageFiles: any = [];
  defaultImages: any = [];

  constructor(
    private dataServices: DataCallService,
    private toServerUrlService: ToServerUrlService,
    private googelMapsService: GoogleMapsService,
    private imagesPanServices: ImagesPanService,
  ) {
    this.serverUrl = this.toServerUrlService.serviceURL;
  }

  ngOnInit() {
    this.getImages();
    this.imagesPanServices.getSearchedImagesObject()
      .subscribe(
        response => {
          if (response['imagesList']){
            this.imageFiles = [];
            response['imagesList'].forEach((item)=>{
              item.imageURL = this.serverUrl + 'publiccc' + item.imageURL;
              this.imageFiles.push(item);
            });
          }
          if(!this.imageFiles.length && this.defaultImages.length){
            this.imageFiles = this.defaultImages;
            alert("There is no image with that name. Here are some Recomendations for you. ");
          }
        }
    );
  }

  getImages(){
    this.dataServices.getImagesRecommendations(2).subscribe(
      response => {
        response.data.imagesList.forEach((item)=>{
          item.imageURL = this.serverUrl + 'publiccc' + item.imageURL;
          this.imageFiles.push(item);
          this.defaultImages.push(item);
        });
        this.ready = true;
      },(error) => {
        console.log(error);
      });
  }

  updateMap(imageID){
    console.log(imageID);
    this.dataServices.getCordinates(imageID).subscribe(
      response => {
        this.changeCordinates(response);
      }, error => {
        console.log(error);
      });
  }

  changeCordinates(cordinates){
    this.googelMapsService.setNewCordinates(cordinates);
  }
}
