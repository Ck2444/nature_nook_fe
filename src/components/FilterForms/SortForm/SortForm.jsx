import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../../../store/reducers/allProductsReducer'
import s from '../SortForm/SortForm.module.css'

export default function SortForm() {

    const dispatch = useDispatch()

    const order = e => dispatch(sortProductsAction(e.target.value))

    return (
        <label className={s.sorted}>
            <p className={s.title}>Sorted</p>
            <select onInput={order}>
                <option value='default'>by default</option>
                <option value='title'>By alphabet A-Z</option>
                <option value='price_asc'>By price ASC</option>
                <option value='price_desc'>By price DESC</option>
            </select>
        </label>
    )
}
