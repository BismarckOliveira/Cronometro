import { ChronometerProvider } from "./hooks/useChronometer"
import { GlobalStyle } from "./styles/global"
import {PageChronometer} from './pages/Chronometer'


export const App: React.FC = () => {
 return (
   <ChronometerProvider>
    <PageChronometer />
    <GlobalStyle />
  </ChronometerProvider>
 )
}