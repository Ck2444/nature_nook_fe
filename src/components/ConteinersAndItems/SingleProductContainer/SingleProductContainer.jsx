import React from 'react'
import SingleProductCard from '../SingleProductCard/SingleProductCard'
import s from '../SingleProductContainer/SingleProductContainer.module.css'

export default function SingleProductContainer({ product }) {
    return (
        <div className={s.main_container}>
            {
                product.map(el => <SingleProductCard key={el.id} {...el} />)
            }
        </div>
    )
}
