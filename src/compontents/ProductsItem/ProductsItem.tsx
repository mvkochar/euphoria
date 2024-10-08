import React from 'react'
import classes from './ProductsItem.module.css'
import { Link, useParams } from 'react-router-dom'

type ProductsItemProps = {
    id: number
    image: string
    title: string
    brand: string
    price: string
}

const ProductsItem = ({ id, image, title, brand, price }: ProductsItemProps) => {

    return (
        <div className={classes.item}>
            <div><Link to={`/product/${id}`}> <img src={image} alt="product" /></Link></div>
            <button className={classes.item_btn}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71977 2.71206C6.34495 1.10986 4.05234 0.678871 2.32979 2.14601C0.607228 3.61314 0.364716 6.06612 1.71745 7.80131C2.84216 9.244 6.24591 12.2867 7.36148 13.2716C7.48629 13.3817 7.54869 13.4368 7.62148 13.4585C7.68502 13.4774 7.75453 13.4774 7.81806 13.4585C7.89085 13.4368 7.95326 13.3817 8.07807 13.2716C9.19363 12.2867 12.5974 9.244 13.7221 7.80131C15.0748 6.06612 14.8619 3.59771 13.1098 2.14601C11.3576 0.694304 9.0946 1.10986 7.71977 2.71206Z" stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div className={classes.item_info}>
                <div>
                    <h3 className={classes.item_title}>{title}</h3>
                    <h5 className={classes.item_brand}>{brand}</h5>
                </div>
                <div className={classes.item_price}>${price}</div>
            </div>
        </div>
    )
}

export default ProductsItem