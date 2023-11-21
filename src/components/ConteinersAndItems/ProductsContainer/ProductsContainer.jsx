import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import s from '../ProductsContainer/ProductsContainer.module.css'


export default function ProductsContainer({ products, category_show }) {

    return (
        <div className={s.container}>
            {
                products
                    .filter(el => el.show_product)
                    .map(el => <ProductCard key={el.id} {...el} category_show={category_show} />)
            }

        </div>
    )
}