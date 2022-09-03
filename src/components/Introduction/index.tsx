import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { IntroductionStyle } from "./style"

export const Introduction = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        if(state.language.language == 'English') setPortfolio('Portfolio')
        else setPortfolio('Portfólio')
    }, [state.language.language])

    //Texts
    const [portfolio, setPortfolio] = useState<string>('Portfolio')

    return (
        <IntroductionStyle
        theme={state.theme.status}
        scColor={state.secColor.secColorName as string}
        id='start'>
                <h1>Bruno A.V
                     <br /> <span> {portfolio} </span>
                     <br /><span id="subtitle">full stack web developer</span></h1>
                <img src="images/avatar.png" alt="" />
        </IntroductionStyle>
    )
}