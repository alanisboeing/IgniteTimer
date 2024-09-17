import { ICycle } from "./ICycle";
import { INewTask } from "./INewTask";

export interface ICycleContext {
  activeCycle: ICycle | null,
  passedSeconds: number,
  cycles: ICycle[],
  markCycleAsFinished: (activeCycle: ICycle | null )=> void,
  defineActiveCycle: (cycle: ICycle | null)=> void,
  definePassedSeconds: (passedSeconds: number)=> void,
  handleInterruptCycle: ()=> void,
  createNewCycle: (task: INewTask)=> void,
}