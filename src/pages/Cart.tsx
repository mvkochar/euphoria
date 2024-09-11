import React from 'react'
import './css/Cart.css'
import ProductsList from '../compontents/ProductsList/ProducttsList'
import ProductsItem from '../compontents/ProductsItem/ProductsItem'

const MIN_PRODUCTS = 1
const MAX_PRODUCTS = 100 

const Cart = () => {

    const [productOneCount, setProductOneCount] = React.useState(1)
    const incrementProductOne = () => {
        setProductOneCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }
    const decrementProductOne = () => {
        setProductOneCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const [productTwoCount, setProductTwoCount] = React.useState(1)
    const incrementProductTwo = () => {
        setProductTwoCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }
    const decrementProductTwo = () => {
        setProductTwoCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const [productThreeCount, setProductThreeCount] = React.useState(1)
    const incrementProductThree = () => {
        setProductThreeCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }
    const decrementProductThree = () => {
        setProductThreeCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    return (
        <>
            <h1 className="cart-title">Product Cart</h1>
            <table className='cart-details'>
                <thead>
                    <tr>
                        <th>Product Details</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Shipping</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="cart-product-info d-f">
                                <img src={ProductsList[0].image} alt="product" width={105} />
                                <div>
                                    <div className='cart-product-title'>{ProductsList[0].title}</div>
                                    <div className='cart-product-color'>Color : Yellow</div>
                                    <div className='cart-product-size'>Size : M</div>
                                </div>
                            </div>
                        </td>
                        <td className='cart-product-price'>${ProductsList[0].price}</td>
                        <td>
                            <div className="cart-product-quantity d-f jc-sb align-center">
                                <button
                                    type='button' className='btn-clear d-b'
                                    onClick={incrementProductOne}
                                    disabled={productOneCount === MIN_PRODUCTS ? true : false}
                                >
                                    -
                                </button>
                                <div>{productOneCount}</div>
                                <button type='button' className='btn-clear d-b'
                                    onClick={decrementProductOne}
                                    disabled={productOneCount >  MAX_PRODUCTS ? true : false}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='cart-product-shipping'>Shipping</td>
                        <td className='cart-product-price'>${(parseFloat(ProductsList[0].price) * productOneCount).toFixed(2)}</td>
                        <td>
                            <button type="button" className='btn-clear'>
                                <img src="/images/deleteicon.png" alt="deleteicon" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-product-info d-f">
                                <img src={ProductsList[1].image} alt="product" width={105} />
                                <div>
                                    <div className='cart-product-title'>{ProductsList[1].title}</div>
                                    <div className='cart-product-color'>Color : Levender</div>
                                    <div className='cart-product-size'>Size : XXL</div>
                                </div>
                            </div>
                        </td>
                        <td className='cart-product-price'>${ProductsList[1].price}</td>
                        <td>
                            <div className="cart-product-quantity d-f jc-sb align-center">
                                <button
                                    type='button' className='btn-clear d-b'
                                    onClick={incrementProductTwo}
                                    disabled={productTwoCount === MIN_PRODUCTS ? true : false}
                                >
                                    -
                                </button>
                                <div>{productTwoCount}</div>
                                <button type='button' className='btn-clear d-b'
                                    onClick={decrementProductTwo}
                                    disabled={productTwoCount >  MAX_PRODUCTS ? true : false}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='cart-product-shipping'>Shipping</td>
                        <td className='cart-product-price'>${(parseFloat(ProductsList[1].price) * productTwoCount).toFixed(2)}</td>
                        <td>
                            <button type="button" className='btn-clear'>
                                <img src="/images/deleteicon.png" alt="deleteicon" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-product-info d-f">
                                <img src={ProductsList[2].image} alt="product" width={105} />
                                <div>
                                    <div className='cart-product-title'>{ProductsList[2].title}</div>
                                    <div className='cart-product-color'>Color : Black</div>
                                    <div className='cart-product-size'>Size : XXL</div>
                                </div>
                            </div>
                        </td>
                        <td className='cart-product-price'>${ProductsList[2].price}</td>
                        <td>
                            <div className="cart-product-quantity d-f jc-sb align-center">
                                <button
                                    type='button' className='btn-clear d-b'
                                    onClick={incrementProductThree}
                                    disabled={productThreeCount === MIN_PRODUCTS ? true : false}
                                >
                                    -
                                </button>
                                <div>{productThreeCount}</div>
                                <button type='button' className='btn-clear d-b'
                                    onClick={decrementProductThree}
                                    disabled={productThreeCount >  MAX_PRODUCTS ? true : false}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='cart-product-shipping'>Shipping</td>
                        <td className='cart-product-price'>${(parseFloat(ProductsList[2].price) * productThreeCount).toFixed(2)}</td>
                        <td>
                            <button type="button" className='btn-clear'>
                                <img src="/images/deleteicon.png" alt="deleteicon" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Cart