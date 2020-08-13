import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { SummaryAllSkills } from '../../models/summary-all-skills.model';
import { BaseComponent } from 'src/app/features/shared/components/base.component';
import { EmployeeInfo } from '../../models/employee-info.model';
import {
  MicrositeNavigationLink,
  H2OLegacyNavType,
  PCDashboardSections,
  H2OLegacyURL,
} from 'src/app/features/shared/services/microsite-navigation-links';
import { MicrositeNavigationService } from 'src/app/features/shared/services/microsite-navigation.service';

@Component({
  selector: 'h2o-digital-manager-dashboard-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss'],
})
export class SummaryContainerComponent extends BaseComponent
  implements OnInit, OnDestroy {
  summaryTable: SummaryAllSkills;
  employees: EmployeeInfo[];
  postClosingDashboardLink = '';
  nav: MicrositeNavigationLink = {
    navType: H2OLegacyNavType.PCDashboard,
    section: PCDashboardSections.PCDashboard,
    url: H2OLegacyURL.DashboardURL,
    isLoanIdRequired: false,
  };

  constructor(
    private dashboardService: DashboardService,
    private cd: ChangeDetectorRef,
    private micrositeNavigationService: MicrositeNavigationService
  ) {
    super();
  }

  ngOnInit() {
    this.postClosingDashboardLink = this.micrositeNavigationService.generateH2OLegacyWithNoActivityUrl(
      this.nav,
      null
    );

    this.subscriptions.push(
      this.dashboardService.getSummaryAllSkills().subscribe((summaryTable) => {
        this.summaryTable = summaryTable;
      })
    );

    this.subscriptions.push(
      this.dashboardService.getEmployeesInfo().subscribe((employees) => {
        this.employees = employees;
      })
    );
  }

  onSetUserAvailability(employee: EmployeeInfo) {
    this.dashboardService
      .setEmployeeAvailability(employee.userId, !employee.isAvailable)
      .subscribe((response) => {
        if (response.isSuccessfull) {
          this.cd.detectChanges();
        }
      });
  }
}
