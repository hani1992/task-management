import { TaskStatus } from '../tasks-status.enum';

export class GetTaskFilterDto {
  status: TaskStatus;
  search: string;
}
