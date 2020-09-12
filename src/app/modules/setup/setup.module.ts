import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { TransportComponent } from './transport/transport.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent
  },
{
    path: 'transport',
    component: TransportComponent
  }
]


@NgModule({
  declarations: [SetupComponent, TransportComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class SetupModule { }
