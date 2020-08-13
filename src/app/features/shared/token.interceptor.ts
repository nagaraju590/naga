import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private oktaAuthService: OktaAuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    if (this.hasHeader(request, 'Authorization')) {
      return next.handle(request).toPromise();
    }

    const accessToken = await this.oktaAuthService.getAccessToken();

    if (!accessToken) {
      return next.handle(request).toPromise();
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(request).toPromise();
  }

  hasHeader<T>(req: HttpRequest<T>, header: string): boolean {
    return !!req.headers.get(header);
  }
}
