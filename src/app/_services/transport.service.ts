import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private _apiUrl: string = environment.apiBaseUrl;
  // private _apiUrl: string = 'http://mannapur.com/api/';
  // private _apiUrl: string = 'https://schoolsapi1.azurewebsites.net/api/';

  // setting headers for http call

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }),
    crossDomain: true
  };

  constructor(private _http: HttpClient) { }

  /**
   * @description Method to get errors if occured
   * @author Virendra Pandey
   * @date 2020-06-21
   * @private handleError
   * @param {HttpErrorResponse} error
   * @returns throwError
   * @memberof TransportService
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
   * @memberof TransportService
   */
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  /**
   * @description Method for getting all parents data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof TransportService
   */
  getTransportList() {
    return this._http.get(this._apiUrl + 'TransportController/GetTransport').pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting unique parent data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof TransportService
   */
  getTransportDetails(id: any): Observable<any> {
    const url = `${this._apiUrl}TransportController/GetTransportsingerecord?id=${id}`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for saving parent data in server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof TransportService
   */
  saveTransport(transportData: any): Observable<any> {
    // console.log('parentRecord', parentRecord);
    return this._http.post(this._apiUrl + 'TransportController/Addtransport', transportData)
     .pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
  }

  /**
   * @description Method to Update parent record
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof TransportService
   */
  updateTransport(transportData: any): Observable<any> {
    return this._http.put(this._apiUrl + 'TransportController/Updatetransport', transportData)
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
   * @memberof FeeService
   */
  deleteTransport(id: any): Observable<any> {
    const url = `${this._apiUrl}TransportController/DeleteTransport?id=${id}`;
    return this._http.delete(url).pipe(
      catchError(this.handleError));
  }
}
