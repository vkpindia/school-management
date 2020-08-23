import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

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
   * @memberof SalaryService
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
   * @memberof SalaryService
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
 * @memberof SalaryService
 */
  getSalryType() {
    return this._http.get(this._apiUrl + `setup/getsalarytypes`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
 * @description Method for getting all Classs data from server
 * @author Virendra Pandey
 * @date 2020-06-21
 * @returns
 * @memberof SalaryService
 */
  getSalaryDetails(id: number) {
    return this._http.get(this._apiUrl + `accounts/getsalarydetails?id=${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SalaryService
   */
  getAllTransaction(id: number) {
    return this._http.get(this._apiUrl + `accounts/getsalarytransaction?teacherid=${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SalaryService
   */
  getAllSalaryDetails(id: number) {
    return this._http.get(this._apiUrl + `accounts/getallsalarydetails?id=${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SalaryService
   */
  saveSalary(payload) {
    return this._http.post(this._apiUrl + 'accounts/addsalary', payload)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof SalaryService
   */
  searchTeacher() {
    return this._http.get(this._apiUrl + 'teacher/GetTeacherSearch')
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

    /**
   * @description Method to Update Class record
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof SalaryService
   */
  updateSalary(id, classRecord: any): Observable<any> {
    return this._http.put(this._apiUrl + 'accounts/updatesalary', classRecord)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * @description Method for deleting unique data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof SalaryService
   */
  deleteSalary(id: any): Observable<any> {
    const url = `${this._apiUrl}accounts/deletesalary?id=${id}`;
    return this._http.delete(url).pipe(
      catchError(this.handleError));
  }
}
