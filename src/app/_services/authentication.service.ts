import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private _router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
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
  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
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
