import { reducerActionType } from "../types/reducerActionsType";

export type languageType = {
    language: string | null
}

export const languageInicialState: languageType = {
    language: localStorage.getItem('language') == 'Portuguese' || localStorage.getItem('language') == 'English'
    ? localStorage.getItem('language') : 'English'
}

export const languageReducer = (state: languageType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_LANGUAGE':
            return {...state, language: action.payload.language}
        break
    }

    return state
}