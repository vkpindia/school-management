import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportListComponent } from './transport-list/transport-list.component';
import { CreateTransportComponent } from './create-transport/create-transport.component';
import { EditTransportComponent } from './edit-transport/edit-transport.component';


const routes: Routes = [
  {
    path: "",
    component: TransportListComponent
  },
  {
    path: "add",
    component: CreateTransportComponent
  },
  {
    path: "edit/:id",
    component: EditTransportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
