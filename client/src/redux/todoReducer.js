import { ADD, CHANGE, REMOVE } from "./types"

// let initialState = [
//     {
//         status:'todo',
//         title: 'Design',
//         message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
//     },
//     {
//         status:'todo',
//         title: 'Development',
//         message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
//     },
//     {
//         status:'proccess',
//         title: 'Design',
//         message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
//     },
//     {
//         status:'completed',
//         title: 'Development',
//         message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
//     },
// ]

let initialState = JSON.parse(localStorage.getItem('todo')) || []




export const todoReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case ADD:
            let newState = [...state]
            newState.push(actions.payload)
            localStorage.setItem('todo', JSON.stringify(newState))
            return [...newState];
        case REMOVE:
            state = [...state]
            state.forEach((item, index)=> {
                if(item === actions.payload) {
                    state.splice(index, 1)
                } 
            })
            localStorage.setItem('todo', JSON.stringify(state))
            return [...state]; 
        case CHANGE:
            state = [...state]
            state.forEach( (item, index) => {
                if(item === actions.payload.item) {
                    let changedTodo = state.splice(index, 1)[0];
                    changedTodo.status = actions.payload.status
                    state = [...state, changedTodo]
                } 
            })
            localStorage.setItem('todo', JSON.stringify(state))
            return [...state];

            
        default: return state
    }
}