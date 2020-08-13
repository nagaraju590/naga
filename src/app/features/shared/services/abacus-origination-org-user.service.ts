import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';
import { UrlProviderService } from './url-provider.service';

@Injectable({
  providedIn: 'root',
})
export class AbacusOriginationOrgUserService {
  constructor(
    private http: HttpClient,
    private urlProviderService: UrlProviderService
  ) { }

  public getUserProfile(): Observable<UserProfile> {
    const url = `${
      this.urlProviderService.originationBaseUrl
      }${'/org/employee/v1/logged-in'}`;
    return this.http.get<UserProfile>(url);
  }
}
