import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
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
  getTransportTypes() {

    return this._http.get(this._apiUrl + `setup/getvillages`, this.httpOptions).pipe(
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
  getExpanseTypes() {
    return this._http.get(this._apiUrl + `setup/getexpensetypes`, this.httpOptions).pipe(
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
  getRoutes() {
    return this._http.get(this._apiUrl + `TransportController/GetRoutes`, this.httpOptions).pipe(
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
  getFeeType() {

    return this._http.get(this._apiUrl + `setup/getfeetypes`, this.httpOptions).pipe(
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
  getSalaryType() {

    return this._http.get(this._apiUrl + `setup/getsalarytypes`, this.httpOptions).pipe(
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
  getExpanses() {

    return this._http.get(this._apiUrl + `setup/getexpenses`, this.httpOptions).pipe(
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
  saveSetup(classRecord: any): Observable<any> {
    // console.log('ClassRecord', classRecord);
    return this._http.post(this._apiUrl + 'setup/addgenerictype', classRecord, this.httpOptions)
     .pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
  }

  /**
   * @description Method for saving Class data in server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof SetupService
   */
  saveTransport(formData: any): Observable<any> {
    // console.log('ClassRecord', classRecord);
    return this._http.post(this._apiUrl + 'setup/addtransporttype', formData, this.httpOptions)
     .pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
  }

  /**
   * @description Method for deleting unique data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof SetupService
   */
  deleteEvent(id: number, type:string): Observable<any> {
    if(type == 'transport'){
      return this._http.delete(`${this._apiUrl}setup/deletevillages?id=${id}`, this.httpOptions).pipe(
        catchError(this.handleError));
    } else if(type == 'salary'){
      return this._http.delete(`${this._apiUrl}setup/deletesalarytypes?id=${id}`, this.httpOptions).pipe(
        catchError(this.handleError));
    } else if(type == 'fee'){
      return this._http.delete(`${this._apiUrl}setup/deletefeetypes?id=${id}`, this.httpOptions).pipe(
        catchError(this.handleError));
    } else if(type == 'expanse'){
      return this._http.delete(`${this._apiUrl}setup/deleteexpensetypes?id=${id}`, this.httpOptions).pipe(
        catchError(this.handleError));
    }
  }
}
