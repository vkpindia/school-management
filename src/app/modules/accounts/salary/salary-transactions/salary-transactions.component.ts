import { Component, OnInit, Input } from '@angular/core';
import { SalaryService } from '../../../../_services/salary.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salary-transactions',
  templateUrl: './salary-transactions.component.html',
  styleUrls: ['./salary-transactions.component.scss']
})

export class SalaryTransactionsComponent implements OnInit {

  @Input() displayedColumns: any;
  @Input() transactionList: any;
  public teacherID: any;
  public showTransaction: boolean = false;

  constructor(private _ss: SalaryService, private _route: ActivatedRoute) {
    this._route.queryParamMap.subscribe(params => {
      this.teacherID = params['params'].techerID;
    });
  }

  ngOnInit(): void {
    // this.displayedColumns = [{key: 'salarytype', title: "Salary Type"}, {key: 'paidamount', title: 'Paid Amount'}, {key: 'paiddate', title: 'Paid Date'}, {key: 'discription', title: 'Description'}];
    this.displayedColumns = ['salarytype', 'paidamount', 'paiddate', 'discription'];
    this._ss.getAllTransaction(this.teacherID).subscribe(data=>{
      if(data){
        this.transactionList = data;
        this.showTransaction = true;
        console.log('this.transactionList', this.transactionList);
      }
    })
  }

}
