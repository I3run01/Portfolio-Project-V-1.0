import { ContactMeBtnStyle } from "./style"
import { Context } from "../../contexts/Context"
import { useContext, useState } from "react"
import { GitHubIcon } from "./Icons"
import { LinkedInIcon } from "./Icons"
import { WhatsappIcon } from "./Icons"
import { TelegramIcon } from "./Icons"

export const  ContactMeBTN = () => {

    const {state, dispatch} = useContext(Context)
    const [opened, setOpened] = useState('Closed')
    const [hoverContactMe, setHoverContactMe] = useState('notHover')

    const OpenMenu = () => {

        if(opened == 'Opened') setOpened('Closed')
        else setOpened('Opened')
    }

    return (
        <ContactMeBtnStyle 
            id="ContactMeBTN"
            theme={state.theme.status}
            secColor={state.secColor.secColorName as string}
            onClick={OpenMenu}
            onMouseEnter={() => {setHoverContactMe('hoverContactMe')}}
            onMouseLeave={() => {setHoverContactMe('notHover')}}>
            <div id="container">
                <hr className={`line01 ${opened}01 ${hoverContactMe}`}/>
                <hr className={`line02 ${opened}02 ${hoverContactMe}`}/>
                
                <div className={`IconLinkedin ${opened}IconLinkedin`}>
                    <a href="www.linkedin.com/in/I3run01" target={"_blank"} title="Linkedin">
                        <LinkedInIcon
                            hoverColor={state.secColor.secColorName as string}/>
                    </a> 
                </div>
                <div className={`IconGitHub ${opened}IconGitHub`}>
                    <a href="https://github.com/I3run01" target={"_blank"} title="GitHub">
                        <GitHubIcon
                            hoverColor={state.secColor.secColorName as string}/>
                    </a> 
                </div>
                <div className={`IconWhatsApp ${opened}IconWhatsApp`}>
                    <a href="https://wa.me/5541995686185" target={"_blank"} title="WhatsApp">
                        <WhatsappIcon
                            hoverColor={state.secColor.secColorName as string}/>
                    </a> 
                </div>
                <div className={`IconTelegram ${opened}IconTelegram`} title="Telegram">
                    <a href="https://t.me/I3run01" target={"_blank"} >
                        <TelegramIcon
                            hoverColor={state.secColor.secColorName as string}/>
                    </a> 
                </div>
            </div>
        </ContactMeBtnStyle>
    )

}