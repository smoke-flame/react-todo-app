import React from 'react'

function PanelInfo() {
    return(
        <div className="info">
            <div className="info__question">
                <img src="img/header/question.svg" alt="question" />
            </div>
            <div className="info__notification">
                <img src="img/header/notification.svg" alt="notification" />
            </div>
        </div>
    )
}

export default PanelInfo;