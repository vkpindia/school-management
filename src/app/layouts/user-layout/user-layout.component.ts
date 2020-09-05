import { Component, OnInit, ElementRef, VERSION, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NavService } from '../../_services/nav.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { navConfig } from './nav-config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})

export class UserLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  public userData: string;
  navItems: any = navConfig;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver
    , private navService: NavService
    , private _authService: AuthenticationService
    , private _ar: ActivatedRoute) {


  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngAfterViewInit() {
    // this.navService.appDrawer = this.appDrawer;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-09-01
   * @memberof UserLayoutComponent
   */
  public menuToggle(): void {
    document.body.classList.toggle("open-menu");
  }

  /**
   * @description Method to logout user
   * @author Virendra Pandey
   * @date 2020-06-18
   * @memberof UserLayoutComponent
   */
  public signOut(): void {
    this._authService.logout();
  }

  /**
   * @description Collapsible
   * @author Virendra Pandey
   * @date 2020-09-01
   * @param {*} event
   * @memberof UserLayoutComponent
   */
  onMenuSelect(event) {
    this.navItems.map(nav => {
      if (event.displayName === nav.displayName) {
        nav['isActive'] = !nav['isActive'];
      } else {
        nav['isActive'] = false;
      }
    });
  }
}
