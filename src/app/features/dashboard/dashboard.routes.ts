import { Routes } from '@angular/router';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { SummaryContainerComponent } from './containers/summary-container/summary-container.component';
import { EmployeeContainerComponent } from './containers/employee-container/employee-container.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full',
  },
  {
    path: 'detail',
    component: DetailContainerComponent,
  },
  {
    path: 'detail/:skillId',
    component: DetailContainerComponent,
  },
  {
    path: 'summary',
    component: SummaryContainerComponent,
  },
  {
    path: 'employee/:employeeId',
    component: EmployeeContainerComponent,
  },
];
