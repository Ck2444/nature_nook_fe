import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../../store/reducers/cartReducer'
import s from '../SingleProductCard/SingleProductCard.module.css'

export default function SingleProductCard({ id, title, image, price, description, discont_price }) {
    const discountedPercentage = discont_price > 0 ? Math.round((price - discont_price) / price * 100) : 0;

    const dispatch = useDispatch()

    return (
        <div >
            <p className={s.title}>{title}</p>
            <div className={s.main_card}>
                <img src={`https://project-fe-buiu.onrender.com${image}`} alt={title} />


                <div className={s.productInfo}>
                    {discont_price > 0 ? (
                        <div className={s.discountInfo}>
                            <p>
                                <span className={s.priceText}>{discont_price}</span>
                                <span className={s.currencySymbol}>$</span>
                            </p>
                            <p className={s.old_price}>{price}$</p>
                            <p className={s.discount}>
                                -{discountedPercentage}<span className={s.discountSymbol}>%</span>
                            </p>

                        </div>
                    ) : (
                        <div className={s.discountInfo}>
                            <p>
                                <span className={s.priceText}>{price}</span>
                                <span className={s.currencySymbol}> $</span>
                            </p>
                        </div>
                    )}

                    <div
                        className={s.cart_btn}
                        onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
                    >To cart</div>
                    <div className={s.dotted_line}></div>
                    <p className={s.descriptionLabel}>Description</p>
                    <p className={s.text_description}> {description}</p>

                </div>
            </div>


        </div>
    )
}
