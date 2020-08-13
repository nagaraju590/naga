export interface LeftNavManagerResponse {
  queueSummary: QueueSummary[];
  totalUnAssignedCount: number;
  totalAssignedCount: number;
  totalDailyTargetCount: number;
}

export interface QueueSummary {
  skillId: number;
  skillName: string;
  assignedCount: number;
  unAssignedCount: number;
  inProgressCount: number;
  dailyTargetCount: number;
}

