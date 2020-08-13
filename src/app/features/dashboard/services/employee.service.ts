import { HttpClient } from '@angular/common/http';
import { UrlProviderService } from '../../shared/services/url-provider.service';
import { ObservableStore } from '@codewithdan/observable-store';
import { map, filter, tap, switchMap, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { EmployeeInfo } from '../models/employee-info.model';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../models/response/employee-response.model';

interface EmployeeState {
  employees: EmployeeInfo[];
}

const initialState: EmployeeState = {
  employees: null,
};

@Injectable({ providedIn: 'root' })
export class EmployeeService extends ObservableStore<EmployeeState> {
  abacusBaseUrl = this.urlProviderService.originationBaseUrl;

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

  public getEmployeeName(userId: number): Observable<string> {
    const url = `${this.urlProviderService.originationBaseUrl}/org/employee/${userId}`;
    const service = this.http.get<EmployeeResponse>(url);

    return service.pipe(
      map((res) => {
        let employeeName = '';
        employeeName = `${res.firstName} ${res.middleName} ${res.lastName}`;
        return employeeName;
      })
    );
  }
}
