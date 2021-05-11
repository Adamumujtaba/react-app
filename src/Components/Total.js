import React from 'react'
import './Total.css'


function Total() {
    return (
        <div>
            <div className="total">
                <div>
                    <p>
                        Here we can have/write addtional notes for the client 
                        to get a better understanding of this invoice
                    </p>
                </div>

                <div>
                    <p>Total Due</p>
                    <h1> &#8358; 750,000.00 </h1>
                </div>
            </div>
        </div>
    )
}

export default Total
