import {Component, OnInit} from '@angular/core';
import {} from 'googlemaps';
import {DataCallService} from './core/services/data-call.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(
    private dataCallService: DataCallService,
    public router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     let redirectPageURL = event.urlAfterRedirects;
    //     if (event.urlAfterRedirects.search('order/') !== -1) {
    //       const match = event.urlAfterRedirects.match(/\/order\/([a-zA-Z0-9]*)(?:.*)/);
    //       if (match[1]) {
    //         redirectPageURL = event.urlAfterRedirects.replace(match[1], '');
    //       }
    //     } else if (event.urlAfterRedirects.search('report') !== -1) {
    //       redirectPageURL = '/report';
    //     }
    //   }
    // });
  }
}
