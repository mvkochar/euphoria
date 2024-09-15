import React from 'react'
import './css/Checkout.css'
import ProductsList from '../compontents/ProductsList/ProducttsList'

const Checkout = () => {
  const subtotal = ()=> {
    let res = 0;
    
    for (let i = 0; i < 3; i++ ) {
      res += parseFloat(ProductsList[i].price) 
    }

    return res
  }

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
          <div className="checkout-bl-divider"></div>
          <h3 className="checkout-bl-title">Shipping Method</h3>
          <div className="shippping-method-wr">
            <div>
              <div className="shipping-method-title">Arrives by Monday, June 7</div>
              <div className="shipping-method-delivery d-f jc-sb">
                <div>
                  <div className="shipping-method-title">Delivery Charges</div>
                  <div className="checkout-bl-desc">Additional fess may apply</div>
                </div>
                <div className="shipping-method-title">$5.00</div>
              </div>
            </div>
          </div>
          <div className="checkout-bl-divider"></div>
          <h3 className="checkout-bl-title">Payment Method</h3>
          <p className="checkout-bl-desc">All transactions are secure and encrypted.</p>
          <form action="" className='checkout-payment-fm'>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="paymentMethod" id="creditCard" />
              <div>
                <label htmlFor="creditCard">Credit Card</label>
                <p className="checkout-bl-desc">We accept all major credit cards.</p>
              </div>
            </div>
            <div className="payment-methods d-f">
              <div><img src="/images/payment1.png" alt="payment1" /></div>
              <div><img src="/images/payment2.png" alt="payment2" /></div>
              <div><img src="/images/payment3.png" alt="payment3" /></div>
              <div><img src="/images/payment4.png" alt="payment4" /></div>
            </div>
            <div className="chekout-credit-card d-f">
              <input type="text" name='cardNumber' placeholder='Card number' />
              <input type="text" name='cardName' placeholder='Name of card' />
              <input type="text" name='expirationDate' placeholder='Expiration date (MM/YY)' />
              <div className="pwd-wr d-f jc-sb">
                <input type="password" name="code" placeholder='Security Code' />
                <button type="button" className='btn-clear d-b'><img src="/images/eye.png" alt="eye" /></button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="paymentMethod" id="cash" />
              <div>
                <label htmlFor="cash">Cash on delivery</label>
                <p className="checkout-bl-desc">Pay with cash upon delivery.</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="paymentMethod" id="paypal" />
              <label htmlFor="paypal">Paypal</label>
            </div>
          </form>
          <a href="" className="checkout-pay-link">Pay Now</a>
        </div>
        <div className="checkout-order">
          <h2 className="checkout-order-title">Order Summary</h2>
          <div className="chechout-order-item d-f jc-sb align-center">
            <div><img src={ProductsList[0].image} alt="product" width={63} /></div>
            <div>
              <div className="order-item-title">{ProductsList[0].title}</div>
              <div className="order-item-color"><span>Color:</span> Yellow</div>
            </div>
            <div className="order-item-price">{ProductsList[0].price}</div>
          </div>
          <div className="chechout-order-item d-f jc-sb align-center">
            <div><img src={ProductsList[1].image} alt="product" width={63} /></div>
            <div>
              <div className="order-item-title">{ProductsList[1].title}</div>
              <div className="order-item-color"><span>Color:</span> Levender</div>
            </div>
            <div className="order-item-price">{ProductsList[1].price}</div>
          </div>
          <div className="chechout-order-item d-f jc-sb align-center">
            <div><img src={ProductsList[2].image} alt="product" width={63} /></div>
            <div>
              <div className="order-item-title">{ProductsList[2].title}</div>
              <div className="order-item-color"><span>Color:</span> Black</div>
            </div>
            <div className="order-item-price">{ProductsList[2].price}</div>
          </div>
          <div className="checkout-order-subtotal">
             <div className="d-f jc-sb">
              <div className="subtotal-title">Subtotal <span>( 3 items )</span></div>
              <div className="subtotal-title">${subtotal().toFixed(2)}</div>
             </div>
             <div className="d-f jc-sb" style={{marginTop: "15px"}}>
              <div className='subtotal-title'>Savings</div>
              <div className='subtotal-title'>-$30.00</div>
             </div>
             <div className="divider"></div>
             <div className="d-f jc-sb">
              <div className='subtotal-title'>Shipping</div>
              <div className='subtotal-title'>-$5.00</div>
             </div>
             <div className="divider"></div>
             <div className="d-f jc-sb">
              <div className=''>Total</div>
              <div className='subtotal-title'>${(subtotal()-parseFloat("30.00") - parseFloat('5.00')).toFixed(2)}</div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout