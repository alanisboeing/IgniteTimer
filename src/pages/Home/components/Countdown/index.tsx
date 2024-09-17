import { useContext, useEffect, useState } from "react";
import { CountdownContainer, TimerSeparator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CycleContext } from "../../../../contexts/CycleContext";


export function Countdown() {
  const { activeCycle, markCycleAsFinished, defineActiveCycle, passedSeconds, definePassedSeconds } =
    useContext(CycleContext);

  const totalSeconds = activeCycle ? activeCycle.minutesDuration * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - passedSeconds : 0;

  const minutesDuration = Math.floor(currentSeconds / 60);
  const secondsDuration = currentSeconds % 60;

  const minutes = String(minutesDuration).padStart(2, "0");
  const seconds = String(secondsDuration).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished(activeCycle);
          defineActiveCycle(null);
          clearInterval(interval);
        }
        definePassedSeconds(secondsDifference);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer - ${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <TimerSeparator>:</TimerSeparator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
