import React from 'react'
import { FaPenSquare } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <div>
            <hr />
            <div className = "footer">
            
            <p>This can be updated from the <a href="#">fees management</a> section</p>
              

           <a href="http://"  rel="noopener noreferrer">
            <FaPenSquare />  Edit Template 
           </a>   
          
          
           <button>Close</button>
                 
            </div>
   
        </div>
    )
}

export default Footer
