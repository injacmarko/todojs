import React, { useState } from "react";
import Item from './Item'
import arrow from './../images/arrow.png'

function Archive(props)
{
    const [isShown, setIsShown] = useState(false)
    function openArchive()
    {
        setIsShown(!isShown)
    }

    return(
        <div className="archive">
            <div className="archive-upper">
                <button className="archive-btn" onClick={openArchive}>
                    <h2 className="archive-label">Completed tasks</h2>
                    <img className="archive-arrow" src={arrow} alt="Arrow-Down"/>
                </button>
            </div>
            {isShown && (<div className="archive-items">
                <ul>{props.list.map(el => <li key={el.id}><Item data={el}/></li>)}</ul>
            </div>)}
        </div>
    )
}
export default Archive