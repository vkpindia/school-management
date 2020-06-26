import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item;
  @Input() depth: number;

  constructor(public router: Router, private navService: NavService) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    console.log('item', this.item);
    if (this.item.children && this.item.children.length && this.router.isActive(this.item.routePath, true)) {
      this.expanded = true;
      console.log('this.expanded', this.expanded);
    }
  }
  onItemSelected(item) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.routePath]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
