import { Component } from '@angular/core';
import {} from 'googlemaps';
import {DataCallService} from './core/services/data-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  constructor(
    // private dataCallService : DataCallService
  ) {}

}
