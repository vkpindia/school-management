import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ApprovalLevelFirstComponent } from './approval-level-first/approval-level-first.component';
import { ApprovalLevelSecondComponent } from './approval-level-second/approval-level-second.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'approval-first',
    component:  ApprovalLevelFirstComponent
  },
  {
    path: 'approval-second',
    component: ApprovalLevelSecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRegistrationRoutingModule { }
