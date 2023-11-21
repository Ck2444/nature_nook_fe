import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../../store/reducers/cartReducer';
import s from './CartItem.module.css'
import { AiFillMinusSquare } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

export default function CartItem({ id, title, price, count, image, discont_price }) {
    const dispatch = useDispatch();

    const final_price = discont_price ? discont_price : price
    // const show_price = price ? `${price}$` : null

    const show_price = discont_price ? `${price}$` : ''

    return (
        <div className={s.cart}>
            <div className={s.productCard}>
                <img src={`https://project-fe-buiu.onrender.com${image}`} alt={title} />
                <div className={s.title_container}>
                    <p className={s.main_title}>{title}</p>
                    <div className={s.adjusterContainer}>
                        <div onClick={() => dispatch(decrementCountAction(id))}><AiFillMinusSquare className={s.button_decrease} /></div>


                        <p>{count}</p>
                        <AiOutlinePlus onClick={() => dispatch(incrementCountAction(id))} className={s.button_increase} />

                    </div>
                </div >

                <div className={s.price_container}>
                    <p>
                        <span className={s.priceText} >{final_price * count}</span>
                        <span className={s.currencySymbol}>$</span>
                    </p>
                    <p className={s.showPrice} >{show_price}</p>
                </div>
                <span onClick={() => dispatch(deleteFromCartAction(id))} className={s.delete_cart}><RxCross1 /></span>
            </div >



            {/* ---------------- */}




            < div className={s.dotted_line} ></ div >
        </div >
    )
}

