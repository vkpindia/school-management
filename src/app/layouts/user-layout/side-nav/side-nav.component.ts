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
  public expanded: boolean = true;
  public navMenu: any;;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;


  constructor(public router: Router, private navService: NavService, private _ar: ActivatedRoute) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    if (this.item && this.item.children && this.item.children.length) {
      this.item.children.map(route => {
        if (this.router.url === '/' + route.routePath) {
          this.item['isActive'] = true;
        }
      });
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-09-01
   * @param {*} item
   * @param {HTMLElement} element
   * @memberof SideNavComponent
   */
  onItemSelected(item, element: HTMLElement) {
    if ((!item.children || !item.children.length) && item.routePath != undefined) {
      this.router.navigate([item.routePath]);
    }
    this.onSelect.emit(item);
  }

}
