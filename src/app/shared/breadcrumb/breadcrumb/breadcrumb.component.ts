import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TBreadcrumb } from '../../../_models/breadcrumb.model';
import { BreadcrumbService } from '../../../_services/breadcrumb.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  private ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  private ROUTE_PARAM_BREADCRUMB = 'breadcrumb';
  private PREFIX_BREADCRUMB = 'prefixBreadcrumb';

  // The breadcrumbs of the current route
  private currentBreadcrumbs: TBreadcrumb[];
  // All the breadcrumbs
  public breadcrumbs: TBreadcrumb[];

  @Input()
  public allowBootstrap: boolean;

  @Input()
  public addClass: string;


  public constructor(private breadcrumbService: BreadcrumbService, private activatedRoute: ActivatedRoute, private router: Router) {
    breadcrumbService.get().subscribe((breadcrumbs: TBreadcrumb[]) => {
      this.breadcrumbs = breadcrumbs as TBreadcrumb[];
    });
  }


  public ngOnInit() {
    if (this.router.navigated) {
      this.generateBreadcrumbTrail();
    }

    // subscribe to the NavigationEnd event
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd
      )).subscribe(event => {
        this.generateBreadcrumbTrail();
      });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-02-15
   * @param {TBreadcrumb} breadcrumb
   * @returns {boolean}
   * @memberof BreadcrumbComponent
   */
  public hasParams(breadcrumb: TBreadcrumb) {
    return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-02-15
   * @private
   * @memberof BreadcrumbComponent
   */
  private generateBreadcrumbTrail() {
    // reset currentBreadcrumbs
    this.currentBreadcrumbs = [];

    // get the root of the current route
    let currentRoute: ActivatedRoute = this.activatedRoute.root;

    // set the url to an empty string
    let url = '';

    // iterate from activated route to children
    while (currentRoute.children.length > 0) {
      const childrenRoutes: ActivatedRoute[] = currentRoute.children;
      let breadCrumbLabel = '';

      // iterate over each children
      childrenRoutes.forEach(route => {
        // Set currentRoute to this route
        currentRoute = route;
        // Verify this is the primary route
        if (route.outlet !== PRIMARY_OUTLET) {
          return;
        }
        const hasData = (route.routeConfig && route.routeConfig.data);
        const hasDynamicBreadcrumb: boolean = route.snapshot.params.hasOwnProperty(this.ROUTE_PARAM_BREADCRUMB);

        if (hasData || hasDynamicBreadcrumb) {
          /*
          Verify the custom data property 'breadcrumb'
          is specified on the route or in its parameters.
          Route parameters take precedence over route data
          attributes.
          */
          if (hasDynamicBreadcrumb) {
            breadCrumbLabel = route.snapshot.params[this.ROUTE_PARAM_BREADCRUMB].replace(/_/g, ' ');
          } else if (route.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
            breadCrumbLabel = route.snapshot.data[this.ROUTE_DATA_BREADCRUMB];
          }
          // Get the route's URL segment
          const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
          url += `/${routeURL}`;
          // Cannot have parameters on a root route
          if (routeURL.length === 0) {
            route.snapshot.params = {};
          }
          // Add breadcrumb
          const breadcrumb: TBreadcrumb = {
            label: breadCrumbLabel,
            params: route.snapshot.params,
            url
          };
          // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
          if (route.snapshot.data.hasOwnProperty(this.PREFIX_BREADCRUMB)) {
            this.breadcrumbService.storePrefixed(breadcrumb);
          } else {
            this.currentBreadcrumbs.push(breadcrumb);
          }
        }
      });
      this.breadcrumbService.store(this.currentBreadcrumbs);
    }
  }

}
