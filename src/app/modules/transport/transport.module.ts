import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportListComponent } from './transport-list/transport-list.component';
import { EditTransportComponent } from './edit-transport/edit-transport.component';
import { CreateTransportComponent } from './create-transport/create-transport.component';


@NgModule({
  declarations: [TransportListComponent, EditTransportComponent, CreateTransportComponent],
  imports: [
    CommonModule,
    TransportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class TransportModule { }
