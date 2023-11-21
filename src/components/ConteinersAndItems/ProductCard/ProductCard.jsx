import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../../store/reducers/cartReducer';
import s from '../ProductCard/ProductCard.module.css'

export default function ProductCard({ id, title, image, price, discont_price, category_show, categoryId }) {
    const discountedPercentage = discont_price > 0 ? Math.round((price - discont_price) / price * 100) : 0;

    const dispatch = useDispatch()

    const categories_state = useSelector(state => state.categeories)

    const category_name = categories_state.find(el => el.id === categoryId)

    return (


        <div className={s.product_card}>
            <Link to={`/products/${id}`}>
                <img src={`https://project-fe-buiu.onrender.com${image}`} alt={title} />

                {discont_price ? (
                    <div className={s.discountInfo}>
                        <p>
                            <span className={s.priceText}>{discont_price}</span>
                            <span className={s.currencySymbol}>$</span>
                        </p>
                        <p className={s.old_price}>{price}$</p>
                        <p className={s.discount}>-{discountedPercentage}%</p>

                    </div>
                ) : (
                    <div className={s.discountInfo}>
                        <p>
                            <span className={s.priceText}>{price}</span>
                            <span className={s.currencySymbol}> $</span>
                        </p>
                    </div>

                )}

                <p className={s.title}>{title}</p>

                <Link to={`/categories/${categoryId}`}>

                    {
                        category_show ? <p className={s.category}>Category: {category_name && category_name.title}</p> : ''
                    }
                </Link>


            </Link>

            <div
                className={s.add_btn}
                onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
            >
                Add to cart
            </div>
        </div>




    )
}
