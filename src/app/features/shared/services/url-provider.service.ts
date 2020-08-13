import { Injectable } from '@angular/core';
import { ConfigService } from '@caliber/configuration';
import { AppConfig } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class UrlProviderService {
  constructor(private configService: ConfigService<AppConfig>) {}

  get originationBaseUrl(): string {
    return `${this.configService.getConfig().originationBaseUrl}/origination`;
  }

  get caliberServicesBaseUrl(): string {
    return this.configService.getConfig().caliberServicesBaseUrl;
  }
  get workflowBaseUrl(): string {
    return `${this.caliberServicesBaseUrl}/origination/loan/workflow`;
  }
  get cdnBaseUrl(): string {
    return `${this.configService.getConfig().cdnBaseUrl}`;
  }
  get h2oUrl(): string {
    return this.configService.getConfig().h2oUrl;
  }
  get helpDeskUrl(): string {
    return this.configService.getConfig().helpDeskUrl;
  }
  get postClosingDashboardUrl(): string {
    return `${
      this.configService.getConfig().h2oUrl
    }/Home/Dashboard#/PCDashboard`;
  }
}
