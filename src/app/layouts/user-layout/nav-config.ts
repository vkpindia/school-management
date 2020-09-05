export let navConfig = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    // isActive: true,
    children: [
      {
        displayName: 'Admin',
        icon: 'fa fa-angle-right',
        routePath: 'dashboard'
      },
      {
        displayName: 'Students',
        icon: 'fa fa-angle-right',
        routePath: 'dashboard/students'
      },
      {
        displayName: 'Parents',
        icon: 'fa fa-angle-right',
        routePath: 'dashboard/parents'
      },
      {
        displayName: 'Teachers',
        icon: 'fa fa-angle-right',
        routePath: 'dashboard/teachers'
      }
    ]
  },
  {
    displayName: 'Students',
    // iconName: 'person',
    icon: 'flaticon-classmates',
    children: [
      {
        displayName: 'All Students',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'students'
      },
      {
        displayName: 'Student Details',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'students/details'
      },
      {
        displayName: 'Admission Form',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'students/admission'
      }
    ]
  },
  {
    displayName: 'Parents',
    // iconName: 'person',
    icon: 'flaticon-couple',
    children: [
      {
        displayName: 'All Parents',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'parents'
      },
      {
        displayName: 'Parent Details',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'parents/detail'
      },
      {
        displayName: 'Add Parent',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'parents/add'
      }
    ]
  },
  {
    displayName: 'Teachers',
    // iconName: 'person',
    icon: 'flaticon-classmates',
    children: [
      {
        displayName: 'All Teachers',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'teachers'
      },
      {
        displayName: 'Teacher Details',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'teachers/detail'
      },
      {
        displayName: 'Add Teacher',
        iconName: '',
        icon: 'fa fa-angle-right',
        routePath: 'teachers/add'
      }
    ]
  },
  /*  {
     displayName: 'Class',
     // iconName: 'person',
     icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
     children: [
       {
         displayName: 'All Classes',
         iconName: '',
         icon: 'fa fa-angle-right',
         routePath: 'class'
       },
       {
         displayName: 'Add New Class',
         iconName: '',
         icon: 'fa fa-angle-right',
         routePath: 'class/add'
       }
     ]
   }, */
  {
    displayName: 'Setup',
    iconName: 'build',
    children: [
      {
        displayName: 'All Setup',
        icon: 'fa fa-angle-right',
        // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
        routePath: 'setup'
      },
      {
        displayName: 'Terms',
        icon: 'fa fa-angle-right',
        routePath: 'accounts/terms'
      },
      {
        displayName: 'Fee',
        icon: 'fa fa-angle-right',
        // icon: 'explicit',
        routePath: 'accounts/fee'
      },
      {
        displayName: 'Class',
        iconName: 'build',
        children: [
          {
            displayName: 'All Classes',
            icon: 'fa fa-angle-right',
            routePath: 'class'
            // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
          },
          {
            displayName: 'Add Class',
            icon: 'fa fa-angle-right',
            routePath: 'class/add'
            // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
          }
        ]
      }
    ]
  },
  {
    displayName: 'Accounts',
    iconName: 'account_balance_wallet',
    children: [
      {
        displayName: 'Expense',
        icon: 'fa fa-angle-right',
        routePath: 'accounts/expense'
      },
      {
        displayName: 'Salary',
        icon: 'fa fa-angle-right',
        routePath: 'accounts/salary'
      },
      {
        displayName: 'Fees',
        icon: 'fa fa-angle-right',
        routePath: 'fees'
      }
      /* {
        displayName: 'Add New Expense',
        // iconName: 'build',
        icon: 'fa fa-angle-right',
        routePath: 'accounts/expense/add'
      } */
    ]
  },
  {
    displayName: 'Attendance',
    iconName: 'spellcheck',
    // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    children: [
      {
        displayName: 'Take Attendance',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'attendance'
      },
      {
        displayName: 'Attendance List',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'attendance/list'
      }
    ]
  },

  {
    displayName: 'Schedule Exam',
    // iconName: 'event',
    icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    routePath: 'schedule-exam'
  },
  {
    displayName: 'Transport',
    iconName: 'spellcheck',
    // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    children: [
      {
        displayName: 'All Transportation',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'transport'
      },
      {
        displayName: 'Add Transport',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'transport/add'
      }
    ]
  },
  {
    displayName: 'Role',
    // iconName: 'event',
    icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    children: [
      {
        displayName: 'All Roles',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'users'
      },
      {
        displayName: 'Add Role',
        // iconName: 'event',
        icon: 'fa fa-angle-right',
        routePath: 'users/add'
      }
    ]
  },
  {
    displayName: 'Roles',
    // iconName: 'event',
    icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    routePath: 'exam-result'
  },
  {
    displayName: 'Events',
    iconName: 'event',
    // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    routePath: 'events'
  },
  {
    displayName: 'Notification',
    iconName: 'notifications',
    // icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    routePath: 'notification'
  }
];