import { MAKE_ACTIVE, SET_VALUE, FOCUS, MODAL, ADD, REMOVE, CHANGE, PAGE, SHOW_MESSAGE, HIDE_MESSAGE } from "./types";

export function makeActiveMenuItem(index) {
    return {
        type: MAKE_ACTIVE,
        payload: index
    }
}

export function setInputValue(value) {
    return {
        type: SET_VALUE,
        payload: value
    }
}

export function setFocusInput(boolean) {
    return {
        type: FOCUS,
        payload: boolean
    }
}

export function setModal(boolean, currentType) {
    return {
        type: MODAL,
        payload: boolean,
        typeOfModal: currentType
    }
}

export function addNewTodo(item) {
    return {
        type: ADD,
        payload: item,
    }
}

export function removeTodo(item) {
    return {
        type: REMOVE,
        payload: item,
    }
}

export function changeTypeOfTodo({item,status}) {
    return {
        type: CHANGE,
        payload: {
            item,
            status
        }
    }
}

export function changeList({type, page, content}) {  
    return {
        type: PAGE,
        payload: {
            type,
            page,
            content
        }
    }
}

export function createMessage({ type, message}) {  
    return {
        type: SHOW_MESSAGE,
        payload: {
            type,
            message
        }
    }
}
export function hideMessage() {  
    return {
        type: HIDE_MESSAGE,
    }
}
