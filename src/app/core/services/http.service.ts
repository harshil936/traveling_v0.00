import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpInterceptorService} from 'ng-http-interceptor';
import {Router} from '@angular/router';
// import {StorageSessionService} from '../../storage/services/storage.session.service';
import {HttpClient, HttpResponseBase, HttpHeaders, HttpParams} from '@angular/common/http';

type RequestOptions = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: 'json';
  withCredentials?: boolean;
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HttpService {

  defaultOptionsArgs: RequestOptions;

  constructor(
    protected http: HttpClient,
    httpInterceptor: HttpInterceptorService,
    protected router: Router) {
  }

  post<T>(servicePath: string, model: any, options?: RequestOptions) {
    options = options ? options : this.defaultOptionsArgs;
    return this.http.post<T>(servicePath, model, options);
  }

  get(servicePath: string, data?: any, options?: any) {
    options = options ? options : this.defaultOptionsArgs;
    return this.http.get(servicePath, options);
  }

  handleError(error: HttpResponseBase) {
    console.log(error);
    return of(error);
  }

}
