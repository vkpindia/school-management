import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavService } from '../../../_services/nav.service';

// export interface NavItem {
//   displayName: string;
//   disabled?: boolean;
//   iconName: string;
//   routePath?: string;
//   children?: NavItem[];
// }

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideNavComponent implements OnInit {
  @Input() item;
  @Input() depth: number;
  public expanded: boolean;
  public selectedMenu:string;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;


  constructor(public router: Router, private navService: NavService, private _ar: ActivatedRoute) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    if (this.item && this.item.children && this.item.children.length) {
      this.item.children.forEach(route => {
        if (this.router.url === '/' + route.routePath) {
          this.expanded = true;
        }
      });
    }
    /* console.log('his.router.isActive(this.item.routePath, true111)', this.router.isActive(this.item.routePath, true));
    if (this.item.children && this.item.children.length && this.router.isActive(this.item.routePath, true)) {
      console.log('this.expanded', this.expanded);
      this.expanded = true;
    } */
  }
  onItemSelected(item) {
    this.selectedMenu = item.displayName;
    console.log('expanded');
    if ((!item.children || !item.children.length) && item.routePath !=undefined) {
      this.router.navigate([item.routePath]);
      // this.navService.closeNav();
    }
    console.log(this.item.displayName+' '  +  ' '+ item.displayName)
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
