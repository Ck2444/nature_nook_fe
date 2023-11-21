import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendOrder } from '../../../requests/singleProducts_req';

import s from './CartPhoneNumber.module.css'




export default function CartPhoneNumber({ price, discont_price }) {

    const cart_state = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const [phoneNumber, setPhoneNumber] = useState('');


    const total = cart_state.reduce((acc, item) => {
        const itemFinalPrice = item.discont_price ? item.discont_price : item.price;
        return acc + itemFinalPrice * item.count;
    }, 0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const phonePattern = /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/;

        if (!phonePattern.test(phoneNumber)) {
            alert('Please, enter valid phoneNumber 01.......');
            return;
        } else {
            alert('Congratulations! Your new order added')
        }

        //   

        sendOrder()
        e.target.reset()
    };



    return (
        <div className={s.order_details}>
            <p className={s.text}>Order details</p>
            <div className={s.total}>
                <p className={s.total_p}>Total </p>
                <div className={s.sum}>
                    <span className={s.total_sum}>{total.toFixed(2)}</span>
                    <span className={s.currencySymbol}>$</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={s.phoneNumberForm}>
                <input
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button type="submit">Order</button>
            </form>
        </div>
    )
}
