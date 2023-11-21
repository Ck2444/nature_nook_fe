import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard/CategoryCard'
import s from '../CategoriesContainer/CategoriesContainer.module.css'


export default function CategoriesContainer() {
    const categories_state = useSelector(state => state.categeories)
    return (
        <div className={s.main_container}>
            <h1>Categories</h1>
            <div className={s.container}>
                {
                    categories_state.map(el => <CategoryCard key={el.id} {...el} />)
                }
            </div>

        </div>

    )
}
