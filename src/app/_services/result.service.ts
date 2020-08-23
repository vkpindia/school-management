import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private _apiUrl: string = environment.apiBaseUrl;
  // private _apiUrl: string = 'http://mannapur.com/api/';
  // private _apiUrl: string = 'https://schoolsapi1.azurewebsites.net/api/';

  // setting headers for http call


  private dataSource = new Subject<any>();
  // data = this.dataSource.asObservable();

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
   * @memberof ResultService
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
   * @memberof ResultService
   */
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  setExamRecord(data){
    this.dataSource.next(data);
  }

  getExamRecord(): Observable<any> {
    return this.dataSource.asObservable();
}

    /**
 * @description Method for getting all Classs data from server
 * @author Virendra Pandey
 * @date 2020-06-21
 * @returns
 * @memberof ResultService
 */
getStudentRecord(classid, sectionid) {
  return this._http.get(this._apiUrl + `/student/GetStudentSearch?classid=${classid}&sectionid=${sectionid}`).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

  /**
   * @description Method for getting unique Class data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns {Observable<any>}
   * @memberof ResultService
   */
  getExamResultByClassSection(studentid, examid, classid, sectionid): Observable<any> {
    const url = `${this._apiUrl}results/getresultsbyclasssection?studentid=${studentid}&examid=${examid}&classid=${classid}&sectionid=${sectionid}`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting unique Class data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns {Observable<any>}
   * @memberof ResultService
   */
  getExamResult(classid, sectionid): Observable<any> {
    const url = `${this._apiUrl}setup/getexamsbyclasssection?classid=${classid}&sectionid=${sectionid}`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /**
   * @description Method for getting unique Class data by key
   * @author Virendra Pandey
   * @date 2020-06-21
   * @returns {Observable<any>}
   * @memberof ResultService
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
   * @memberof ResultService
   */
  getSections(id: any): Observable<any> {
    const url = `${this._apiUrl}setup/getsectionsforclass?id=${id}`;
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
   * @memberof ResultService
   */
  saveResult(payload: any): Observable<any> {
    // console.log('parentRecord', parentRecord);
    return this._http.post(this._apiUrl + 'results/addstudentresults', payload)
     .pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
  }

  /**
   * @description Method for saving parent data in server
   * @author Virendra Pandey
   * @date 2020-06-21
   * @param {*} users
   * @returns {Observable<any>}
   * @memberof ResultService
   */
  saveTotalResult(payload: any): Observable<any> {
    // console.log('parentRecord', parentRecord);
    return this._http.post(this._apiUrl + 'results/addstudentatendencetotals', payload)
     .pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
  }
}
