import React from 'react'
import s from '../CategoryCard/CategoryCard.module.css'
import { Link } from 'react-router-dom'


export default function CategoryCard({ id, title, image }) {
    return (
        <Link to={`/categories/${id}`}>
            <div className={s.category_card}>
                <img src={`https://project-fe-buiu.onrender.com${image}`} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    )
}
