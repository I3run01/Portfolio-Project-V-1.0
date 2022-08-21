import { useEffect, useState } from "react"
import { MenuBarStyle } from "./style"
import React, { useContext } from "react"
import { Context } from "../../../contexts/Context"

type Props = {
    MenuScrollAnimation: () => void
}

export const MenuBarIcon = ({MenuScrollAnimation}:Props) => {
    const {state, dispatch} = useContext(Context)
    const [menuStatus, setMenuStatus] = useState('closed')
    const [menuOpen, setMenuOpen] = useState(false)
    const [mouseIn, setMouseIn] = useState('NotIn')
    
    
    useEffect(() => {
        MenuOpenAndClose()
        
    }, [])

    const MenuOpenAndClose = () => {
        setMenuOpen(!menuOpen)
        if (!menuOpen) setMenuStatus('closed')
        else setMenuStatus('opened')
        MenuScrollAnimation()
    }

    return (
        <MenuBarStyle 
            onClick={MenuOpenAndClose}
            onMouseEnter={() => setMouseIn('In')}
            onMouseLeave={() => setMouseIn('NotIn')}
            theme={state.theme.status}
            secColor={state.secColor.secColorName as string}
            >
            <hr className={`line01 ${menuStatus}01 ${mouseIn}`}/>
            <hr className={`line02 ${menuStatus}02 ${mouseIn}`}/>
            <hr className={`line03 ${menuStatus}03 ${mouseIn}`}/>
            
        </MenuBarStyle>

    )
    
}