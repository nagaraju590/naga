import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UrlProviderService } from '../../shared/services/url-provider.service';
import { ObservableStore } from '@codewithdan/observable-store';
import { map, switchMap, filter, catchError, tap } from 'rxjs/operators';
import { SummaryAllSkills } from '../models/summary-all-skills.model';
import { SkillsDetail } from '../models/skills-detail';
import { Injectable } from '@angular/core';
import { EmployeeInfo } from '../models/employee-info.model';
import { SetEmployeeAvailabilityResponse } from '../models/response/set-employee-availabvility-response.model';
import { Category, newCategory } from '../models/category.model';
import { SkillCategoriesResponse } from '../models/response/skill-categories-responose.model';

interface SummaryState {
  summary: SummaryAllSkills;
  employees: EmployeeInfo[];
}

const initialState: SummaryState = {
  summary: null,
  employees: null,
};

// const mockCategories = [
//   newCategory({ categoryId: 1, name: 'Initial Decision', isPrimary: false }),
//   newCategory({ categoryId: 2, name: 'Condition Reviewer', isPrimary: false }),
//   newCategory({
//     categoryId: 3,
//     name: 'Senior Fulfillment Analyst',
//     isPrimary: true,
//   }),
// ];

@Injectable({ providedIn: 'root' })
export class DashboardService extends ObservableStore<SummaryState> {
  workflowBaseUrl = this.urlProviderService.workflowBaseUrl;

  public summary = this.stateChanged.pipe(
    filter((state) => !!state && !!state.summary),
    map((state) => state.summary)
  );

  public employees = this.stateChanged.pipe(
    filter((state) => !!state && !!state.employees),
    map((state) => state.employees)
  );

  constructor(
    private http: HttpClient,
    private urlProviderService: UrlProviderService
  ) {
    super({ trackStateHistory: true });
    this.setState(initialState, 'initialState');
  }

  public getSummaryAllSkills(): Observable<SummaryAllSkills> {
    const url = `${this.workflowBaseUrl}/dashboards/v1/queue-summary/`;

    return this.http.get<SummaryAllSkills>(url).pipe(
      tap((summryResponse) => {
        this.setState(
          {
            ...this.getState(),
            summary: summryResponse,
          },
          'getSummary'
        );
      }),
      switchMap(() => {
        return this.summary;
      }),
      catchError((err) => {
        console.log('Error getting summary ');
        return this.summary;
      })
    );
  }

  public getEmployeesInfo(): Observable<EmployeeInfo[]> {
    const url = `${this.workflowBaseUrl}/dashboards/v1/employee-information/`;

    return this.http.get<EmployeeInfo[]>(url).pipe(
      tap((response: any) => {
        this.setState(
          {
            ...this.getState(),
            employees: response.employeeList,
          },
          'getEmployees'
        );
      }),
      switchMap(() => {
        return this.employees;
      }),
      catchError((err) => {
        console.log('Error getting employees ');
        return this.employees;
      })
    );
  }

  public getDetailsBySkills(skillId: number): Observable<SkillsDetail> {
    const url = `${this.workflowBaseUrl}/dashboards/v1/skills/${skillId}/manager`;
    const service = this.http.post<SkillsDetail>(url, { skillId });

    return service.pipe(
      map((response) => {
        return response;
      })
    );
  }

  public unassignActivity(activityId: number): Observable<number> {
    const url = `${this.workflowBaseUrl}/activities/v1/${activityId}/unassign`;
    const service = this.http.put<number>(url, { activityId });

    return service.pipe(
      map((response) => {
        return activityId;
      })
    );
  }

  public setEmployeeAvailability(userId: number, isAvailable: boolean) {
    const url = `${this.urlProviderService.workflowBaseUrl}/dashboards/v1/users/${userId}/availability/${isAvailable}`;
    return this.http
      .put<SetEmployeeAvailabilityResponse>(url, {})
      .pipe(map((response) => response));
  }

  public getEmployeeAvailability(userId: number): Observable<boolean> {
    const url = `${this.urlProviderService.workflowBaseUrl}/dashboards/v1/users/${userId}/is-available`;
    const service = this.http.get<boolean>(url);

    return service.pipe(
      map((res) => {
        return res;
      })
    );
  }

  public getEmployeeCategories(userId: number): Observable<Category[]> {
    const url = `${this.urlProviderService.workflowBaseUrl}/skills/v1/users/${userId}/categories`;
    const service = this.http.get<SkillCategoriesResponse>(url);

    return service.pipe(
      map((res) => {
        return res.skillCategories;
      })
    );
  }
}
