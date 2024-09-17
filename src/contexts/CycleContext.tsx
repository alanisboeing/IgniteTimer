import { createContext, ReactNode, useState } from "react";
import { ICycleContext } from "../interfaces/ICycleContext";
import { ICycle } from "../interfaces/ICycle";
import { INewTask } from "../interfaces/INewTask";

export const CycleContext = createContext({} as ICycleContext);

interface ICycleContextProviderProps {
  children: ReactNode;
}

export function CycleContextProvider({ children }: ICycleContextProviderProps) {
  const [cycles, setCycles] = useState<ICycle[]>([]);

  
  const [activeCycle, setActiveCycle] = useState<ICycle | null>(null);
  const [passedSeconds, setpassedSeconds] = useState(0);

  function markCycleAsFinished(activeCycle: ICycle | null) {
    setCycles((state) =>
      state.map((cycle) => {
        if (activeCycle && cycle.id == activeCycle.id) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function defineActiveCycle(cycle: ICycle | null) {
    setActiveCycle(cycle);
  }

  function definePassedSeconds(passedSeconds: number) {
    setpassedSeconds(passedSeconds);
  }

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (activeCycle && cycle.id == activeCycle.id) {
          return { ...cycle, interruptDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycle(null);
  }

  function createNewCycle(data: INewTask) {
    const id = new Date().getTime().toString();
    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesDuration: data.minutesDuration,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    defineActiveCycle(newCycle);
    setpassedSeconds(0);
    // reset();
  }
  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        passedSeconds,
        cycles,
        markCycleAsFinished,
        defineActiveCycle,
        definePassedSeconds,
        handleInterruptCycle,
        createNewCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
