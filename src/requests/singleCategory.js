import { loadAllproductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer"



export const getProductsByCategory = id => {
    return dispatch => {
        fetch(`https://project-fe-buiu.onrender.com/categories/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductsByCategoryAction(json)))


    }
}

export const getAllproducts = (dispatch) => {
    fetch('https://project-fe-buiu.onrender.com/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllproductsAction(json)))
}






//return dispatch => {}
//.then(json => dispatch(loadProductsByCategoryAction(json.category)))