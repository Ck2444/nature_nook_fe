import { loadAllCategoriesAction } from '../store/reducers/categoriesReducer'


export const getAllcategories = (dispatch) => {
    fetch('https://project-fe-buiu.onrender.com/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}