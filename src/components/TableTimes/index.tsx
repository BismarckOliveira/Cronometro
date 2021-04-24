import { Container , Content} from './styles';
import { useChronometer } from '../../hooks/useChronometer'

export const TableTimes = () => {
const {tableMark} = useChronometer();

function formatTime(value: Number) {
  return value > 10 ? value.toString().padEnd(2, '0')
    : value.toString().padStart(2, '0');
}

  return (
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tempo</th>
            </tr>
          </thead>
          <tbody>
           {tableMark.map(table => (
               <tr key={table.id}>
               <td>Marca {table.id}</td>
               <td>{formatTime(table.hour)}:
                   {formatTime(table.minute)}:
                   {formatTime(table.second)}</td>
             </tr>
          ))}
          </tbody>
        </table>
      </Content>

    </Container>
  )
}