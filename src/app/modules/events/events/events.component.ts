import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public isFormSubmit:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @param {*} event
   * @memberof NotificationComponent
   */
  public onFormSubmit(event): void{
    if(event){
      this.isFormSubmit = event;
    }
  }

}
