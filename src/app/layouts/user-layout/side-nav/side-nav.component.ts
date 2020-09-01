import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  public expanded: boolean;
  public selectedMenu: string = "";
  public navMenu: any;;
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
          this.item['isActive'] = true;
        }
      });
    }
    /* console.log('his.router.isActive(this.item.routePath, true111)', this.router.isActive(this.item.routePath, true));
    if (this.item.children && this.item.children.length && this.router.isActive(this.item.routePath, true)) {
      console.log('this.expanded', this.expanded);
      this.expanded = true;
    } */
  }

  onItemSelected(item, element: HTMLElement) {
    item['isActive'] = true;
    console.log('expanded');
    if ((!item.children || !item.children.length) && item.routePath != undefined) {
      this.router.navigate([item.routePath]);
      // this.navService.closeNav();
    }
    console.log(this.item.displayName + ' ' + ' ' + item.displayName)
    if (this.selectedMenu === item.routePath) {
      console.log('element', element);
      this.expanded = !this.expanded;
    }
    // this.selectedMenu = item.routePath;

    // if (this.navMenu && (this.navMenu['displayName'] === item['displayName'])) {
    //   item['isActive'] = false;
    // }

    this.onSelect.emit(item);
    this.navMenu = item;
  }

}
