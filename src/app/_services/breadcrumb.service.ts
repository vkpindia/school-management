import { Injectable } from '@angular/core';
import { TBreadcrumb } from '../_models/breadcrumb.model';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbs: TBreadcrumb[];
  private prefixedBreadcrumbs: TBreadcrumb[] = [];
  public breadcrumbsSource: Subject<TBreadcrumb[]>;
  public breadcrumbsChanged$: Observable<TBreadcrumb[]>;

  constructor() {
    this.breadcrumbs = [];
    this.breadcrumbsSource = new Subject<TBreadcrumb[]>();
    this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();

    if (localStorage.getItem('prefixedBreadcrumbs') != null) {
      this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')))
    }
  }

  /**
   * @description Store the breadcrumbs of the current route
   * @author Virendra Pandey
   * @date 2020-02-15
   * @param {TBreadcrumb[]} breadcrumbs
   * @memberof BreadcrumbService
   */
  public store(breadcrumbs: TBreadcrumb[]) {
    this.breadcrumbs = breadcrumbs;
    const allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
    this.breadcrumbsSource.next(allBreadcrumbs);

  }

  /**
   * @description Add a prefixed breadcrumb
   * @author Virendra Pandey
   * @date 2020-02-15
   * @param {TBreadcrumb} breadcrumb
   * @memberof BreadcrumbService
   */
  public storePrefixed(breadcrumb: TBreadcrumb) {
    this.storeIfUnique(breadcrumb);
    localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
    const allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
    this.breadcrumbsSource.next(allBreadcrumbs);

  }

  /**
   * @description Return the breadcrumbs
   * @author Virendra Pandey
   * @date 2020-02-15
   * @returns
   * @memberof BreadcrumbService
   */
  public get() {
    return this.breadcrumbsChanged$;
  }

  /**
   * @description storeIfUnique checks if there are any duplicate prefixed breadcrumbs
   * @author Virendra Pandey
   * @date 2020-02-15
   * @private
   * @param {TBreadcrumb} newBreadcrumb
   * @memberof BreadcrumbService
   */
  private storeIfUnique(newBreadcrumb: TBreadcrumb) {
    let isUnique = true;
    for (const crumb of this.prefixedBreadcrumbs) {
      if (newBreadcrumb.url === crumb.url) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      this.prefixedBreadcrumbs.push(newBreadcrumb);
    }

  }

}
