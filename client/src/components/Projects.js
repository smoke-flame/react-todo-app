import React from 'react'
import AddTodo from './AddTodo'
import CompletedTodos from './CompletedTodos'
import ProgressTodos from './ProgressTodos'
import Todos from './Todos'
import {connect, useDispatch} from 'react-redux'
import { addNewTodo, changeList, setModal } from '../redux/actions'



function Projects({modal, page}) {

    
 
   

    const dispatch = useDispatch()

    function openModal(type) {
      dispatch(setModal(true, type))
    }
    function closeModal() {
      dispatch(setModal(false))
    }

    function addTodoItem(item) {
      dispatch(addNewTodo(item))
    }

    function changePage(item) {
      dispatch(changeList(item))
    }

    return (
        
        <div className="projects">
            Projects
          <div  className="bars">
              <Todos changePage={changePage} clickHandler={openModal}/>
              <ProgressTodos changePage={changePage} clickHandler={openModal}/>
              <CompletedTodos changePage={changePage} clickHandler={openModal}/>
          </div>
          <AddTodo submitHandler={addTodoItem} type={modal.currentType} active={modal.modal} clickHandler={closeModal}/>
          
        </div>
    )
    
}

const mapToStateToProps = (state)=> {
    return {
      modal: state.modal,
      page: state.page,
    }
  }

export default connect(mapToStateToProps, null)(Projects);