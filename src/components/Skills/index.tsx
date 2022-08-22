import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillStyle } from "./style"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MySkills = () => {

    const {state, dispatch} = useContext(Context)
    const [skillsText, setSkillsText] = useState<string>(state.language.language == 'English' ? 'Skills' : 'Habilidades')

    const [levelbarOnOrOff, setlevelbarOnOrOff] = useState('levelbarOff')

    useEffect(() => {
        setSkillsText(state.language.language == 'English' ? 'Skills' : 'Habilidades')
    }, [state.language.language ])

    useEffect(() => {
        AOS.init({duration: 1500});
      }, [])

    const skills = [
        //Level is 1 to 5
        {name: 'TypeScript', level: 4},
        {name: 'React.JS', level: 3},
        {name: 'Node.JS', level: 2},
        {name: 'Python', level: 3},
        {name: 'AdonisJS', level: 2},
        {name: 'PHP', level: 2},
        {name: 'MySQL', level: 2},
        {name: 'MongoBD', level: 2}
    ]

    return (
        <SkillStyle
        id="Skills"
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}
        onMouseEnter={()=>{setlevelbarOnOrOff('levelbarOn')}}
        onMouseLeave={() => {setlevelbarOnOrOff('levelbarOff')}}>
            <h1>{skillsText}</h1>

            { skills.map((item, index) => ( 
            <div className={'MySkill'} >
                <h2>{item.name}</h2> 
                <div className="emptybar">
                    <div className={`levelbar ${levelbarOnOrOff + item.level}`}></div>
                </div>
            </div> ))}

        </SkillStyle>        
    ) 
}