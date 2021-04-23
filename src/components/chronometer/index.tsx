import { Container, Content, Date, Time } from './styles';
import { useChronometer } from '../../hooks/useChronometer'


export const Chronometer: React.FC = () => {
  const { laps } = useChronometer()

  function formatTime(value: Number) {
    return value > 10 ? value.toString().padEnd(2, '0')
      : value.toString().padStart(2, '0');
  }

  return (
    <Container>
      <Content>
        <Time>
          <span>{formatTime(laps.hour)}</span>
          <p>:</p>
          <span>{formatTime(laps.minute)}</span>
          <p>:</p>
          <span>{formatTime(laps.second)}</span>
        </Time>
        <Date>
          <div>
            <span>29</span>
            <p>dia</p>
          </div>
          <div>
            <span>6</span>
            <p>Mes</p>
          </div>
          <div>
            <span>2020</span>
            <p>Ano</p>
          </div>

        </Date>
      </Content>
    </Container>
  )
}