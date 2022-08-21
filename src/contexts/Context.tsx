import { createContext, useReducer } from "react";
import { useEffect } from "react";

import { themeInitialState, ThemeType, themeReducer  } from "../reducers/themeReducer";
import { secColorInicialState, secColorType, secColorReducer } from "../reducers/secColorReducer";
import { languageType, languageInicialState, languageReducer } from "../reducers/languageReducer";
import { reducerActionType } from "../types/reducerActionsType";

type initialStateType = {
    theme: ThemeType;
    secColor: secColorType;
    language: languageType
} //Change Here

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

const initialState = {
    theme: themeInitialState,
    secColor: secColorInicialState,
    language: languageInicialState
} //Change Here



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    theme: themeReducer(state.theme, action),
    secColor: secColorReducer(state.secColor, action),
    language: languageReducer(state.language, action)

}) //Change Here

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    //coloque dentro do useEffect as função que queira guardar no localStorage
    useEffect(() => {
        localStorage.setItem('theme', state.theme.status as string)
        localStorage.setItem('secColorName', state.secColor.secColorName as string)
        localStorage.setItem('language', state.language.language as string)
    }) //Change Here

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}