import { Component, OnInit } from '@angular/core';
import { H2OPrivileges } from 'src/app/app.enum';
import { UrlProviderService } from '../../services/url-provider.service';
import { AbacusOriginationCommonPrivilegesService } from '../../services/abacus-origination-common-privileges.service';
import { MicrositeNavigationService } from '../../services/microsite-navigation.service';
import { MicrositeNavigationLink, H2OLegacyNavType, H2OLegacyURL } from '../../services/microsite-navigation-links';

@Component({
  selector: 'h2o-digital-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showAllRegsLink = false;
  constructor(private urlProvider: UrlProviderService,
              private abacusOriginationCommonPrivilegesService: AbacusOriginationCommonPrivilegesService,
              private micrositeNavigationServic: MicrositeNavigationService) {}
  ngOnInit() {
    this.abacusOriginationCommonPrivilegesService
      .getUserPrivileges()
      .subscribe((userPrivileges) => {
        const hasAllRegsPrivilege =
          userPrivileges.indexOf(H2OPrivileges.H2OAllRegsAccess) > 0;
        this.showAllRegsLink = hasAllRegsPrivilege;
      });
  }
  loanSearchNavigate() {
    const nav: MicrositeNavigationLink = {
      navType: H2OLegacyNavType.OldLegacyPage,
      section: null,
      url: H2OLegacyURL.LoanSearchURL,
      isLoanIdRequired: false,
    };

    this.micrositeNavigationServic.navigateToLegacyH2OWeb(nav, null);
  }
  returnToDashboardNavigate() {
    location.href = '/';
  }

  helpDeskNavigate() {
    const url = `${this.urlProvider.helpDeskUrl}`;
    window.open(
      url + escape(document.location.href),
      'wsa_1_0',
      'height=200,width=200'
    );
  }

  allRegsNavigate() {
    this.micrositeNavigationServic.navigateToLegacyH2OAllRegs();
  }
}
