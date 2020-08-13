import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UrlProviderService } from '../../shared/services/url-provider.service';
import { ObservableStore } from '@codewithdan/observable-store';
import { map, switchMap, filter, catchError, tap } from 'rxjs/operators';
import { SummaryAllSkills } from '../models/summary-all-skills.model';
import { Injectable } from '@angular/core';
import { SwitchCategoryRequest } from '../models/request/switch-category-request.model';
import { SwitchCategoryResponse } from '../models/response/switch-category-response.model';

@Injectable({ providedIn: 'root' })
export class SkillService {
  workflowBaseUrl = this.urlProviderService.workflowBaseUrl;

  constructor(
    private http: HttpClient,
    private urlProviderService: UrlProviderService
  ) {}

  public switchCategory(switchCategory: SwitchCategoryRequest) {
    const url = `${this.workflowBaseUrl}/skills/v1/users/switch-category`;

    this.http.post(url, switchCategory).subscribe(
      (result: SwitchCategoryResponse) => {
        console.log('User Switched :', result.isUserCatgorySwitched);
      },
      (response) => {
        console.log('An error occurred', response);
      }
    );
  }
}
