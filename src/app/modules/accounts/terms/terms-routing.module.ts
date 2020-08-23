import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermListComponent } from './term-list/term-list.component';


const routes: Routes = [
  {
    path: '',
    component: TermListComponent,
    data: {
      breadcrumb: 'List',
    },
  },
  {
    path: 'add',
    component: TermListComponent,
    data: {
      breadcrumb: 'Add',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
