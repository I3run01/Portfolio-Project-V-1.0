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
    const {state, dispatch} = useContext(Context)

    const [projectText, setProjectText] = useState<string>(state.language.language == 'English' ? 
    titleENGUSA: titlePTBR)


    useEffect(() => {
        if(state.language.language == 'English') {
          setProjectText(titleENGUSA)
          
        }else {
          setProjectText(titlePTBR)
        }
    }, [state.language.language])

    useEffect(() => {
      AOS.init({duration: 1500});
    }, [])

    const projects = [
      {
        EnglishTitle: 'dnv',
        PortugueseTitle: 'sfdansf',
        EnglishText: 'English Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error facere quam praesentium obcaecati possimus modi laudantium id eos animi aperiam libero aspernatur aliquam doloremque, ipsam quaerat ratione dolorem sint?',
        PortugueseText: 'Portuguese Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error facere quam praesentium obcaecati possimus modi laudantium id eos animi aperiam libero aspernatur aliquam doloremque, ipsam quaerat ratione dolorem sint?',
        Img: 'kdjfoeu'      
      },
      {
        EnglishTitle: 'dnv',
        PortugueseTitle: 'sfdansf',
        EnglishText: 'English Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error facere quam praesentium obcaecati possimus modi laudantium id eos animi aperiam libero aspernatur aliquam doloremque, ipsam quaerat ratione dolorem sint?',
        PortugueseText: 'Portuguese Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error facere quam praesentium obcaecati possimus modi laudantium id eos animi aperiam libero aspernatur aliquam doloremque, ipsam quaerat ratione dolorem sint?',
        Img: 'kdjfoeu'      
      },
    ]

    return (
        <ProjectStyle
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}
        id='About'>
          <h1>{projectText}</h1>
          <div data-aos="fade-up" id="container">
            <div className="img">
              <NextProjectIcon/>
              <BackProjectIcon/>
              <img className="nextSlide" src="images/photo.png" alt=""/>
            </div>
            <div id="text">
              <h2>Project Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sed voluptatibus consectetur nisi ut? Quas quo voluptates odio ipsam aliquam dolorem, consequuntur cumque, maiores odit placeat velit vel necessitatibus tenetur.</p></div>
          </div>
        </ProjectStyle>
    )
}