import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../../requests/singleProducts_req';
import SingleProductContainer from '../../ConteinersAndItems/SingleProductContainer/SingleProductContainer';

export default function SingleProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => dispatch(getSingleProduct(id)), [dispatch]);

    const single_product_page = useSelector(state => state.singleproduct)
    return (
        <div>
            <SingleProductContainer product={single_product_page} />
        </div>
    )
}
