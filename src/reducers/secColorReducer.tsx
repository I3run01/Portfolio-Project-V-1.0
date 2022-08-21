import { reducerActionType } from "../types/reducerActionsType";

export type secColorType = {
    secColorName: string | null
}

export const secColorInicialState: secColorType = {
    secColorName: localStorage.getItem('secColorName') == '#5fe6ee' || localStorage.getItem('secColorName') == '#ff4117'
    ? localStorage.getItem('secColorName') : '#5fe6ee'
}

export const secColorReducer = (state: secColorType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_SEC_COLOR':
            return {...state, secColorName: action.payload.secColorName}
        break
    }

    return state
}