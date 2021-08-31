import React from 'react'
import './style.css';

function ReadMore(props) {
    return (
        <div className="main-button">
            <button className={props.className}>{props.title}</button>
        </div>
    )
}

export default ReadMore;
