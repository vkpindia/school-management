import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

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
