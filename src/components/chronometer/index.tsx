import { Container, Content, Date, Time, Power } from './styles';
import { useChronometer } from '../../hooks/useChronometer'
import dayjs from 'dayjs';
import {FaPowerOff} from 'react-icons/fa';


export const Chronometer: React.FC = () => {
  const { laps } = useChronometer()

  function formatTime(value: Number) {
    return value > 10 ? value.toString().padEnd(2, '0')
      : value.toString().padStart(2, '0');
  }

   

  return (
    <Container>
      <Content>
        <Power>
          <FaPowerOff size={16}/>
        </Power>
        <Time>
          <span>{formatTime(laps.hour)}</span>
          <p>:</p>
          <span>{formatTime(laps.minute)}</span>
          <p>:</p>
          <span>{formatTime(laps.second)}</span>
        </Time>
        <Date>
          <div>
            <span>{dayjs().date()}</span>
            <p>dia</p>
          </div>
          <div>
            <span>{dayjs().month() + 1}</span>
            <p>Mes</p>
          </div>
          <div>
            <span>{dayjs().year()}</span>
            <p>Ano</p>
          </div>

        </Date>
      </Content>
    </Container>
  )
}