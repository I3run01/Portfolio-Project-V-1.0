import { Link } from "react-router-dom"

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
                <div><a href='#start'>{textStart}</a></div>
                <div><a href='#About'>{textAbout}</a></div>
                <div><a href='#Skills'>{textSkills}</a></div>
                <div><a href='#Projects'>{textProjects}</a></div>
                <div onClick={ChangeTheme}>
                    <Link to='#'>{textTheme}<br /> <span>{textChangeTheme}</span>  </Link></div>
                <div onClick={ChangeSecColor}>
                    <Link to='#'>{textSecColor}<br /> <span>{textChangeSecColor}</span> </Link></div>
                <div onClick={Changelanguage}>
                    <Link to='#'>{textLanguage}<br /> <span>{textChangeLanguage}</span> </Link></div>

            </div>
        </NavSS>
    )
}