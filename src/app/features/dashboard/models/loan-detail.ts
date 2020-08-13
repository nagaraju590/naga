export interface LoanDetail {
    workflowActivityId: number;
    loanId: number;
    loanNumber: string;
    assignedToUserId: number;
    assignedToUser: string;
    borrowerName: string;
    activityStatus: string;
    currentStatusDate: Date | null;
    lockExpirationDate: Date | null;
    estimatedClosingDate: Date | null;
    priority: boolean;
    managerName: string;
}
