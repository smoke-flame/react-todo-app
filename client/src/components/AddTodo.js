import React, { useRef } from 'react'
import {connect, useDispatch} from 'react-redux'
import {createMessage, hideMessage,changeList} from '../redux/actions'


function AddTodo({active, clickHandler, type, submitHandler, message,todoList}) {
    const dispatch = useDispatch()
    const modalWindow = useRef(null)
    const closeWindow = useRef(null)
    const titleInput = useRef(null)
    const messageInput = useRef(null)
    function onClick(event) {
        if(event.target === modalWindow.current || event.target === closeWindow.current) {
            clickHandler()
        }
    }
    function onSumbit(event) {
        event.preventDefault();
        let newTodo = {
            status: type,
            title: titleInput.current.value,
            message: messageInput.current.value,
        }
        if(newTodo.title.trim() && newTodo.message.trim() ) {
            submitHandler(newTodo);
            let todoItems = todoList.filter( item => item.status === 'todo'? item : false);
            let  proccessItems = todoList.filter( item => item.status === 'proccess'? item : false)
            let completedItems = todoList.filter( item => item.status === 'completed'? item : false)

            switch(newTodo.status) {
                case 'todo':
                    todoItems.push(newTodo)
                    break;
                case 'proccess':
                    proccessItems.push(newTodo)
                    break;
                case 'completed':
                    completedItems.push(newTodo)
                        break;
                default:
                     break;
                
            }
            
            function sortByToItems(array) {

                let arrayOfPages = [];

                let twoItems =[];

                array.forEach( (item, index, array) => {

                    twoItems.push(item)
                    if(twoItems.length === 2) {
                        arrayOfPages.push(twoItems);
                        twoItems =[];
                    }
                    if(array.length%2 !==0 && index === array.length -1 ) {
                        arrayOfPages.push(twoItems);
                    }
                    return arrayOfPages
                })
                return arrayOfPages
            }
            let todo = sortByToItems(todoItems)
            let inproccess = sortByToItems(proccessItems)
            let completed = sortByToItems(completedItems)

            dispatch(changeList({
                type: 'todo',
                page:0,
                content:todo[0]
            }))
            dispatch(changeList({
                type: 'proccess',
                page:0,
                content:inproccess[0]
            }))
            dispatch(changeList({
                type: 'completed',
                page:0,
                content:completed[0]
            }))



            titleInput.current.value= '';
            messageInput.current.value= '';
            clickHandler()
        } else {
            dispatch(createMessage({
                type: 'error',
                message: 'Both fields are required'
            }))
            setTimeout(()=>{
                dispatch(hideMessage()) 
            },3000)
        }
        
    }
    

    return (
        <div ref={modalWindow} className={active ? "modal active": "modal"} onClick={onClick}>
            <div className={message.active? "message active" : "message"}>{message.message}</div>
            <div className="modal__body">
                <div className="modal__head">
                    <div className="modal__title">Add todo item with "{type}"  status</div>
                    <div className="modal__close" onClick={onClick}>
                        <img ref={closeWindow} src="img/project/cancel.svg" alt="cancel" />
                    </div>
                </div>
            <form action="#" className="modal__form form">

                <div className="form__title">
                    <label htmlFor="todo-title" className="form__label">Add title for your new todo</label>
                    <input ref={titleInput} type="text" id="todo-title" className="form__input" />
                </div>
                <div className="form__message">
                <label htmlFor="todo-message" className="form__label">Add message for your new todo </label>
                    <textarea ref={messageInput} type="text" id="todo-message" className="form__input"  />
                </div>
                <button  onClick={onSumbit} type="submit" className="form__button">Add todo</button>
            </form>

            </div>
        </div>
        
    )
}

const mapToStateToProps = (state)=> {
    return {
        message: state.message,
        todoList: state.todo,
    }
  }

export default connect(mapToStateToProps, null)(AddTodo);
