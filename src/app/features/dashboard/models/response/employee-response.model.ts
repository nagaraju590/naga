export interface EmployeeResponse {
  id: number;
  userID: number;
  originationTeamRoleID: number;
  defaultH20ScreenID: number;
  defaultLeftMenuID: number;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  workPhone: string;
  extension: string;
  mobile: string;
  otherPhone: string;
  fax: string;
  email: string;
  imageBytes: string;
  notificationTitle: string;
  loanRep: {
    name: string;
    id: number;
    isInactive: true;
    isForeignNationalApproved: true;
  };
  processor: {
    isInactive: true;
  };
  hasRateSheetAccess: true;
  businessUnitID: number;
  businessUnitName: string;
  defaultCompensationPlanTypeID: number;
  defaultBusinessUnitID: number;
  defaultRepID: number;
  notepadMaskName: string;
  notepadMaskTypeID: number;
  isBpoRestrictedUser: true;
  isInactive: true;
}
