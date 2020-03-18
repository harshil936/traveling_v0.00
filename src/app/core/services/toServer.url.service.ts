import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ToServerUrlService {
  private _domainName: string;

  constructor() {
    this.domainName = window.location.hostname;
    this.domainName = 'http://travelwith.club/';
  }

  get domainName(): string {
    return this._domainName;
  }

  set domainName(value: string) {
    this._domainName = value;
  }

  get serviceURL() {
    return 'http://54.67.60.135:3000/';
    // return 'https://api.npms.io/v2/';
  }

  get hostURL() {
    return 'http://travelwith.club/';
  }
}

