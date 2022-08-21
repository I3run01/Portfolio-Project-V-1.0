import { FooterStyle } from "./style"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const Footer = () => {
    const {state, dispatch} = useContext(Context)

    const [text, setText] = useState<string>(state.language.language == "English" ? 
    'All rights reserved' : 'Todos os direitos reservados')

    useEffect(() => {
        state.language.language == 'English' ? setText('All rights reserved') : setText('Todos os direitos reservados')
    }, [state.language.language])

    return (
        <FooterStyle
        scColor={state.secColor.secColorName as string}
        theme={state.theme.status}>
          <p>{text}</p>
        </FooterStyle>
    )
}