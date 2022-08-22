import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { AboutStyle } from "./style"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
    const {state, dispatch} = useContext(Context)

    //Texts
    const ParagraphENG = 'I started in the programming world in September 2021, a journey that continues until today. From the day I started until now I learned a lot of technologies. I have made automation in Python to pages in react. Little by little I have become a better developer.'
    
    const ParagraphPTBR = 'Comecei no mundo da programação em setembro de 2021, jornada que continua até hoje. Desde de lá, aprendi e realizei tarefas em várias tecnologias, de automação em Python até um jogo da memória em React. Minha jornada nesse universo continua de maneira constante, assim se tornando um programador full stack cada vez melhor.'

    const [paragraph, setParagraph] = useState<string>(state.language.language == 'English' ? ParagraphENG : ParagraphPTBR)

    const [aboutText, setAboutText] = useState<string>(state.language.language == 'English' ? 
    'About me': 'Sobre mim')

    const [curriculun, setCurriculun] = useState<string>(state.language.language == 'Englihs' ? '/Curriculum/CurriculumEng.pdf' : '/Curriculum/CurriculumPort.pdf')

    const [curriculumText, setCurriculumText] = useState<string>(state.language.language == 'English' ? 'Download CV' : 'Baixar CV')

    

    useEffect(() => {
        if(state.language.language == 'English') {
          setParagraph(ParagraphENG)
          setAboutText('About me')
          setCurriculun('/Curriculum/CurriculumEng.pdf')
          setCurriculumText('Download CV')
          
        }else {
          setParagraph(ParagraphPTBR)
          setAboutText('Sobre mim')
          setCurriculun('/Curriculum/CurriculumPort.pdf')
          setCurriculumText('Baixar CV')
        }
    }, [state.language.language])

    useEffect(() => {
      AOS.init({duration: 1500});
    }, [])

    return (
        <AboutStyle
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}
        id='About'>
          <h1>{aboutText}</h1>
          <div data-aos="fade-up" id="container" >
            <div id="img"><img src="images/photo.png" alt=""/></div>
            <div id="text"><p>{paragraph}</p></div>
          </div>
          <div id="curriculum">
            <a  data-aos="fade-up" href={curriculun} target={'__blank'}>{curriculumText}</a>
          </div>
        </AboutStyle>
    )
}