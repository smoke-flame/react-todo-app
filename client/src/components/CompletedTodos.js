import React ,{useEffect} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import TodosPages from './TodosPages';
import EmptyTodo from './EmptyTodo';


function CompletedTodos({clickHandler, items,  changePage, page}) {

    let completedItems = items.filter( item => item.status === 'completed'? item : false)
    let id = 0;

    let activeIndex = page.page;

    
    let todoToShow;
    page.forEach( item => {
        if(item.type === 'completed') {
            todoToShow = item;
        }
    })
    let arrayOfPages = [];

    let twoItems =[];

    completedItems.forEach( (item, index, array) => {
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
            type: 'completed',
            page:0,
            content:arrayOfPages[0]
        })
        // eslint-disable-next-line
    },[])
    function showItems(index) {
        changePage({
            type:'completed',
            page:index,
            content:arrayOfPages[index]
        })
    }
    return (
        <div className="bars__item">
            <div className="bars__head">
                <div className="bars__title">Completed</div>
                <div className="bars__counter">{completedItems.length}</div>
            </div>
            <button className="add-todo" onClick={()=>clickHandler('completed')}>+</button>
            <div className="bars__list">
                <div className="bars__menu">
                    {arrayOfPages.length > 1 ?arrayOfPages.map((item, index) => <TodosPages atClick={showItems} active={activeIndex} index={index}  key={ id++}/>): false}
                </div>
               
                {todoToShow.content ?  todoToShow.content.map( item => <TodoItem item={item} key={ id++}/>) :  <EmptyTodo/> }
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

export default connect(mapToStateToProps, null)(CompletedTodos);