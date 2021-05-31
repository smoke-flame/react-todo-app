import React from 'react'
import PanelInfo from './PanelInfo';
import User from './User'

function Panel() {
    return (
        <div className="header__panel">
            <PanelInfo/>
            <User/>
        </div>
    )
}

export default Panel;