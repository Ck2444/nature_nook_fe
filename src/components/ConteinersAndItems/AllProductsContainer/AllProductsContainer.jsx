import React from 'react'
import { useSelector } from 'react-redux'
import DiscoutntForm from '../../FilterForms/DiscoutntForm/DiscoutntForm'
import FilterForm from '../../FilterForms/FilterForm/FilterForm'
import SortForm from '../../FilterForms/SortForm/SortForm'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import s from '../AllProductsContainer/AllProductsContainer.module.css'

export default function AllProductsContainer() {

    const all_products_state = useSelector(state => state.allproducts)

    return (
        <div>
            <div className={s.filter}>
                <FilterForm />
                <DiscoutntForm />
                <SortForm />
            </div>

            <ProductsContainer products={all_products_state} category_show={true} />

        </div>
    )
}

