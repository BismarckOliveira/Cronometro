import { Chronometer } from "./components/chronometer"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"

export const App: React.FC = () => {
 return (
   <>
    <Header/>
    <Chronometer />
    <Footer/>
    <GlobalStyle />
  </>
 )
}