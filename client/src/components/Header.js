import React from 'react'
import Panel from './Panel'
import Search from './Search'

function Header() {
    return (
        <div className="main__container">
            <header className="header">
            <Search/>
            <Panel/>
        </header>
        </div>
        
    )
}

export default Header;