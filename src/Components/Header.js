import React from 'react'
import './Header.css';

function Header(props) {
    return (
        <>
    <div className="container">
            <div>
                <h1 id="logo"></h1>
                <h3 className="schName">{props.schName}</h3>
            </div>

           <div>
                 <h1 className="schId">{props.id}</h1>
           </div>
    </div>
            
        </>
    )
}

export default Header
