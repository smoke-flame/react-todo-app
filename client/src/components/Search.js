import React from 'react'
import {connect, useDispatch} from 'react-redux'
import { setFocusInput, setInputValue } from '../redux/actions';



function Search({input}) {
    const dispatch = useDispatch();

    function onChange(event) {
      dispatch(setInputValue(event.target.value))
    }
    return (
        <div className="header__search">
          
            <div className={input.focus || input.value ? "header__img hide":"header__img"}></div>
            <input type="text" className="header__input" onChange={onChange} onFocus={()=> dispatch(setFocusInput(true))} onBlur={()=> dispatch(setFocusInput(false))} placeholder="Search" />
        </div>
    )
}

const mapToStateToProps = (state)=> {
    return {
      input: state.input
    }
  }
  
  
  

export default connect(mapToStateToProps, null)(Search);