import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { H2OPrivileges } from './app.enum';
import { of } from 'rxjs';
import { AbacusOriginationCommonPrivilegesService } from './features/shared/services/abacus-origination-common-privileges.service';

@Injectable()
export class H2oDigitalAccessGuard implements CanActivate {
  constructor(
    private abacusOriginationCommonPrivilegesService: AbacusOriginationCommonPrivilegesService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.abacusOriginationCommonPrivilegesService
      .getUserPrivileges()
      .pipe(
        map((privileges: number[]) => {
          const hasPrivilege =
            privileges.indexOf(H2OPrivileges.H2ODigitalManagerAccess) > 0;

          if (!hasPrivilege) {
            this.router.navigate(['unauthorized']);
          }
          return hasPrivilege;
        }),
        catchError(() => {
          this.router.navigate(['unauthorized']);
          return of(false);
        })
      );
  }
}
