import { Link } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import { NavSS } from "./style"
import { MenuBarIcon } from "./MenuBarIcon"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const Nav  = () => {
    const {state, dispatch} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [menuStatus, setMenuStatus] = useState<'closed' | 'opened'>('closed')
    const [ClicksCount, setClicksCount] = useState<number>(0)

    useEffect(() => {
        ChangeLanguageTexts()
    },[state.language.language])

    //Texts
    const [textStart, setTextStart] = useState(state.language.language == 'English' ? 'Start' : 'Início')
    const [textAbout, setTextAbout] = useState(state.language.language == 'English' ? 'About' : 'Sobre')
    const [textSkills, setTextSkills] = useState(state.language.language == 'English' ? 'Skills' : 'Habilidades')
    const [textProjects, setTextProjects] = useState(state.language.language == 'English' ? 'Projects' : 'Projetos')
    const [textTheme, setTextTheme] = useState(state.language.language == 'English' ? 'Theme' : 'Tema')
    const [textLanguage, setTextLanguage] = useState(state.language.language == 'English' ? 'Language' : 'Idioma')
    const [textSecColor, setTextSecColor] = useState(state.language.language == 'English' ? 'Color' : 'Cor')
    const [textChangeTheme, setTextChangeTheme] = useState(state.language.language == 'English' ? 'change to light' : 'mudar para tema o claro')
    const [textChangeSecColor, setTexttextChangeSecColor] = useState(state.language.language == 'English' ? 'change to red' : 'mudar pra vermelho')
    const [textChangeLanguage, setTextChangeLanguage] = useState(state.language.language == 'English' ? 'change to English' : 'mudar para o inglês')

    const ChangeTheme = () => {
        if(state.theme.status == 'dark') {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'light'
                }
            })
        } else {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'dark'
                }
            })
        }
    }

    const ChangeSecColor = () => {
        if(state.secColor.secColorName == '#5fe6ee') {
            dispatch({
                type: 'CHANGE_SEC_COLOR',
                payload: {
                    secColorName: '#ff4117'
                }
            })
        } else {
            dispatch({
                type: 'CHANGE_SEC_COLOR',
                payload: {
                    secColorName: '#5fe6ee'
                }
            })
        }
    }
    const Changelanguage = () => {
        if(state.language.language == 'English') {
            dispatch({
                type: 'CHANGE_LANGUAGE',
                payload: {
                    language: 'Portuguese'
                }
            })  
        } else {
            dispatch({
                type: 'CHANGE_LANGUAGE',
                payload: {
                    language: 'English'
                }
            })
        }
    }

    const ChangeLanguageTexts = () => {
        if(state.language.language == 'English') {
            setTextStart('Start')
            setTextAbout('About')
            setTextSkills('Skills')
            setTextProjects('Projects')
            setTextTheme('Theme')
            setTextLanguage('Language')
            setTextSecColor('Color')     
            setTextChangeTheme('change theme')
            setTexttextChangeSecColor('change second color')
            setTextChangeLanguage('change to Portuguse')
        } else {
            setTextStart('Início')
            setTextAbout('Sobre')
            setTextSkills('Habilidades')
            setTextProjects('Projetos')
            setTextTheme('Tema')
            setTextLanguage('Idioma')
            setTextSecColor('Cor')
            setTextChangeTheme('mudar tema')
            setTexttextChangeSecColor('mudar a cor secundária')
            setTextChangeLanguage('mudar para o inglês')

        }
    }

    const MenuOpenAndClose = () => {
        setClicksCount(ClicksCount + 1)
        if (ClicksCount > 0) {
            setMenuOpen(!menuOpen)
            if(menuStatus == 'opened') setMenuStatus("closed")
            else setMenuStatus("opened")
        }
    }

    return (
        <NavSS
        id="menubar"
        theme={state.theme.status}
        hoverColor={state.secColor.secColorName as string}>
            <MenuBarIcon MenuScrollAnimation={MenuOpenAndClose}></MenuBarIcon>
            <div 
                className={`MenuScroll ${menuStatus}`}>
                <div><Link to='start' spy={true} smooth={true} offset={10} duration={500}>{textStart}</Link></div>
                <div><Link to='About' spy={true} smooth={true} offset={10} duration={500}>{textAbout}</Link></div>
                <div><Link to='Skills' spy={true} smooth={true} offset={10} duration={500}>{textSkills}</Link></div>
                <div><Link to='Projects' spy={true} smooth={true} offset={10} duration={500}>{textProjects}</Link></div>
                <div onClick={ChangeTheme}>
                    <RouterLink to='#'>{textTheme}<br /> <span>{textChangeTheme}</span></RouterLink></div>
                <div onClick={ChangeSecColor}>
                    <RouterLink to='#'>{textSecColor}<br /> <span>{textChangeSecColor}</span> </RouterLink></div>
                <div onClick={Changelanguage}>
                    <RouterLink to='#'>{textLanguage}<br /> <span>{textChangeLanguage}</span> </RouterLink></div>

            </div>
        </NavSS>
    )
}