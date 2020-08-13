import { modelCreator } from '../../global/functions';

export interface EmployeeInfo {
  isAvailable: boolean;
  userId: number;
  employeeName: string;
  skillLevel: string;
  currentQueueCount: number;
}

export const newEmployee = modelCreator<EmployeeInfo>({
  isAvailable: null,
  userId: null,
  employeeName: null,
  skillLevel: null,
  currentQueueCount: null,
});
