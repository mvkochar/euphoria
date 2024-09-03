import React from 'react'
import classes from "./CategoriesItem.module.css"

type CategoriesItemProps = {
    image: string
    title: string
    subtitle: string
}

const CategoriesItem = ({ image, title, subtitle }: CategoriesItemProps) => {
    return (
        <div className={classes.item}>
           <div><img src={image} alt="category" /></div>
           <div className={classes.item_info}>
            <div>
                <h3 className={classes.item_title}>{title}</h3>
                <h4 className={classes.item_subtitle}>{subtitle}</h4>
            </div>
            <a href="" className="d-b"><img src="/images/arrow-right.png" alt="arrow-right" /></a>
           </div>
        </div>
    )
}

export default CategoriesItem