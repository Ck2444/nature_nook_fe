import React from 'react'
import s from '../MainPage/MainPage.module.css'
import img from '../../../media/image_2.png'
import { NavLink } from 'react-router-dom'
import img2 from '../../../media/image_3.png'
import { useSelector } from 'react-redux'
import CategoryCard from '../../ConteinersAndItems/CategoryCard/CategoryCard'
import ProductsContainer from '../../ConteinersAndItems/ProductsContainer/ProductsContainer'
import DwarfForm from '../../ConteinersAndItems/DwarfForm/DwarfForm'



export default function MainPage() {


    const categories_state = useSelector(state => state.categeories)

    const slicedArray = categories_state.slice(0, 4);

    // --- Sale---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
        }
    }

    const product_sale = useSelector(state => state.allproducts);
    const discount_products = product_sale.filter(el => el.discont_price !== null);

    shuffleArray(discount_products); // Перемешиваем массив
    const randomSaleArray = discount_products.slice(0, 3);

    // const product_sale = useSelector(state => state.allproducts);

    // const discount_products = product_sale.filter(el => el.discont_price !== null)

    // const slicedSaleArray = discount_products.slice(0, 3);





    return (
        <div>

            <section className={s.block_section}>
                <div className={s.block_content} >
                    <h2>Sale </h2>
                    <p>New season</p>
                    <NavLink to='/all_sales' className={s.sale_button}>Sale</NavLink>
                </div>
                <img src={img} alt="image2" className={s.bush_img} />

            </section>


            <div className={s.catalog}>
                <p>Catalog</p>
                <NavLink to='/categories'>All categories </NavLink>
            </div>
            <div className={s.sliced_array}>
                {
                    slicedArray.map(el => <CategoryCard key={el.id} {...el} />)
                }
            </div>


            <section className={s.dwarf_section} >
                <img src={img2} alt="dwarf_image" className={s.draw_img} />
                <div className={s.draw_block_content}>
                    <h2><span className={s.large_text}>5% off</span><br /><span className={s.small_text}>the first order</span></h2>

                    <DwarfForm />

                </div>
            </section>

            <div className={s.sale_style}>Sale</div>

            <div>
                <ProductsContainer products={randomSaleArray} />
            </div>

        </div>
    )
}
