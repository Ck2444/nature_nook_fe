import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProductsAction } from '../../../store/reducers/allProductsReducer';
import s from '../FilterForm/FilterForm.module.css'

export default function FilterForm() {

    const dispatch = useDispatch();
    const submit = e => {
        e.preventDefault();
        const { min, max } = e.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(filterProductsAction({ min_value, max_value }))
    }

    return (
        <form className={s.price} onSubmit={submit}>
            <p className={s.title}>Price</p>
            <input type='' placeholder='min' name='min' />
            <input type='' placeholder='max' name='max' />
            <button type='submit'>Filter</button>
        </form>

    )
}
