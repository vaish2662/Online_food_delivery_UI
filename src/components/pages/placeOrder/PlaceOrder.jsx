import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multifields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='street' />
          <div className="multifields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multifields">
            <input type="text" placeholder='Pin Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone Number' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
            </div>
            <button >PROCEED TO PAYMENT</button>
          </div>

        </div>
      </form>
    </>
  )
}

export default PlaceOrder
