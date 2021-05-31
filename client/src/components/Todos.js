import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EmptyTodo from './EmptyTodo';
import TodoItem from './TodoItem'
import TodosPages from './TodosPages'





function Todos({clickHandler, items, changePage, page}) {
    let activeIndex = page.page;

    
    let todoToShow;
    page.forEach( item => {
        if(item.type === 'todo') {
            todoToShow = item;
        }
    })
    
    

    let todoItems = items.filter( item => item.status === 'todo'? item : false);
   
    let arrayOfPages = [];

    let twoItems =[];

    todoItems.forEach( (item, index, array) => {
        twoItems.push(item)
        if(twoItems.length === 2) {
            arrayOfPages.push(twoItems);
            twoItems =[];
        }
        if(array.length%2 !==0 && index === array.length -1 ) {
            arrayOfPages.push(twoItems);
        }
    })
    useEffect(()=>{
        changePage({
            type: 'todo',
            page:0,
            content:arrayOfPages[0]
        })
        // eslint-disable-next-line
    },[])
       
    

    function showItems(index) {
        changePage({
            type:'todo',
            page:index,
            content:arrayOfPages[index]
        })
    }




 let id = 0;
    return (
        
        <div className="bars__item">
    
            <div className="bars__head">
                <div className="bars__title">To do</div>
                <div className="bars__counter">{todoItems.length}</div>
            </div>
            <button className="add-todo" onClick={()=>clickHandler('todo')}>+</button>
            

            <div className="bars__list">
                <div className="bars__menu">
                    {arrayOfPages.length > 1 && arrayOfPages.length ?arrayOfPages.map((item, index) => <TodosPages  atClick={showItems} active={activeIndex} index={index}  key={ id++}/>): false}
                </div>
                {todoToShow.content ?  todoToShow.content.map( item => <TodoItem item={item} key={ id++}/>) : <EmptyTodo/> }
            </div>
           
        </div>
    )
}

const mapToStateToProps = (state)=> {
    return {
        items: state.todo,
        page: state.page,
    }
  }

export default connect(mapToStateToProps, null)(Todos);
