import { Injectable } from '@angular/core';
import { MicrositeRouterService } from '@caliber/microsite-router';
import { UrlProviderService } from './url-provider.service';
import { MicrositeNavigationLink } from './microsite-navigation-links';

@Injectable({
  providedIn: 'root',
})
export class MicrositeNavigationService {
  constructor(
    private micrositeRouterService: MicrositeRouterService,
    private urlProvider: UrlProviderService
  ) {}

  private h2oLegacyBaseUrl = this.urlProvider.h2oUrl;

  navigateToLegacyH2OAllRegs() {
    const url = `${this.h2oLegacyBaseUrl}/Loan/H2oDigitalLaunch/AllRegs`;
    const windowToolBarAttr =
      'status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,screenX=0,screenY=0,left=0,top=0,width=';

    const windowHeightAttr =
      window.screen.availWidth -
      20 +
      ',height=' +
      (window.screen.availHeight - 40);
    window.open(url, 'AllRegs', windowToolBarAttr + windowHeightAttr);
  }
  navigateToLegacyH2OWeb(
    navigationLink: MicrositeNavigationLink,
    loanId: number
  ) {
    window.location.href = this.generateH2OLegacyWithNoActivityUrl(
      navigationLink,
      loanId
    );
  }
  generateH2OLegacyWithNoActivityUrl(
    navigationLink: MicrositeNavigationLink,
    loanId: number
  ) {
    if (!navigationLink) {
      throw new Error('Missing NavigationLink argument');
    }
    const encodedLoanId = navigationLink.isLoanIdRequired
      ? btoa(loanId.toString())
      : '';
    const { navType, url, section } = navigationLink;

    const queryParamsString = this.micrositeRouterService.queryParamsToString({
      loanId: encodedLoanId,
      url,
      navType,
      section,
    });

    return `${this.h2oLegacyBaseUrl}/Loan/H2oDigitalLaunch/Index?${queryParamsString}`;
  }
}
