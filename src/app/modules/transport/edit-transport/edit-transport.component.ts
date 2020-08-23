import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransportService } from '../../../_services/transport.service';

@Component({
  selector: 'app-edit-transport',
  templateUrl: './edit-transport.component.html',
  styleUrls: ['./edit-transport.component.scss']
})
export class EditTransportComponent implements OnInit {

  public transportDetails: any;
  public paramID: number;
  public showForm: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ss: TransportService) {
    this._activatedRout.paramMap.subscribe(params => {
      console.log('params', params);
      this.paramID = params['params'].id;
    });
  }

  ngOnInit(): void {
    this.getTransportDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-06-26
   * @memberof EditTransportComponent
   */
  public getTransportDetails(): void {
    this._ss.getTransportDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('record', record);
        this.transportDetails = record;
        this.showForm = true;
      }
      this.isLoading = false;
    });
  }

  /**
   * @description Method to navigate on list page after successfull form submission
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof EditTransportComponent
   */
  public onFormSubmit(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

  /**
   * @description Method to navigate on list page on cancel
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof EditTransportComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

}
