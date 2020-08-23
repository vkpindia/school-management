import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { EventNotificationService } from 'src/app/_services/event-notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnChanges, OnInit {

  @Input() isFormSubmit: boolean;

  public isLoading: boolean = true;
  public notificationList: any = [];
  public randomColor = ['#40dfcd', '#fbd540', '#f939a1'];
  public dateLbelBg: string;
  public colorCount: number = 0;
  constructor(private _ens: EventNotificationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isFormSubmit) {
      this.getnotificationList();
    }
  }

  ngOnInit(): void {
    this.getnotificationList();
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @memberof NotificationListComponent
   */
  public getnotificationList() {
    this._ens.getAllList(false).subscribe(data => {
      if (data) {
        this.notificationList = data;
        this.notificationList.map(element => {
          element['dateLbelBg'] = this.randomColor[this.colorCount];
          this.colorCount++;
          if (this.colorCount > 2) {
            this.colorCount = 0;
          }
        });
      }
      this.isLoading = false;
    })
  }
}
