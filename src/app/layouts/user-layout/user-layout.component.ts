import { Component, OnInit, ElementRef, VERSION, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NavService } from '../../_services/nav.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: any = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      routePath: 'dashboard'
    },
    {
      displayName: 'Students',
      // iconName: 'person',
      icon: 'flaticon-classmates',
      children: [
        {
          displayName: 'All Students',
          iconName: 'star_rate',
          routePath: 'students'
        },
        {
          displayName: 'Student Details',
          iconName: 'star_rate',
          routePath: 'students/details'
        },
        {
          displayName: 'Admission Form',
          iconName: 'star_rate',
          routePath: 'students/admission'
        }
      ]
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver
    , private navService: NavService
    , private _authService: AuthenticationService) { }

  ngOnInit() { }
  ngAfterViewInit() {
    // this.navService.appDrawer = this.appDrawer;
  }

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
}
