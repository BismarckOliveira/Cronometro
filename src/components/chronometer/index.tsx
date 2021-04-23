import { useState } from 'react';
import { TableTimes } from '../TableTimes';
import { Container, Timer, Content, MenuChronometer } from './styles';


export const Chronometer: React.FC = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState(false);

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
  }, 1000);


  const formatCrono =
    formatTime(hour) + ':' +
    formatTime(minute) + ":" +
    formatTime(second);

  function formatTime(value: Number) {
    return value > 10 ? value.toString().padEnd(2, '0')
      : value.toString().padStart(2, '0');
  }

  function handleStart() {
    setTimer(true)
  }

  function handleStop() {
    setTimer(false);
  }

  function handleActive() {
    return timer ? handleStop() : handleStart();
  }

  function handleClear() {
    setHour(0);
    setMinute(0);
    setSecond(0);
  }
   
  function changeColors(){
    return timer === true ? 'red' : 'green';
  }



  return (
    <Container>
      <Content>
        <Timer>
          <span>{formatCrono}</span>
          <TableTimes/>
        </Timer>
        <MenuChronometer buttonColor={changeColors()}>
          <button type="button" onClick={handleActive}>
            {timer ? 'Stop' : 'Start'}
          </button>
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="button" onClick={handleClear}>Marck</button>
        </MenuChronometer>
      </Content>
    </Container>
  )
}