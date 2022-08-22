import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillStyle } from "./style"

export const MySkills = () => {

    const {state, dispatch} = useContext(Context)
    const [skillsText, setSkillsText] = useState<string>(state.language.language == 'English' ? 'Skills' : 'Habilidades')

    useEffect(() => {
        setSkillsText(state.language.language == 'English' ? 'Skills' : 'Habilidades')
    }, [state.language.language ])

    const skills = [
        //Level is 1 to 5
        {name: 'TypeScript', Level: 4},
        {name: 'React.JS', Level: 3},
        {name: 'Node.JS', Level: 2},
        {name: 'Python', Level: 3},
        {name: 'AdonisJS', Level: 2},
        {name: 'PHP', level: 2},
        {name: 'MuSQL', level: 2},
        {name: 'MongoBD', level: 2}
    ]

    return (
        <SkillStyle
        id="Skills"
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}>
            <h1>{skillsText}</h1>
        </SkillStyle>        
    ) 
}