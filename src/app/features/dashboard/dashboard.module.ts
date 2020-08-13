import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { MicrositesCommonComponentsModule } from '@caliber/microsites-common-components';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { SummaryContainerComponent } from './containers/summary-container/summary-container.component';
import { SummaryAllSkillsComponent } from './components/summary-all-skills/summary-all-skills.component';
import { DetailsGridComponent } from './components/details-grid/details-grid.component';
import { DashboardService } from './services/dashboard.service';
import { SharedModule } from '../shared/shared.module';
import { EmployeeInfoGridComponent } from './components/employee-info-grid/employee-info-grid.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeContainerComponent } from './containers/employee-container/employee-container.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    DetailContainerComponent,
    SummaryContainerComponent,
    SummaryAllSkillsComponent,
    DetailsGridComponent,
    EmployeeInfoGridComponent,
    EmployeeDetailsComponent,
    EmployeeContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    MicrositesCommonComponentsModule,
    SharedModule,
    NgbModule,
  ],
  exports: [],
  providers: [DashboardService, EmployeeService],
})
export class DashboardModule {}
