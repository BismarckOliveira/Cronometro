import React, { createContext, useContext, useState , useEffect} from 'react';
import { api } from '../services/api';

interface Mark {
  hour: number;
  minute: number;
  second: number;
  id: string;
}

type Chronometer = Omit<Mark, 'id' >

interface ChronometerData {
  lapsTime: Chronometer;
  tableMark: Mark[];
  actionChronometer: () => void;
  isTimeActive: boolean;
  clearChronometer: () => void;
  createNewMark: () => void;

}

const ChronometerContext = createContext<ChronometerData>({} as ChronometerData);

export const ChronometerProvider: React.FC = ({ children }) => {
  const [lapsTime, setlapsTime] = useState<Chronometer>({ hour: 0, minute: 0, second: 0});
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout>({} as NodeJS.Timeout);
  const [isTimeActive, setIsTimeActive] = useState(false)
  const [tableMark,setTableMark] = useState<Mark[]>([])


  
  useEffect(() => {
    api.get('/laps')
    .then(response => setTableMark(response.data.laps))
  },[])


  function incrementSecond() {
    setlapsTime((Copylaps) => {
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

  function clearChronometer(){
    const lap = {
      hour: 0,
      minute: 0,
      second: 0,
    }
     setlapsTime(lap)
  }
    
   async function createNewMark(){
     const value = {...lapsTime};
    
     value.hour = lapsTime.hour;
     value.minute = lapsTime.minute;
     value.second = lapsTime.second;
       
     const response = await api.post('/laps', value)

      const { lap  } = response.data;
      
      setTableMark([...tableMark,  lap ])
    }
   
    
  return (
    <ChronometerContext.Provider value={
      {createNewMark,
      actionChronometer,
      lapsTime,
      isTimeActive,
      clearChronometer,
      tableMark}}>
      {children}
    </ChronometerContext.Provider>
  )
}

export function useChronometer() {
  const context = useContext(ChronometerContext);

  return context;
}