import React from 'react'

function MenuItem({item, index, handler}) {
  return (
      
    <div className={ item.active? "menu__item active": "menu__item"} data-index={index} onClick={handler} >
      <div className="sidebar__container">
        <div className="menu__item__inner">
          <div className="item__img">
              <img src={item.icon} alt="icon" />
          </div>
          <div className="item__text">{item.text}</div>
        </div>
      </div>     
    </div> 
    
  );
}

export default MenuItem;


