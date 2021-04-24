import { Container, Content, Date, Time, Power, Box } from './styles';
import { useChronometer } from '../../hooks/useChronometer'
import dayjs from 'dayjs';
import { FaPowerOff } from 'react-icons/fa';


export const Chronometer: React.FC = () => {
  const { lapsTime } = useChronometer()

  function formatTime(value: Number) {
    return value > 10 ? value.toString().padEnd(2, '0')
      : value.toString().padStart(2, '0');
  }
  return (
    <Container>
      <Content>
        <Power>
          <FaPowerOff size={16} />
        </Power>
        <Time>
          <Box>
            <span>{formatTime(lapsTime.hour)}</span>
          </Box>
          <p>:</p>
          <Box>
            <span>{formatTime(lapsTime.minute)}</span>
          </Box>
          <p>:</p>
          <Box>
            <span>{formatTime(lapsTime.second)}</span>
          </Box>
        </Time>
        <Date>
          <div>
            <span>{dayjs().date()}</span>
            <p>Dia</p>
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