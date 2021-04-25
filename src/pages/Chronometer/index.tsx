import { Chronometer } from '../../components/chronometer';
import {TableTimes} from '../../components/TableTimes';
import { MenuChronometer} from '../../components/MenuChronometer';
import { Container } from './styles';

export const PageChronometer: React.FC = () => {
  return (
    <Container>
      <Chronometer />
      <TableTimes/>
      <MenuChronometer />
    </Container>
  )
}