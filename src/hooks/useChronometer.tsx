import React, { createContext, useContext, useState } from 'react';

interface Chronometer {
  hour: number;
  minute: number;
  second: number;
}

interface ChronometerData {
  laps: Chronometer;
  actionChronometer: () => void;
  isTimeActive: boolean;

}

const ChronometerContext = createContext<ChronometerData>({} as ChronometerData);

export const ChronometerProvider: React.FC = ({ children }) => {
  const [laps, setlaps] = useState<Chronometer>({ hour: 0, minute: 0, second: 0});
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout>({} as NodeJS.Timeout);
  const [isTimeActive, setIsTimeActive] = useState(false)

  function incrementSecond() {
    setlaps((Copylaps) => {
      const newlap = { ...Copylaps };
      newlap.second += 1;

      if (newlap.second === 60) {

        newlap.second = 0;
        newlap.minute += 1;
        return newlap
      }

      if (newlap.minute === 60) {

        newlap.minute = 0;
        newlap.hour += 1;
      }
      return newlap
    })
  }

  function startChronometer() {
    setIsTimeActive(true);
    incrementSecond();
    const timer = setInterval(() => {
    incrementSecond(); 
    },1000)
    setTimeInterval(timer)
  }

  function stopChronometer() {
    setIsTimeActive(false);
    clearInterval(timeInterval) 
  }


  function actionChronometer() {
    return isTimeActive ? stopChronometer() : startChronometer();
  }

  return (
    <ChronometerContext.Provider value={{ actionChronometer, laps ,isTimeActive}}>
      {children}
    </ChronometerContext.Provider>
  )
}

export function useChronometer() {
  const context = useContext(ChronometerContext);

  return context;
}