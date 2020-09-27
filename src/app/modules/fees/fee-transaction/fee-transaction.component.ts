import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeesService } from 'src/app/_services/fees.service';

@Component({
  selector: 'app-fee-transaction',
  templateUrl: './fee-transaction.component.html',
  styleUrls: ['./fee-transaction.component.scss']
})

export class FeeTransactionComponent implements OnInit {
  @Input() displayedColumns: any;
  @Input() transactionList: any;
  public studentID: any;
  public showTransaction: boolean = false;

  constructor(private _ss: FeesService, private _route: ActivatedRoute) {
    this._route.queryParamMap.subscribe(params => {
      this.studentID = params['params'].studentsID;
    });
  }

  ngOnInit(): void {

    this.displayedColumns = ['feetype', 'paidamount', 'paiddate', 'discription'];
    this._ss.getAllTransaction(this.studentID).subscribe(data=>{
      if(data){
        this.transactionList = data;
        this.showTransaction = true;
      }
    })
  }

}
