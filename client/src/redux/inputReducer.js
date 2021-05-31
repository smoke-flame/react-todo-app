import { FOCUS, SET_VALUE } from "./types"

const initialState = {
    focus: false,
    value:''
}

export const inputReducer = (state = initialState, actions) => {
  switch(actions.type) {
      case FOCUS:
        let newState ={ ...state};
        newState.focus = actions.payload
        return {...newState  };
        case SET_VALUE:
            state ={ ...state};
            state.value = actions.payload
        return {...state  };
      default: return state
  }

}