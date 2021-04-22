import { useEffect, useState } from 'react';
import { Container, Timer, Content } from './styles';


export const Chronometer: React.FC = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState(false);
   


  useEffect(() => {
    setTimeout(() => {
      if (timer) {
        setSecond(second + 1);
  
        if (second === 60) {
          setSecond(0);
          setMinute(minute + 1);
        }
  
        if (minute === 60) {
          setMinute(0);
          setHour(hour + 1);
        }       
  
      }
    }, 800);
   
  }, [timer, second, minute, hour])

  const formatCrono =
    (hour < 10 ? '0' + hour : hour) + ':' +
    (minute < 10 ? '0' + minute : minute) + ":" +
    (second < 10 ? '0' + second : second);


  function handleStart() {
    setTimer(true)
  }

  function handleStop() {
    setTimer(false);
  }

  function handleClear() {
    setHour(0);
    setMinute(0);
    setSecond(0);  
  }




  return (
    <Container>
      <Content>
        <Timer>
          <span>{formatCrono}</span>
        </Timer>
        <div>
          <button type="button" onClick={handleStart}>Start</button>
          <button type="button" onClick={handleStop}>Stop</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </Content>
    </Container>
  )
}