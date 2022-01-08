import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value) {
    const status = value.toUpperCase();
    if (!this.isStatusValid(status))
      throw new BadRequestException(`${value} is not a valid status`);
    return status;
  }

  private isStatusValid(status: any) {
    console.log(Object.values(TaskStatus));
    return Object.values(TaskStatus).indexOf(status) > -1 ? true : false;
  }
}
