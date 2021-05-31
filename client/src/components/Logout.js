import React from 'react'

function Logout() {
    return(
        <div className="actions__logout">
            <div className="sidebar__container">
                <div className="actions__inner">
                    <div className="actions__img">
                        <img src="img/actions/log-out.svg" alt="settings" />
                    </div>
                    <div className="item__text">Logout</div>

                </div>
            </div>
        </div>
    )
}

export default Logout;