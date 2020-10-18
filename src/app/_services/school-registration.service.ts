import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolRegistrationService {

  private _apiUrl: string = environment.apiBaseUrl;

  // setting headers for http call

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  constructor(private _http: HttpClient) { }

  /**
   * @description Method to get errors if occured
   * @author Virendra Pandey
   * @date 2020-06-21
   * @private handleError
   * @param {HttpErrorResponse} error
   * @returns throwError
   * @memberof SetupService
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The firebase returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Back-end returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * @description Method for extracting response data
   * @author Virendra Pandey
   * @date 2020-06-21
   * @private
   * @param {Response} res
   * @returns response body
   * @memberof SetupService
   */
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }


  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SetupService
   */
  getRegistrationFirstInfo() {

    return this._http.get(this._apiUrl + `SchoolMaster/GetFirstLevelInfo`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SetupService
   */
  getRegistrationSecondInfo() {

    return this._http.get(this._apiUrl + `SchoolMaster/GetSecondLevelInfo`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SetupService
   */
  updateRegistartionInfo(id, isAccepted, isFirstLevel) {
    return this._http.get(this._apiUrl + `SchoolMaster/updateinfo?id=${id}&isAccepted=${isAccepted}&isFirstLevel=${isFirstLevel}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for saving Class data in server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof SetupService
   */
  register(formData: any): Observable<any> {
    // console.log('ClassRecord', classRecord);
    return this._http.post(this._apiUrl + 'SchoolMaster/Add', formData)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
}
