import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import s from '../Cart/Cart.module.css'
import { NavLink } from 'react-router-dom'
import CartPhoneNumber from '../CartPhoneNumber/CartPhoneNumber'
import { clearCartAction } from '../../../store/reducers/cartReducer'


export default function Cart() {


    const cart_state = useSelector(state => state.cart)

    useEffect(() => {
        localStorage.setItem('local_cart', JSON.stringify(cart_state))
    }, [cart_state]);

    const dispatch = useDispatch();


    return (
        <div className={s.cart_container}>
            <p className={s.shopping_cart}>Shopping cart</p>

            <div className={s.checkoutContainer}>
                <div className={s.shopping_cart_container}>
                    <NavLink to='/' className={s.back_to_the_store}>Back to the store ></NavLink>
                    <div className={s.dotted_line}></div>

                    {
                        cart_state.length > 0
                            ? cart_state.map((el) => <CartItem key={el.id} {...el} />)
                            : <h3 className={s.empty}>Your cart is empty.</h3>

                    }
                    <div
                        className={s.clear_btn}
                        onClick={() => dispatch(clearCartAction())}
                    >
                        Clear cart
                    </div>
                </div>

                {/* ------------- */}
                <CartPhoneNumber />





            </div>




        </div>
    )
}
