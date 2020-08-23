import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultListComponent } from './exam-result/result-list.component';
import { AddResultComponent } from './add-result/add-result.component';


const routes: Routes = [
  {
    path: '',
    component: ResultListComponent
  },
  {
    path: 'add',
    component: AddResultComponent,
    data: {
      braedcrumb: "Add"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
