import {Component, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import {} from 'googlemaps';
import {GoogleMapsService} from '../../core/services/google-maps.service';

@Component({
  selector: 'app-gmaps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})

export class GoogleMapsComponent implements  AfterViewInit {

  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  placeCordinates: any;

  constructor(
    private googelMapsService: GoogleMapsService,
  ){
    this.placeCordinates = [35.2271, -80.8431];
    this.updateLoadedMap()
  }

  ngAfterViewInit(): void {
    let places = [[35.2271, -80.8431], [-80.8431, 35.2271]]
    this.loadMap([35.2271, -80.8431]);
  }

  updateLoadedMap() {
    this.googelMapsService.getNewCordinates().subscribe(
      (response) => {
        const cords = response.split(", ");
        const lat = parseFloat(cords[0].split("(")[1]);
        const long = parseFloat(cords[1]);
        this.loadMap([lat,long]);
      });
  }

  loadMap(lattlong) {
    const markerPosition = {lat: lattlong[0], lng: lattlong[1] };
    let mapProperties = {
      center: new google.maps.LatLng(markerPosition),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    if(this.mapElement) {
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      this.updateMapMarker(markerPosition);
    }
  }

  updateMapMarker(coordinates){
    let marker = new google.maps.Marker({position: coordinates, map: this.map});
  }
}
