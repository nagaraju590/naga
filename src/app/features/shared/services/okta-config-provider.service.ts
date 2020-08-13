import { Injectable } from '@angular/core';
import { ConfigService } from '@caliber/configuration';
import { AppConfig } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class OktaConfigProviderService {
  issuer: string;
  redirectUri: string;
  clientId: string;
  scopes: string[];
  responseType: any;
  constructor(private configService: ConfigService<AppConfig>) {
    const okta = this.configService.getConfig().OKTA;
    this.issuer = okta.issuer;
    this.clientId = okta.clientId;
    this.redirectUri = okta.redirectUri;
    this.responseType = okta.responseType;
    this.scopes = okta.scopes;
  }
}
