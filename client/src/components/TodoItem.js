import {React , useRef} from 'react'
import {connect, useDispatch} from 'react-redux'
import { removeTodo, changeTypeOfTodo, changeList } from '../redux/actions';




function TodoItem({item, todoList}) {
   
    const dispatch = useDispatch()
    function removeItem() {
        dispatch(removeTodo(item));
        let todoItems = todoList.filter( item => item.status === 'todo'? item : false);
        let  proccessItems = todoList.filter( item => item.status === 'proccess'? item : false)
        let completedItems = todoList.filter( item => item.status === 'completed'? item : false);
        [todoItems,proccessItems,completedItems].forEach(localItem => {
            localItem.forEach( (subItem, index) => {
                if(subItem === item) {
                    localItem.splice(index, 1);
                }
            })
        })
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
    }

        

    const itemDiv = useRef(null)
    let isPressed = false; 
    let dragObj ={};
    function calcBars() {
        let todoBar =document.querySelectorAll('.bars__item')[0].getBoundingClientRect()
        let proccessBar =document.querySelectorAll('.bars__item')[1].getBoundingClientRect()
        let completedBar =document.querySelectorAll('.bars__item')[2].getBoundingClientRect()
        return {
            todo:{
                xFrom: todoBar.x,
                xTo: todoBar.x + todoBar.width,
                yFrom: todoBar.y,
                yTo: todoBar.y + todoBar.height,
            },
            proccess:{
                xFrom: proccessBar.x,
                xTo: proccessBar.x + proccessBar.width,
                yFrom: proccessBar.y,
                yTo: proccessBar.y + proccessBar.height,
            },
            completed:{
                xFrom: completedBar.x,
                xTo: completedBar.x + completedBar.width,
                yFrom: completedBar.y,
                yTo: completedBar.y + completedBar.height,
            }
            }
    }

    function onMouseDown(event) {
        if(event.currentTarget !== itemDiv.current) return
        isPressed = true
        let bars = calcBars();

        itemDiv.current.classList.add('drag');
        
        dragObj.elem = itemDiv.current;
        dragObj.X = event.pageX;
        dragObj.Y = event.pageY;
        if(dragObj.X >= bars.todo.xFrom && dragObj.X <= bars.todo.xTo) {
            dragObj.status = 'todo'
        } else if(dragObj.X >= bars.proccess.xFrom && dragObj.X <= bars.proccess.xTo) {
            dragObj.status = 'proccess'
        } else if(dragObj.X >= bars.completed.xFrom && dragObj.X <= bars.completed.xTo) {
            dragObj.status = 'completed'
        }
       
        
    }
    function onMouseMove(event) {
        if(event.currentTarget !== itemDiv.current) return
        if( isPressed) {
        let x = event.pageX
        let y = event.pageY
        let moveX = x - dragObj.X;
        let moveY = y - dragObj.Y;
        dragObj.elem.style.transform = `translate(${moveX}px,${moveY}px)`
        }  
    }
    function onMouseUp(event) {
        isPressed = false;
        if(event.currentTarget !== itemDiv.current) return
        let bars = calcBars()
        event.target.closest('.draggable').classList.remove('drag');
        event.target.closest('.draggable').classList.add('back');
        setTimeout(() => {
            event.target.closest('.draggable').classList.remove('back');
        }, 505);
        if(event.pageX >= bars.todo.xFrom && event.pageX <= bars.todo.xTo
        && event.pageY >= bars.todo.yFrom && event.pageY <= bars.todo.yTo) {
            dragObj.endStatus = 'todo'
        } else if(event.pageX >= bars.proccess.xFrom && event.pageX <= bars.proccess.xTo
                  && event.pageY >= bars.proccess.yFrom && event.pageY <= bars.proccess.yTo) {
            dragObj.endStatus = 'proccess'
        } else if(event.pageX >= bars.completed.xFrom && event.pageX <= bars.completed.xTo
                && event.pageY >= bars.completed.yFrom && event.pageY <= bars.completed.yTo) {
            dragObj.endStatus = 'completed'
        } 
        if(dragObj.status === dragObj.endStatus || !dragObj.endStatus) {
            event.currentTarget.style.transform = '';
        } else {
            event.target.closest('.draggable').classList.remove('back')
            event.currentTarget.style.transform = '';
            dispatch(changeTypeOfTodo({item,status: dragObj.endStatus}))
            let todoItems = todoList.filter( item => item.status === 'todo'? item : false);
            let  proccessItems = todoList.filter( item => item.status === 'proccess'? item : false)
            let completedItems = todoList.filter( item => item.status === 'completed'? item : false)
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
        }
        dragObj = {};
    }
 
    return (
        <div ref={itemDiv} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} className="todo-item draggable">
           
           <div className="todo-item__head">
               <div className="todo-item__title">{item.title}</div>
               <div className="todo-item__remove">
                   <img onClick={removeItem} src="img/project/remove.svg" alt="remove" />
               </div>
           </div>

           <div className="todo-item__text">{item.message}</div>
           
        </div>
    )
}

const mapToStateToProps = (state)=> {
    return {
      todoList: state.todo,
      page: state.page,
    }
  }
  
  
  

export default connect(mapToStateToProps, null)(TodoItem);
