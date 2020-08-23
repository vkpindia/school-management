import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school-management';
  loading = true;

  constructor(private router: Router) {
    // for router interception
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  /**
   * @description Method to show loading on application routing
   * @author Virendra Pandey
   * @date 2020-06-29
   * @param {RouterEvent} event
   * @memberof AppComponent
   */
  public navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
