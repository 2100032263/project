import React from 'react'
import "./purchaseitemstyles.css"
import {NavLink} from 'react-router-dom'


function buy() {
  return (
        <div className='forgot'>
            <form>
                <label>Card Number</label>
                <input type='card number'></input>
                <label>Card Expiry Date</label>
                <input type='card expiry date'></input>
                <label>CVV</label>



                <NavLink to="/QandA" className='btn'>Next</NavLink>

            </form>
        </div>
  )
}

export default buy