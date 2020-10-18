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
    data: {
      breadcrumb: 'Home',
    },
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
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'school-registration',
        loadChildren: () => import('./modules/school-registration/school-registration.module').then(m => m.SchoolRegistrationModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'School Registration',
        }
      },
      {
        path: 'students',
        loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Students',
        }
      },
      {
        path: 'parents',
        loadChildren: () => import('./modules/parents/parents.module').then(m => m.ParentsModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Parents',
        }
      },
      {
        path: 'staff',
        loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Staff',
        }
      },
      {
        path: 'class',
        loadChildren: () => import('./modules/class/class.module').then(m => m.ClassModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Class',
        }
      },
      {
        path: 'setup',
        loadChildren: () => import('./modules/setup/setup.module').then(m => m.SetupModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Setup',
        }
      },
      {
        path: 'events',
        loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Events',
        }
      },
      {
        path: 'notification',
        loadChildren: () => import('./modules/notification/notification.module').then(m => m.NotificationModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Notification',
        }
      },
      {
        path: 'accounts',
        canActivate: [AuthGuard],
        /* data: {
          breadcrumb: 'Accounts',
        }, */
        children: [
          {
            path: 'expense',
            loadChildren: () => import('./modules/accounts/expense/expense.module').then(m => m.ExpenseModule),
            data: {
              breadcrumb: 'Expense',
            }
          },
          {
            path: 'terms',
            loadChildren: () => import('./modules/accounts/terms/terms.module').then(m => m.TermsModule),
            data: {
              breadcrumb: 'Terms',
            }
          },
          {
            path: 'fee',
            loadChildren: () => import('./modules/accounts/fee/fee.module').then(m => m.FeeModule),
            data: {
              breadcrumb: 'Fee',
            }
          },
          {
            path: 'salary',
            loadChildren: () => import('./modules/accounts/salary/salary.module').then(m => m.SalaryModule),
            data: {
              breadcrumb: 'Salary',
            }
          }
        ]
      },
      {
        path: 'fees',
        loadChildren: () => import('./modules/fees/fees.module').then(m => m.FeesModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Fees',
        }
      },
      {
        path: 'attendance',
        loadChildren: () => import('./modules/attendance/attendance.module').then(m => m.AttendanceModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Attendance',
        }
      },
      {
        path: 'schedule-exam',
        loadChildren: () => import('./modules/exam-scheduling/exam-scheduling.module').then(m => m.ExamSchedulingModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Exam scheduling',
        }
      },
      {
        path: 'exam-result',
        loadChildren: () => import('./modules/result/result.module').then(m => m.ResultModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Exam result',
        }
      },
      {
        path: 'transport',
        loadChildren: () => import('./modules/transport/transport.module').then(m => m.TransportModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Transport',
        }
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Users',
        }
      },
      {
        path: 'assessment',
        loadChildren: () => import('./modules/online-examination/online-examination.module').then(m => m.OnlineExaminationModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Assessment',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
