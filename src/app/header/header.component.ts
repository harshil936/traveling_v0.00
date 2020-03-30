import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataCallService} from '../core/services/data-call.service';
import {HttpClient} from '@angular/common/http';
import {ToServerUrlService} from '../core/services/toServer.url.service';
import {catchError, map} from 'rxjs/operators';
import {HttpService} from '../core/services/http.service';
import {ImagesPanService} from '../core/services/images-pan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm = '';
  constructor(
    private dataServices: DataCallService,
    private imagesPanServices: ImagesPanService,
    private router: Router,
  ) {}

  ngOnInit() {}

  keywordSearch(){
    this.dataServices.getSearchedImages(this.searchTerm).subscribe(
      response => {
        this.imagesPanServices.setSearchedImagesObject(response.data);
      }
    );
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }

}
