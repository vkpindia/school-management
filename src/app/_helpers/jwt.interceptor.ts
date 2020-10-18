import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
// import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser['message']) {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type' : 'application/json',
          Authorization: `${currentUser['message']}`,
          UserName: currentUser.username
        },
        /*url: request.url,
         withCredentials: true
        setHeaders: {
          'Content-Type' : 'application/json'
        } */
      });
    }

    return next.handle(request);
  }
}
