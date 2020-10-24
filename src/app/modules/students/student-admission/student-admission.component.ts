import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.scss'],
  providers: [DatePipe]
})

export class StudentAdmissionComponent implements OnInit {

  // Component properties letiable declaration
  @Input() studentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // letiable declaration
  public admissionForm: FormGroup;
  public imageSrc: string;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Next';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public classList: any = [];
  public sectionList: any = [];
  public routeList: any = [];
  public casteList: any = [
    { label: 'General', value: 'General' },
    { label: 'OC', value: 'OC' },
    { label: 'BC-A', value: 'BC-A' },
    { label: 'BC-B', value: 'BC-B' },
    { label: 'BC-C', value: 'BC-C' },
    { label: 'BC-D', value: 'BC-D' },
    { label: 'BC-E', value: 'BC-E' },
    { label: 'SC', value: 'SC' },
    { label: 'ST', value: 'ST' }
  ];

  public bloodGroupList: any = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A+' },
    { label: 'B+', value: 'B-' },
    { label: 'B-', value: 'B-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
  ];


  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: StudentsService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.admissionForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      adminnumber: new FormControl(null, Validators.required),
      enrolnumber: new FormControl(null, Validators.required),
      dateofadmission: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required),
      rollnumber: new FormControl(null, Validators.required),
      section: new FormControl(null, Validators.required),
      cast: new FormControl(null, Validators.required),
      subcaste: new FormControl(null, Validators.required),
      religion: new FormControl(null, Validators.required),
      mothertoung: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      bloodgroup: new FormControl(null, Validators.required),
      mobilenumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      whatsappnumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),

      //Optional Fields
      adharnumber: new FormControl(null, Validators.pattern('[0-9]{12}')),
      biometricid: new FormControl(null),
      busroute: new FormControl(null),
      busnumber: new FormControl(null),
      hostelblock: new FormControl(null),
      hostelroom: new FormControl(null),
      previousclass: new FormControl(null),
      previousschoolname: new FormControl(null),
      previousschooladdress: new FormControl(null),
      profile: new FormControl('', Validators.required),
      image: new FormControl([], Validators.required),
    });

    // console.log('studentDetails', this.studentDetails);
    if (this.studentDetails && this.studentDetails[0].id) {
      this.cardTitle = 'Update Student Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.getClassSection();
    this.setDataToForm();
    this.getVillgaes();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentAdmissionComponent
   */
  get f() { return this.admissionForm.controls; }



  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getClassSection() {
    // this.showForm = false;
    this._ss.getClassSection().subscribe(data => {
      if (data) {
        this.classList = data;
      }
    });
  }

  public onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      let fileExt = event.target.files[0].type.split('/')[1];
      let file = (event.target as HTMLInputElement).files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        // console.log('this.urlBase64ToUint8Array(reader.result)', reader.result);
        /* console.log('this.imageSrc', this.imageSrc);
        console.log('this.imageSrc', this.imageSrc.replace(`data:image/${fileExt};base64,`, '')); */
        this.admissionForm.patchValue({
          image: this.imageSrc.replace(`data:image/${fileExt};base64,`, '') // this.urlBase64ToUint8Array(reader.result)
        });
        this.admissionForm.get('image').updateValueAndValidity();
      };

    }
  }

  public base64ToFile(base64String) {
    fetch(base64String)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'profile.png', { type: 'image/png' });
      });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-19
   * @param {*} event
   * @memberof ClassAddComponent
   */
  public onClassChange(event): void {
    // console.log('event', event);
    if (event) {
      this.getSetions(event.value)
    }
  }

  getSetions(classID) {
    console.log('classID', classID);
    this._ss.getSections(classID).subscribe(section => {
      if (section) {
        this.sectionList = section;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-19
   * @param {*} event
   * @memberof ClassAddComponent
   */
  public getVillgaes(): void {
    this._ss.getVillages().subscribe(routes => {
      console.log('routes', routes);
      if (routes) {
        this.routeList = routes;
      }
    });
  }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof StudentAdmissionComponent
   */
  public setDataToForm(): void {
    if (this.studentDetails) {
      this.studentDetails[0].profile = this.studentDetails[0].image;
      this.imageSrc = 'data:image/png;base64,' + this.studentDetails[0].image;
      delete this.studentDetails[0].image;
      delete this.studentDetails[0].profile;
      this.admissionForm.get('profile').clearValidators();
      this.admissionForm.get('profile').updateValueAndValidity();
      this.admissionForm.get('image').clearValidators();
      this.admissionForm.get('image').updateValueAndValidity();
      console.log('this.studentDetails[0]', this.studentDetails[0]);
      this.admissionForm.patchValue(this.studentDetails[0]);
      this.getSetions(this.studentDetails[0].section);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof StudentAdmissionComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    console.log('this.admissionForm.value', this.admissionForm.value);
    // console.log('this.admissionForm.invalid', this.admissionForm.invalid);
    if (this.admissionForm.value) {
      this.admissionForm.value.Class = parseInt(this.admissionForm.value.Class, 10);
      this.admissionForm.value.dob = this._date.transform(this.admissionForm.value.dob, 'MM/dd/yyyy');
      this.admissionForm.value.dateofadmission = this._date.transform(this.admissionForm.value.dateofadmission, 'MM/dd/yyyy');
    }

    if (this.studentDetails) {
      this.admissionForm.value.profile = this.imageSrc.substring(22);
      this.admissionForm.value.image = this.imageSrc.substring(22);
    }

    console.log('this.admissionForm.value', this.admissionForm.value);
    // console.log('this.admissionForm.value.dateofadmission', this.admissionForm.value.dateofadmission);
    // stop here if form is invalid
    if (this.admissionForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.admissionForm.value);
    delete payload['profile'];
    this.loading = true;
    if (this.studentDetails && this.studentDetails[0].id) {
      payload['id'] = this.studentDetails[0].id;
      this._ss.updateStudent(this.studentDetails[0].id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.admissionForm.reset();
        // this._router.navigate([this.returnUrl]);
        this.showForm = false;
        this.imageSrc = "";
        setTimeout(() => {
          this.showForm = true;
        }, 50);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {
      this._ss.postStudent(payload).subscribe(data => {
        let paramID = data['id'];
        this.showNotification('Submitted Successfully!!');
        this._router.navigate(['/parents/add'], { queryParams: { id: paramID } });
        this.admissionForm.reset();
        this.imageSrc = "";
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    }
  }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentAdmissionComponent
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
   * @memberof StudentAdmissionComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.admissionForm) {
      this.admissionForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof StudentAdmissionComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
