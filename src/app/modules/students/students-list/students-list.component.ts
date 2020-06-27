import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['rollnumber', 'enrolnumber', 'firstname', 'lastname', 'sex', 'section', 'dob', 'mobilenumber', 'actions'];
  public studentList: MatTableDataSource<any>;
  public filterData: string = '';
  public recordLength: number;

  constructor( private _ss: StudentsService, private _router: Router, private _activatedRout: ActivatedRoute ) { }

  ngOnInit(): void {
    // method call
    this.getStudentList();
    this.editStudentRecord();
  }

  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentsListComponent
   */
  public getStudentList() {
    this._ss.getAllStudents().subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.studentList = new MatTableDataSource(data);
        this.studentList.paginator = this.paginator;
        this.studentList.sort = this.sort;
      }
      // Assign the data to the data source for the table to render
      // this.studentList = new MatTableDataSource(data);
    });
  }

  /**
   * @description Method to search student record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof StudentsListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.studentList.filter = filterValue.trim().toLowerCase();
    // console.log('this.studentList', this.studentList);
    if (this.studentList.paginator) {
      this.studentList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof StudentsListComponent
   */
  public onEdit(row): void {
    console.log('row', row);
    this._router.navigate(['edit', row.id], {relativeTo: this._activatedRout});
  }

  editStudentRecord() {
    this._ss.getStudentDetails(1).subscribe(data => {
      console.log('Edited data', data);
    });
  }
}
