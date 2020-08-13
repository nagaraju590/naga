import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlProviderService } from './url-provider.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LeftNavManagerResponse, QueueSummary } from '../models/manager-skills.model';

@Injectable({
  providedIn: 'root',
})
export class LeftNavManagerService {
  private workflowDashboardBaseUrl = this.urlProvider.workflowBaseUrl + '/dashboards';
  constructor(
    private http: HttpClient,
    private urlProvider: UrlProviderService
  ) { }
  public getManagerSkills(): Observable<QueueSummary[]> {
    const url = `${this.workflowDashboardBaseUrl}/v1/queue-summary`;
    const serviceRequest = this.http
      .get<LeftNavManagerResponse>(url);
    return serviceRequest.pipe(map((response) => response.queueSummary));
  }
}
