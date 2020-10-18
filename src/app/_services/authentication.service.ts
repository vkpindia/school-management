import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private firstTimeUserLogin: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  public firstTimeUser: Observable<User>;

  public _apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private _router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.firstTimeUserLogin = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.firstTimeUser = this.firstTimeUserLogin.asObservable();
  }

  /**
   * @description
   * @readonly
   * @type {User}
   * @memberof AuthenticationService
   */
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-02-16
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   * @memberof AuthenticationService
   */
  public login(formData: any): Observable<any> {
    return this.http.post<any>(this._apiUrl + 'login/UserLogin', formData)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // console.log('user', user);
        if (user && user.message && !user.firsttime) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          sessionStorage.setItem('dbName', user.dbName);
          this.currentUserSubject.next(user);
        } else if (user && user.message && user.firsttime) {
          this.firstTimeUserLogin.next(user);
        }
        return user;
      }));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-02-16
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   * @memberof AuthenticationService
   */
  public resetPassword(formData: any): Observable<any> {
    return this.http.put<any>(this._apiUrl + 'adminController/UpdatePassword', formData)
      .pipe(map(user => user));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-02-16
   * @memberof AuthenticationService
   */
  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this._router.navigate(['login']);
  }
}
