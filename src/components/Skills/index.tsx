import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillStyle } from "./style"

export const MySkills = () => {

    const {state, dispatch} = useContext(Context)
    const [skillsText, setSkillsText] = useState<string>(state.language.language == 'English' ? 'Skill' : 'Habilidade')

    useEffect(() => {
        setSkillsText(state.language.language == 'English' ? 'Skills' : 'Habilidades')
    }, [state.language.language ])

    return (
        <SkillStyle
        id="Skills"
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}>
            <h1>{skillsText}</h1>
        </SkillStyle>        
    ) 
}