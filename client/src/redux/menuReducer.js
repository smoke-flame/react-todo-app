import {  MAKE_ACTIVE } from "./types"

const initialState = {
    menu: [
        {
            text: 'Overwiew',
            icon: 'img/menu/home.svg',
            active: false
          },
          {
            text: 'Stats',
            icon: 'img/menu/statistics.svg',
            active: false
          },
          {
            text: 'Projects',
            icon: 'img/menu/folder.svg',
            active: true
          },
          {
            text: 'Chat',
            icon: 'img/menu/messenger.svg',
            active: false
          },
          {
            text: 'Calendar',
            icon: 'img/menu/calendar.svg',
            active: false
          },
    ],
    
}

export const menuReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case MAKE_ACTIVE:
             let newMenu = [...state.menu] 
             newMenu.forEach(item=> item.active = false)
             newMenu[actions.payload].active = true
            return {...state, menu: [...newMenu] }
        default: return state
    }
 
}


