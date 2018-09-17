import { Injectable } from '@angular/core';
import {getRepository, Repository} from "typeorm";
import {WorkPeriod} from "../../entities/WorkPeriod";

/*
  Generated class for the WorkPeriodDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkPeriodDataProvider {

  public workPeriodRepository;

  constructor() {
    console.log('Hello WorkPeriodDataProvider Provider');
    this.workPeriodRepository = getRepository('work_period') as Repository<WorkPeriod>;
  }

  async getCurrentWorkPeriod() {
    return await this.workPeriodRepository.findOne({status: WorkPeriod.STATUS_OPEN});
  }

}
