import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { EventNotificationService } from '../../../_services/event-notification.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListComponent implements OnChanges, OnInit {

  @Input() isFormSubmit: boolean;
  public isLoading: boolean = true;
  public randomColor = ['#40dfcd', '#fbd540', '#f939a1'];
  public dateLbelBg: string;
  public colorCount: number = 0;
  public eventList: any = [];
  constructor(private _ens: EventNotificationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isFormSubmit) {
      this.getEventList();
    }
  }

  ngOnInit(): void {
    this.getEventList();
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @memberof EventsListComponent
   */
  public getEventList() {
    this._ens.getAllList(true).subscribe(data => {
      if (data) {
        this.eventList = data;
        this.eventList.map(element => {
          element['dateLbelBg'] = this.randomColor[this.colorCount];
          this.colorCount++;
          if (this.colorCount > 2) {
            this.colorCount = 0;
          }
        });
      }
      this.isLoading = false;
      // console.log('this.eventList', this.eventList);
    })
  }

  public onDelete(row){
   let isDeleyte:boolean = confirm("Are sure you want to delete this Event?");
   if(isDeleyte){
    this._ens.deleteEvent(row.id, true).subscribe(data=>{
      this.getEventList();
    })
   }
  }
}
