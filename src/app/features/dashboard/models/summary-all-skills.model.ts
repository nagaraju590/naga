import { QueueSummary } from './queue- summary.model';

export interface SummaryAllSkills {
  queueSummary: QueueSummary[];
  totalUnAssignedCount: number;
  totalAssignedCount: number;
  totalInProgressCount: number;
  totalDailyTargetCount: number;
}
