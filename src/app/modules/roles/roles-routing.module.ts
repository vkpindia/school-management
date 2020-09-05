import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [{
  path: '',
  component: UserListComponent,
  data: {
    breadcrumb: 'List'
  }
},
{
  path: 'add',
  component: CreateUserComponent,
  data: {
    breadcrumb: 'Add'
  }
},
{
  path: 'edit/:id',
  component: EditUserComponent,
  data: {
    breadcrumb: 'Edit'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
