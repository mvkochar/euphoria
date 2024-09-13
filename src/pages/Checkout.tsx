import React from 'react'
import './css/Checkout.css'

const Checkout = () => {
  return (
    <>
      <div className="checkout-top-divider"></div>
      <div className="checkout-wr d-f jc-sb">
        <div>
          <h1 className="home-bl-title">Checkout</h1>
          <h3 className="checkout-bl-title checkout-billing-title">Billing Details</h3>
          <form action="" className="checkout-billing-fm">
            <div className="input-box d-f">
              <div className="input-bl d-f">
                <div>
                  <label htmlFor="billingFname">First Name*</label>
                  <input type="text" name='billingFname' id='billingFname' placeholder='First Name' />
                </div>
                <div>
                  <label htmlFor="billingLname">Last Name*</label>
                  <input type="text" name='billingLname' id='billingLname' placeholder='Last Name' />
                </div>
              </div>
              <div className="input-bl d-f">
                <div>
                  <label htmlFor="billingCountry">Country / Region*</label>
                  <input type="text" name='billingCounry' id='billingCountry' placeholder='Country / Region' />
                </div>
                <div>
                  <label htmlFor="billingCompany">Company Name</label>
                  <input type="text" name='billingCompany' id='billingCompany' placeholder='Company (optional)' />
                </div>
              </div>
              <div className="input-bl d-f">
                <div>
                  <label htmlFor="billingStreet">Street Address*</label>
                  <input type="text" name='billingStreet' id='billingStreet' placeholder='House number and street name' />
                </div>
                <div>
                  <label htmlFor="billingApt">Apt, suite, unit</label>
                  <input type="text" name='billingApt' id='billingApt' placeholder='apartment, suite, unit, etc. (optional)' />
                </div>
              </div>
              <div className="input-bl d-f input-bl-postal">
                <div>
                  <label htmlFor="billingCity">City*</label>
                  <input type="text" name='billingCity' id='billingCity' placeholder='Town / City' />
                </div>
                <div>
                  <label htmlFor="billingState">State*</label>
                  <div className="select-bl">
                    <select name="billingState" id="billingState">
                      <option value="0">State</option>
                      <option value="1">California</option>
                      <option value="2">New York</option>
                      <option value="3">Colorado</option>
                      <option value="4">Florida</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="billingPostal">Postal Code*</label>
                  <input type="text" name='billingPostal' id='billingPostal' placeholder='Postal Code' />
                </div>
              </div>
              <div>
                <label htmlFor="billingPhone">Phone*</label>
                <input type="tel" name="billingPhone" id="billingPhone" placeholder='Phone' />
              </div>
            </div>
            <button type="button">Continue to delivery</button>
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="billingSave" id="billingSave" />
              <label htmlFor="billingSave">Save my information for a faster checkout</label>
            </div>
          </form>
          <div className="checkout-bl-divider"></div>
          <h3 className="checkout-bl-title">Shipping Address</h3>
          <p className="checkout-bl-desc">
            Select the address that matches your card or payment method.
          </p>
          <form action="" className="checkout-address-fm">
            <div className="radio-bl d-f align-center">
              <input type="radio" name="address" id="same" />
              <label htmlFor="same">Same as Billing address</label>
            </div>
            <div className="divider"></div>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="address" id="different" />
              <label htmlFor="different">Use a different shipping address</label>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout