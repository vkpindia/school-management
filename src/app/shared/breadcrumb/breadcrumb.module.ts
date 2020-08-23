import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const routes: Routes = []

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
