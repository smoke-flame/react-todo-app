import React from 'react'

function TodosPages({index, atClick, active }) {

 
    return (
        <button onClick={()=>atClick(index)} className={index === active? "todo__pages active":"todo__pages"}>{index +1}</button>
    )
}

export default TodosPages