export interface SwitchCategoryRequest {
  userId: number;
  skillCategoryId: number;
  dateTimeStarted: Date;
  dateTimeEnded: Date;
  isPrimary: boolean;
}
