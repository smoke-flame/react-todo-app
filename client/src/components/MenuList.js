import {React} from 'react'
import {connect, useDispatch} from 'react-redux'
import { makeActiveMenuItem } from '../redux/actions';
import MenuItem from './MenuItem';

 const  MenuList =({items}) => {
   
  const dispatch = useDispatch()
  function clickHandler(event) {
    let idx = event.currentTarget.dataset.index
    dispatch(makeActiveMenuItem(idx))
  }


  return (
    <div className="menu">
      {items.map( (item, index) => <MenuItem item={item} index={index} key={index} handler={clickHandler}/> )}
    </div> 
    
  );
}

const mapToStateToProps = (state)=> {
  return {
    items: state.menu.menu
  }
}


export default connect(mapToStateToProps, null)(MenuList);

