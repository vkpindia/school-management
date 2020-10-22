import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

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
   * @memberof FeesService
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
   * @memberof FeesService
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
 * @memberof FeesService
 */
  getTerms() {
    return this._http.get(this._apiUrl + 'accounts/getterms').pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
 * @description Method for getting all Classs data from server
 * @author Virendra Pandey
 * @date 2020-06-21
 * @returns
 * @memberof FeesService
 */
  getFeeType() {
    return this._http.get(this._apiUrl + `setup/getfeetypes`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
 * @description Method for getting all Classs data from server
 * @author Virendra Pandey
 * @date 2020-06-21
 * @returns
 * @memberof FeesService
 */
  getStudentRecord(classid, sectionid) {
    return this._http.get(this._apiUrl + `student/GetStudentSearch?classid=${classid}&sectionid=${sectionid}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
* @description Method for getting unique Class data by key
* @author Virendra Pandey
* @date 2020-06-21
* @returns {Observable<any>}
* @memberof FeeService
*/
  getClassSection(): Observable<any> {
    const url = `${this._apiUrl}setup/getclassesandsections`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting section list
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof FeeService
   */
  getSections(id: any): Observable<any> {
    const url = `${this._apiUrl}setup/getsectionsforclass?id=${id}`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
 * @description Method for getting all Classs data from server
 * @author Virendra Pandey
 * @date 2020-06-21
 * @returns
 * @memberof FeesService
 */
  getFeeFirstTime(id: number) {
    return this._http.get(this._apiUrl + `accounts/getstudentfeefirsttime?id=${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof FeesService
   */
  getStudentFee(id: number) {
    return this._http.get(this._apiUrl + `accounts/getstudentfee?id=${id}`).pipe(
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
    return this._http.get(this._apiUrl + `accounts/gettransaction?studentid=${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting all Classs data from server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns
   * @memberof FeesService
   */
  saveFees(payload) {
    return this._http.post(this._apiUrl + 'accounts/addstudentfee', payload)
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
   * @memberof FeesService
   */
  updateFees(payload) {
    return this._http.put(this._apiUrl + 'accounts/updatestudentfee', payload)
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
   * @memberof FeesService
   */
  deleteFees(feesID) {
    return this._http.delete(this._apiUrl + `accounts/deletestudentfee?id=${feesID}`)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
}
