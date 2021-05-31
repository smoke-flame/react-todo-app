import { SHOW_MESSAGE, HIDE_MESSAGE } from "./types"

const initialState = {
    active: false,
    message:'',
    type: 'error'
}

export const messageReducer = (state = initialState, actions) => {
  switch(actions.type) {
      case SHOW_MESSAGE:
        state ={ ...state};
        state.active = true;
        state.message = actions.payload.message
        state.type = actions.payload.type
        return {...state  };
        case HIDE_MESSAGE:
            state ={ ...state, active:false};
        return {...state  };
      default: return state
  }

}