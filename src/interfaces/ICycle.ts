export interface ICycle {
  id: string,
  task: string,
  minutesDuration: number,
  startDate: Date,
  interruptDate?: Date,
  finishedDate?: Date,
}
