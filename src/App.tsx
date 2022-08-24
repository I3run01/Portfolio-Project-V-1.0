import { Nav } from "./components/Nav"
import { ContactMeBTN } from "./components/contactMeBTN"
import { Introduction } from "./components/Introduction"
import { About } from "./components/About"
import { MySkills } from "./components/Skills"
import { Project } from "./components/Projects"
import { Footer } from "./components/Footer"
import * as GS from './GlobalStyle'
import { Context } from './contexts/Context'
import { useContext } from "react"

function App() {
  const {state, dispatch} = useContext(Context)

  return (
    <GS.MainDiv
    theme={state.theme.status}>
        <Nav></Nav>
        <Introduction></Introduction>
        <ContactMeBTN></ContactMeBTN>
        <GS.ParagraphDiv>
          <About></About>
          <MySkills></MySkills>
          <Project 
          titleENGUSA='Projects'
          titlePTBR= 'Projetos'/>
        </GS.ParagraphDiv>
        <Footer></Footer>
    </GS.MainDiv>
    
  )
}

export default App
