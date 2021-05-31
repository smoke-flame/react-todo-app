import { PAGE } from "./types"

let initialState = [
    {
        type: 'todo',
        page:0,
        content:[
            // {
            //     status:'todo',
            //     title: 'Design',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
            // {
            //     status:'todo',
            //     title: 'Development',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
        ]
    },
    {
        type: 'proccess',
        page:0,
        content:[
            // {
            //     status:'todo',
            //     title: 'Design',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
            // {
            //     status:'todo',
            //     title: 'Development',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
        ]
    },
    {
        type: 'completed',
        page:0,
        content:[
            // {
            //     status:'todo',
            //     title: 'Design',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
            // {
            //     status:'todo',
            //     title: 'Development',
            //     message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum tempora accusamus temporibus praesentium dolores magnam, sunt velit quae facilis.'
            // },
        ]
    }
];


export const pageReducer = (state = initialState, action ) => {
    switch(action.type) {
        case PAGE:
            state =[...state];
            state.forEach( (item, index) => {
                if(item.type === action.payload.type) {
                    let changedTodo = state.splice(index, 1)[0];
                    changedTodo = action.payload;
                    state= [...state, changedTodo]
                }
                      
            })
            return state

        default:
            return state
    }
}