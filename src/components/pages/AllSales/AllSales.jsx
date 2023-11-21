import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../ConteinersAndItems/ProductsContainer/ProductsContainer';
import SortFormForSales from '../../FilterForms/SortFormForSales/SortFormForSales';

export default function AllSales() {
    const product_sale = useSelector(state => state.allproducts);

    const discount_products = product_sale.filter(el => el.discont_price !== null)

    const h1Styles = {
        fontWeight: 700,
        lineHeight: "130%",
        letterSpacing: "1.2px",
        marginLeft: '31px'
    };

    return (

        <div>
            <h1 style={h1Styles}>All Sales</h1>
            <SortFormForSales />
            <ProductsContainer products={discount_products} />
        </div>
    )
}
