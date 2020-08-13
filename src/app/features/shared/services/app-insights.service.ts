import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config';
import { ConfigService } from '@caliber/configuration';

export interface AppInsightsProperties {
  [detail: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class AppInsightsService {
  appInsights: ApplicationInsights;
  constructor(private configService: ConfigService<AppConfig>) {}
  init() {
    this.appInsights = new ApplicationInsights({
      config: this.configService.getConfig().appInsight,
    });
    this.appInsights.loadAppInsights();
  }

  logPageView(name?: string, url?: string) {
    // option to call manually
    this.appInsights.trackPageView({
      name,
      uri: url,
    });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name }, properties);
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name, average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({ exception, severityLevel });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message }, properties);
  }
}
