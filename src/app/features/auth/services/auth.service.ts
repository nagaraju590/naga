import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oktaAuthService: OktaAuthService) {}

  public isAuthenticated(): Observable<boolean> {
    return from(this.oktaAuthService.isAuthenticated());
  }
  public logout(logoutUrl: string) {
    this.oktaAuthService.logout(logoutUrl);
  }
}
