import { MODAL } from "./types"

const initialState = {
    modal: false
}

export const modalReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case MODAL:
            if(actions.typeOfModal) {
                return {
                    modal: actions.payload,
                    currentType:actions.typeOfModal
                }
            } else {
                return {
                    modal: actions.payload,
                    currentType:null
                }
            }
            
        default: return state
    }
 
}