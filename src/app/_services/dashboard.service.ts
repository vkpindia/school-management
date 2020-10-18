import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private _apiUrl: string = environment.apiBaseUrl;

  constructor(private _http: HttpClient) { }

  /**
   * @description Method to get errors if occured
   * @author Virendra Pandey
   * @date 2020-06-21
   * @private handleError
   * @param {HttpErrorResponse} error
   * @returns throwError
   * @memberof ClassService
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
   * @memberof ClassService
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
   * @memberof ClassService
   */
  getAdminDashboard() {
    console.log('_apiUrl', this._apiUrl);
    return this._http.get(this._apiUrl + `dashboard/getadmindashboard`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof ClassService
   */
  getStudentDashboard(studentid) {
    console.log('_apiUrl', this._apiUrl);
    return this._http.get(this._apiUrl + `dashboard/getstudentdashboard?studentid=${studentid}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof ClassService
   */
  getParentDashboard(parentid) {
    console.log('_apiUrl', this._apiUrl);
    return this._http.get(this._apiUrl + `dashboard/getparentdashboard?parentid=${parentid}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof ClassService
   */
  getTeacherDashboard(teacherid) {
    console.log('_apiUrl', this._apiUrl);
    return this._http.get(this._apiUrl + `dashboard/getteacherdashboard?teacherid=${teacherid}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


}
