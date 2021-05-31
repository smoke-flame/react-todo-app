import {React } from 'react'
import Actions from './Actions'
import Logo from './Logo'
import MenuList from './MenuList'

function Sidebar() {
  
  return (
    <div className="sidebar">
        <Logo/>
        <MenuList/>
        <Actions/>
        
    </div>
  );
}

export default Sidebar;
