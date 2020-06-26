import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from './_models';
import { AuthGuard } from './_guards';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { OnboardLayoutComponent } from './layouts/onboard-layout/onboard-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: OnboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/onboard/onboard.module').then(m => m.OnboardModule)
      },
    ]
  },
  {
    path: '',
    component: UserLayoutComponent,
    /* data: {
      breadcrumb: 'Home'
    }, */
    // canActivate: [AuthGuard],
    children: [
      {
        canActivate: [AuthGuard],
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: 'Dashboard',
        }
      },
      {
        path: 'students',
        loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
