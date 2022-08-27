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
            PortugueseText: 'Portuguese Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error facere quam praesentium obcaecati possimus modi laudantium id eos animi aperiam libero aspernatur aliquam doloremque, ipsam quaerat ratione dolorem sint?',
            Img: 'images/ProjectsImages/BMICalculator.png'      
          },
          {
            EnglishTitle: 'dnv',
            PortugueseTitle: 'sfdansf',
            EnglishText: 'This project was a challenge for b7web. In this project, I made a BMI calculator. You put your weight and height and the project will give you your BMI. it shows If you are too slim, normal, or overweight.',
            PortugueseText: 'Esse projeto foi um desafio do b7web, consiste em uma cálculadora de IMC, ela mostra se você está muito magro, normal ou com sobrepeso.',
            Img: 'kdjfoeu'      
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

    useEffect(() => {
        if(state.language.language == 'English') {
          setTitle(titleENGUSA)
          setProjectName(projects[index].EnglishTitle)

        }else {
          setTitle(titlePTBR)
          setProjectName(projects[index].PortugueseTitle)
        }
    }, [state.language.language])

    useEffect(() => {
      AOS.init({duration: 1500});
    }, [])

    const nextSlideFunction = () => {
      setChangeSlide('nextSlide')
      setTimeout(() => {setChangeSlide('none')}, 1000);
    }

    const backSlideFunction = () => {
      setChangeSlide('backSlide')
      setTimeout(() => {setChangeSlide('none')}, 1000);
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
              <h2>{projectName}</h2>
              <p>orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sed voluptatibus consectetur nisi ut? Quas quo voluptates odio ipsam aliquam dolorem, consequuntur cumque, maiores odit placeat velit vel necessitatibus tenetur.</p></div>
          </div>
        </ProjectStyle>
    )
}