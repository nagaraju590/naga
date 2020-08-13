export interface AppConfig {
  originationBaseUrl: string;
  caliberServicesBaseUrl: string;
  h2oUrl: string;
  cdnBaseUrl: string;
  OKTA: OKTAConfig;
  helpDeskUrl: string;
  appInsight: AppInsight;
}

export interface OKTAConfig {
  issuer: string;
  redirectUri: string;
  clientId: string;
  scopes: string[];
  responseType: string[];
}
export interface AppInsight {
  instrumentationKey: string;
  enableAutoRouteTracking: boolean;
}
