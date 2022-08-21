import { reducerActionType } from "../types/reducerActionsType";

export type ThemeType = {
    status: string |  null
}

export const themeInitialState: ThemeType = {
    status: localStorage.getItem('theme') == 'dark'  || localStorage.getItem('theme') == 'light' 
    ? localStorage.getItem('theme') : 'dark'
}


export const themeReducer = (state: ThemeType, action: reducerActionType) => {

    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}