import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupService } from '../../../_services/setup.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})

export class TransportComponent implements OnInit {

  // VAriable declaration
  public transportForm: FormGroup;
  public loading: boolean = false;
  public showForm: boolean = true;
  public submitted: boolean = false;
  public error: string = '';
  public cardTitle: string = 'Add New Class';
  public transportList: any = [];
  public routeList: any = [];

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _cs: SetupService
  ) { }

  ngOnInit(): void {
    this.transportForm = new FormGroup({
      routeid: new FormControl(null, Validators.required),
      villagename: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.required),
    });

    //Getting all the setup list by calling below methods
    this.getTransportType();
    this.getRoutes();
  }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getTransportType() {
    this._cs.getTransportTypes().subscribe(data => {
      if (data) {
        this.transportList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getRoutes() {
    this._cs.getRoutes().subscribe(data => {
      if (data) {
        this.routeList = data;
      }
    });
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ClassAddComponent
   */
  get f() { return this.transportForm.controls; }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof ClassAddComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;

    if (this.transportForm.invalid) {
      return;
    }

    let payload = {};

    this.loading = true;
    Object.assign(payload, this.transportForm.value);
    if (this.routeList && this.routeList.length) {
      this.routeList.map(data => {
        if (data.routeid === payload['routeid']) {
          payload['routename'] = data.routename;
        }
      });
    }
    delete payload['section'];
    this._cs.saveTransport(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.getTransportType();
      this.transportForm.reset();
      this.showForm = false;
      setTimeout(() => {
        this.showForm = true;
      }, 50);
    },
      error => {
        this.error = error;
        this.loading = false;
        console.error(this.error);
      });
  }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof ClassAddComponent
   */
  public showNotification(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  /**
   * @description Method to reset form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof ClassAddComponent
   */
  public onFormReset(event): void {
    if (event) {
      this.transportForm.reset();
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @param {*} typeID
   * @param {*} type
   * @memberof SetupComponent
   */
  deleteTransportType(typeID, type): void {
    const isDelete = confirm('Are you sure u want to delete transport?')
    if (isDelete) {
      this._cs.deleteEvent(typeID.id, type).subscribe(data => {
        this.getTransportType();
      });
    }
  }
}
