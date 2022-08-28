import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { ProjectStyle } from "./style"
import { NextProjectIcon } from "./icons";
import { BackProjectIcon } from "./icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  titleENGUSA: string,
  titlePTBR: string
}

export const Project = ({titleENGUSA, titlePTBR}:Props ) => {
        //Projects
        const projects = [
          {
            EnglishTitle: 'BMI Project',
            PortugueseTitle: 'Projeto de IMC',
            EnglishText: 'This project was a challenge for b7web. In this project, I made a BMI calculator. You put your weight and height and the project will give you your BMI. If you are too slim, normal, or overweight.',
            PortugueseText: 'Esse projeto foi um desafio do b7web, consiste em uma cálculadora de IMC, ela mostra se você está muito magro, normal ou com sobrepeso.',
            Img: 'images/ProjectsImages/BMICalculator.png',
            Deploy: 'https://i3run01bmiproject.netlify.app',
            Github: 'https://github.com/I3run01/Projeto_Calculo_IMC'
          },
          {
            EnglishTitle: 'Keyboard Project',
            PortugueseTitle: 'Projeto teclado',
            EnglishText: 'I made a responsive keyboard with just JavaScript, CSS and HTML. If the screen is desktop, the keyboard will have the layout of a desktop keyboard. The opposite is also true, if the screen is of a phone, the keypad will be a telephone keypad.',
            PortugueseText: "Eu fiz um teclado responsivo apenas com JavaScript, CSS e HTML. Se a tela for de desktop, o teclado terá o layout de um teclado de desktop. O oposto também é verdadeiro, se a tela for de um          telefone, o teclado será de um teclado de telefone.",
            Img: 'images/ProjectsImages/KeyboardProject.png',
            Deploy: 'https://i3run01.github.io/Proj-Keyboard/',
            Github: 'https://github.com/I3run01/Proj-Keyboard'
          },
          
        ]

    //Constants
    const {state, dispatch} = useContext(Context)

    const [title, setTitle] = useState<string>(state.language.language == 'English' ? 
    titleENGUSA: titlePTBR)

    const [changeSlide, setChangeSlide] = useState<string>('none')

    const [index, setIndex] = useState<number>(0)

    const [projectName, setProjectName] = useState<string>(state.language.language == 'English' ? projects[index].EnglishTitle : projects[index].PortugueseTitle)

    const [ProjectText, setProjectText] = useState<string>(state.language.language == 'English' ? projects[index].EnglishText : projects[index].PortugueseText)

    const [seeProject, setSeeProject] = useState<string>(state.language.language == 'English' ? 'See the project' : 'Ver o projeto')

    const [githubProject, setGithubProject] = useState<string>(state.language.language == 'English' ? "Project's GitHub" : 'Github do projeto')

    useEffect(() => {
        if(state.language.language == 'English') {
          setTitle(titleENGUSA)
          setProjectName(projects[index].EnglishTitle)
          setProjectText(projects[index].EnglishText)
          setSeeProject('See the project')
          setGithubProject("Project's GitHub")

        }else {
          setTitle(titlePTBR)
          setProjectName(projects[index].PortugueseTitle)
          setProjectText(projects[index].PortugueseText)
          setSeeProject('Ver o projeto')
          setGithubProject('Github do projeto')
        }
    }, [state.language.language])

    useEffect(() => {
      if(state.language.language == 'English') {
        setProjectName(projects[index].EnglishTitle)
        setProjectText(projects[index].EnglishText)
      } else {
        setProjectName(projects[index].PortugueseTitle)
        setProjectText(projects[index].PortugueseText)
      }

    }, [index])

    useEffect(() => {
      AOS.init({duration: 1500});
    }, [])

    const nextSlideFunction = () => {
      setChangeSlide('nextSlide')
      setTimeout(() =>setIndex(index + 1 >= projects.length ? 0 : index + 1), 250);
      setTimeout(() => {setChangeSlide('none')}, 500);
    }

    const backSlideFunction = () => {
      setChangeSlide('backSlide')
      setTimeout(() => setIndex(index - 1 < 0 ? projects.length - 1 : index - 1) , 250);
      setTimeout(() => {setChangeSlide('none')}, 500);
    }
 


    return (
        <ProjectStyle
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}
        id='About'>
          <h1 onClick={nextSlideFunction} >{title}</h1>
          <div data-aos="fade-up" id="container">
            <div id="img">
              <NextProjectIcon handleChangeSlide={nextSlideFunction}/>
              <BackProjectIcon handleChangeSlide={backSlideFunction}/>
              <img className={changeSlide} src={projects[index].Img} alt=""/>
            </div>
            <div id="text">
              <div>
                <h2>{projectName}</h2>
                <p>
                  {ProjectText} <br />
                  <a href={projects[index].Deploy} target='_blank'>{seeProject}</a> <br />
                  <a href={projects[index].Github} target='_blank'>{githubProject}</a>
                </p>
              </div>  
            </div>
          </div>
        </ProjectStyle>
    )
}