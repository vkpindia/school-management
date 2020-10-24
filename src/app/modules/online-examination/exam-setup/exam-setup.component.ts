import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../../../_services/assessment.service';
import { DatePipe } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-exam-setup',
  templateUrl: './exam-setup.component.html',
  styleUrls: ['./exam-setup.component.scss']
})

export class ExamSetupComponent implements OnInit {

  // VAriable declaration
  public createExamForm: FormGroup;
  public questionForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Create Assessment';
  public showButtons: boolean = false;
  public isTabDisabled: boolean = true;
  public buttonLabel: string = 'Submit';
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public selectedIndex: number = 0;
  public controlIndex: any;
  public chipsAlert: string;
  public classList: any = [];
  public sectionList: any = [];
  public showForm: boolean = true;
  public examID: number;
  public examDetails: any;
  public questionsRecord: any;

  // images variable declaration
  public qImageSrc: string;
  public qansImageSrc1: string;
  public qansImageSrc2: string;
  public qansImageSrc3: string;
  public qansImageSrc4: string;

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  //Chips variable declaration
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _cs: AssessmentService
  ) { }

  ngOnInit(): void {
    this.createExamForm = new FormGroup({
      classid: new FormControl(null, Validators.required),
      sectionid: new FormControl('', Validators.required),
      examname: new FormControl(null, Validators.required),
      examdate: new FormControl('', Validators.required),
      subjectame: new FormControl(null, Validators.required),
      teachername: new FormControl(null, Validators.required),
      timeallotted: new FormControl(null, Validators.required),
      totalquestions: new FormControl(null, Validators.required),
      totalmarks: new FormControl(null, Validators.required),
      teachersnotes: new FormControl(null)
    });

    this.questionForm = new FormGroup({
      items: new FormArray([this.createFields()])
    });

    // method call
    this.getClassList();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ExamSetupComponent
   */
  get f() { return this.questionForm.controls; }
  get ef() { return this.createExamForm.controls; }

  /**
   * @description Creating Dynamic Fields
   * @author Virendra Pandey
   * @date 2020-08-21
   * @returns {FormGroup}
   * @memberof ExamSetupComponent
   */
  public createFields(): FormGroup {

    return new FormGroup({
      question: new FormControl(null, Validators.required),
      question_image: new FormControl(null),
      answer1: new FormControl(null, Validators.required),
      answer1_image: new FormControl(null),
      answer2: new FormControl(null, Validators.required),
      answer2_image: new FormControl(null),
      answer3: new FormControl(null, Validators.required),
      answer3_image: new FormControl(null),
      answer4: new FormControl(null, Validators.required),
      answer4_image: new FormControl(null),
      rightanswer: new FormControl(null, Validators.required),
      marksforthis: new FormControl(null, Validators.required)
    });

  }

  /**
   * @description Form group
   * @author Virendra Pandey
   * @date 2020-08-21
   * @returns {FormGroup}
   * @memberof ExamSetupComponent
   */
  public onFileChange(event, imageType, index) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      let fileExt = event.target.files[0].type.split('/')[1];
      const file = (event.target as HTMLInputElement).files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (imageType === 'questionImage') {
          this.qImageSrc = reader.result as string;
          (this.questionForm.get('items') as FormArray).at(index).get('question_image')
            .patchValue(this.qImageSrc.replace(`data:image/${fileExt};base64,`, ''));

        } else if (imageType === 'answerImage1') {
          this.qansImageSrc1 = reader.result as string;
          (this.questionForm.get('items') as FormArray).at(index).get('answer1_image')
            .patchValue(this.qansImageSrc1.replace(`data:image/${fileExt};base64,`, ''));

        } else if (imageType === 'answerImage2') {
          this.qansImageSrc2 = reader.result as string;
          (this.questionForm.get('items') as FormArray).at(index).get('answer2_image')
            .patchValue(this.qansImageSrc2.replace(`data:image/${fileExt};base64,`, ''));

        } else if (imageType === 'answerImage3') {
          this.qansImageSrc3 = reader.result as string;
          (this.questionForm.get('items') as FormArray).at(index).get('answer3_image')
            .patchValue(this.qansImageSrc3.replace(`data:image/${fileExt};base64,`, ''));

        } else if (imageType === 'answerImage4') {
          this.qansImageSrc4 = reader.result as string;
          (this.questionForm.get('items') as FormArray).at(index).get('answer4_image')
            .patchValue(this.qansImageSrc4.replace(`data:image/${fileExt};base64,`, ''));

        }
      };

    }
  }

  /**
   * @description Method to add fields in form
   * @author Virendra Pandey
   * @date 2020-08-21
   * @memberof ExamSetupComponent
   */
  public addNextSubjectMark(): void {
    (this.f['items'] as FormArray).push(this.createFields());
    this.controlIndex++;
    /* if (this.studentid) {
      (this.questionForm.get('items') as FormArray).at(this.controlIndex).get('studentid').patchValue(this.studentid);
    } */
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof ExamSetupComponent
   */
  public getClassList() {
    // this.showForm = false;
    this._cs.getClassSection().subscribe(data => {
      if (data) {
        this.classList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-19
   * @param {*} event
   * @memberof ExamSetupComponent
   */
  public onClassChange(event): void {
    if (event) {
      this._cs.getSections(event.value).subscribe(section => {
        if (section) {
          this.sectionList = section;
        }
      });
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof ExamSetupComponent
   */
  public onSubmit(formType: string) {
    console.log('onSubmit');
    this.submitted = true;
    console.log('this.createExamForm.value', this.createExamForm.value);
    console.log('this.parentForm.value', this.questionForm.value);

    if (this.createExamForm.invalid && this.selectedIndex === 0) {
      return;
    }
    if (this.questionForm.invalid && this.selectedIndex === 1) {
      return;
    }

    let payload = {};

    this.loading = true;
    if (formType === 'setup') {
      Object.assign(payload, this.createExamForm.value);
      /* if (this.createExamForm.value.section && this.createExamForm.value.section.length) {
        this.createExamForm.value.section.forEach((section, inx) => {
          payload['section' + (inx + 1)] = section;
        });
      } */

      // Set class name
      if (this.classList && this.classList.length) {
        this.classList.map(classRecord => {
          if (payload['classid'] === classRecord.id) {
            payload['classname'] = classRecord.classname;
          }
        });
      }

      // Set section name
      if (this.sectionList && this.sectionList.length) {
        this.sectionList.map(sectionRecord => {
          if (payload['sectionid'] === sectionRecord.id) {
            payload['sectionname'] = sectionRecord.sectionname;
          }
        });
      }
      if (this.examDetails && this.examDetails['id']) {
        payload['id'] = this.examDetails['id'];
        this._cs.updateExamSetup(payload).subscribe(data => {
          this.isTabDisabled = false;
          this.showNotification('Updated Successfully!!');
          this.createExamForm.reset();
          this.showForm = false;
          this.submitted = false;
          setTimeout(() => {
            this.showForm = true;
          }, 100);
        },
          error => {
            this.error = error;
            this.loading = false;
            console.error(this.error);
          });
      } else {
        this._cs.addExamSetup(payload).subscribe(data => {
          localStorage.setItem('examID', data['id']);
          this.isTabDisabled = false;
          this.showNotification('Submitted Successfully!!');
          this.createExamForm.reset();
          this.showForm = false;
          this.submitted = false;
          setTimeout(() => {
            this.showForm = true;
          }, 100);
          // this.getClassList();
          this.selectedIndex = 1;
        },
          error => {
            this.error = error;
            this.loading = false;
            console.error(this.error);
          });
      }
    }

    if (formType === 'questions') {
      Object.assign(payload, this.questionForm.value);
      payload['items'].map(data => {
        if (this.questionsRecord && this.questionsRecord.id) {
          data['id'] = this.questionsRecord.id;
        }
        data['examid'] = this.questionsRecord ? this.questionsRecord.examid : localStorage.getItem('examID');
        return data;
      });
      // console.log('payload', payload);
      // payload['examid'] = examid;
      if (this.questionsRecord && this.questionsRecord.id) {
        this._cs.updateExamQuestions(payload['items']).subscribe(data => {
          this.showNotification('Updated Successfully!!');
          this.questionForm.reset();
          // this.f.subjects.setValue([]);
          this.showForm = false;
          this.submitted = false;
          setTimeout(() => {
            this.showForm = true;
          }, 100);
        },
          error => {
            this.error = error;
            this.loading = false;
            console.error(this.error);
          });
      } else {
        this._cs.addExamQustions(payload['items']).subscribe(data => {
          this.showNotification('Submitted Successfully!!');
          this.questionForm.reset();
          // this.f.subjects.setValue([]);
          this.showForm = false;
          this.submitted = false;
          setTimeout(() => {
            this.showForm = true;
          }, 100);
        },
          error => {
            this.error = error;
            this.loading = false;
            console.error(this.error);
          });
      }

    }
  }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof ExamSetupComponent
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
   * @description
   * @author Virendra Pandey
   * @date 2020-10-25
   * @param {*} event
   * @memberof ExamSetupComponent
   */
  public onExamEdit(event): void {
    if (event) {
      this.examDetails = event;
      this.createExamForm.patchValue(event);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-25
   * @param {*} event
   * @memberof ExamSetupComponent
   */
  public onQuestionEdit(event): void {
    if (event) {
      this.selectedIndex = 1;
      this.questionsRecord = event;
      let questionsList = [];
      questionsList.push(event);
      console.log('questionsList', questionsList);
      this.questionForm.patchValue({ items: questionsList });
    }
  }

  /**
   * @description Method to reset form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof ExamSetupComponent
   */
  public onFormReset(event: Event, formType: string): void {
    if (event && formType === 'setup') {
      this.createExamForm.reset();
    }
    if (event && formType === 'questions') {
      this.questionForm.reset();
    }
  }
}
