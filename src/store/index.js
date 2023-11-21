import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/allProductsReducer';
import { cartReducer } from './reducers/cartReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';


const rootReducer = combineReducers({
    categeories: categoriesReducer,

    allproducts: productsReducer,
    singleproduct: singleProductReducer,
    cart: cartReducer,
    productsByCategory: productsByCategoryReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk));

//productsByCategory