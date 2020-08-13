import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Category } from '../../models/category.model';
import { EmployeeInfo, newEmployee } from '../../models/employee-info.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/features/shared/components/base.component';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.scss'],
})
export class EmployeeContainerComponent extends BaseComponent
  implements OnInit {
  categories: Category[];
  employeeName = '';
  employeeId: number;
  primaryCategory: number;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private employeeService: EmployeeService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        this.employeeId = +params.employeeId;
        if (!this.employeeId) {
          this.router.navigate(['/summary']);
        }

        this.getEmployeeName(this.employeeId);

        this.dashboardService
          .getEmployeeCategories(this.employeeId)
          .subscribe((categories) => {
            this.categories = categories;
            this.primaryCategory = categories.find(
              (c) => c.isPrimary === true
            ).categoryId;
            this.cd.detectChanges();
          });
      })
    );
  }
  getEmployeeName(employeeId: number) {
    this.employeeService.getEmployeeName(employeeId).subscribe((name) => {
      this.employeeName = name;
      this.cd.detectChanges();
    });
  }
}
