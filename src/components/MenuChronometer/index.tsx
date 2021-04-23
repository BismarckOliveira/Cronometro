import { Container , Content} from './styles'
import { useChronometer } from '../../hooks/useChronometer'


export const MenuChronometer: React.FC = () => {
  const { isTimeActive, actionChronometer } = useChronometer();


  function changeColors() {
    return isTimeActive === true ? 'red' : 'green';
  }

  return (
    <Container >
      <Content buttonColor={changeColors()}>
        <button type="button" onClick={actionChronometer}>
          {isTimeActive ? 'Stop' : 'Start'}
        </button>
        <button type="button" >Clear</button>
        <button type="button" >Marck</button>
      </Content>
    </Container>
  )
}