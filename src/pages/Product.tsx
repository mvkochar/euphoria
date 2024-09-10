import React from 'react'
import './css/Product.css'
import { useParams } from 'react-router-dom'
import ProductsList from '../compontents/ProductsList/ProducttsList'

const Product = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentProduct = ProductsList[index]

    const [size, setSize] = React.useState(4)
    const [color, setColor] = React.useState(1)

    return (
        <>
            <main className='product-main d-f align-center'>
                <div><img src={currentProduct.image} alt="product" width={520} /></div>
                <div>
                    <h1 className="product-main-title">{currentProduct.title}</h1>
                    <h5 className="product-main-brand">{currentProduct.brand}</h5>
                    <div className="sizes-title">Select Size</div>
                    <div className="sizes-box d-f">
                        <div className={size === 1 ? "sizes-item sizes-item__active" : "sizes-item"} onClick={()=>setSize(1)}>XS</div>
                        <div className={size === 2 ? "sizes-item sizes-item__active" : "sizes-item"} onClick={()=>setSize(2)}>S</div>
                        <div className={size === 3 ? "sizes-item sizes-item__active" : "sizes-item"} onClick={()=>setSize(3)}>M</div>
                        <div className={size === 4 ? "sizes-item sizes-item__active" : "sizes-item"} onClick={()=>setSize(4)}>L</div>
                        <div className={size === 5 ? "sizes-item sizes-item__active" : "sizes-item"}  onClick={()=>setSize(5)}>XL</div>
                    </div>
                    <div className="colors-title">Colors Available </div>
                    <div className="colors-box d-f align-center">
                        <div className={color=== 1 ? "colors-item-outer": "op-0"}> 
                            <div className="colors-item" onClick={()=>setColor(1)}></div>
                        </div>
                        <div className={color=== 2 ? "colors-item-outer": "op-0"}> 
                            <div className="colors-item" onClick={()=>setColor(2)}></div>
                        </div>
                        <div className={color=== 3 ? "colors-item-outer": "op-0"}> 
                            <div className="colors-item" onClick={()=>setColor(3)}></div>
                        </div>
                        <div className={color=== 4 ? "colors-item-outer": "op-0"}> 
                            <div className="colors-item" onClick={()=>setColor(4)}></div>
                        </div>
                    </div>
                    <div className="product-main-action d-f">
                        <button type="button" className='product-main-btn'>Add to cart</button>
                        <div className="product-main-price">${currentProduct.price}</div>
                    </div>
                    <div className="product-info d-f jc-sb">
                        <div className="product-info-item d-f align-center">
                            <div><img src="/images/product-info1.png" alt="product-info1" /></div>
                            <div className="info-item-title">Secure payment</div>
                        </div>
                        <div className="product-info-item d-f align-center">
                            <div><img src="/images/product-info2.png" alt="product-info2" /></div>
                            <div className="info-item-title">Size & Fit</div>
                        </div>
                        <div className="product-info-item d-f align-center">
                            <div><img src="/images/product-info3.png" alt="product-info3" /></div>
                            <div className="info-item-title">Free shipping</div>
                        </div>
                        <div className="product-info-item d-f align-center">
                            <div><img src="/images/product-info4.png" alt="product-info4" /></div>
                            <div className="info-item-title">Free Shipping & Returns</div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Product