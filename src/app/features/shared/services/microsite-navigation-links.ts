export interface MicrositeNavigationLink {
    navType: H2OLegacyNavType;
    url: H2OLegacyURL;
    section: PCDashboardSections;
    isLoanIdRequired: boolean;
  }
export enum H2OLegacyNavType {
    PCDashboard = 'PCDashboard',
    OldLegacyPage = 'OldLegacyPage',
  }

export enum H2OLegacyURL {
    DashboardURL = 'Home/Dashboard',
    LoanSearchURL = '/Pipeline/IndexMMP.aspx',
  }

export enum PCDashboardSections {
    PCDashboard = 'PCDashboard',
  }

