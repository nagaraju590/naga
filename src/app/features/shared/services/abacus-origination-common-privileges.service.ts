import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlProviderService } from './url-provider.service';

interface GetUserPrivilegesResponse {
  userPrivileges: number[];
}

@Injectable({ providedIn: 'root' })
export class AbacusOriginationCommonPrivilegesService {
  private originationBaseUrl = this.urlProvider.originationBaseUrl;

  constructor(
    private http: HttpClient,
    private urlProvider: UrlProviderService
  ) {}

  public getUserPrivileges(): Observable<number[]> {
    const url = `${this.originationBaseUrl}/common/privileges/v1/user-privileges`;
    return this.http
      .get<GetUserPrivilegesResponse>(url)
      .pipe(map((response) => response.userPrivileges));
  }
}
