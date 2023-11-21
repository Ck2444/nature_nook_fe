const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const GET_DISCOUT_PRODUCTS = 'GET_DISCOUT_PRODUCTS';

export const loadAllproductsAction = payload => ({
    type: LOAD_ALL_PRODUCTS, payload
})
export const sortProductsAction = payload => ({
    type: SORT_PRODUCTS, payload
})
export const filterProductsAction = payload => ({
    type: FILTER_PRODUCTS, payload
})

export const discoutnProductsAction = payload => ({
    type: GET_DISCOUT_PRODUCTS, payload
})

export const productsReducer = (state = [], action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({ ...el, show_product: true }))
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            return [...state].sort((a, b) => a.title.localeCompare(b.title))
        } else if (action.payload === 'price_asc') {
            return [...state].sort((a, b) => {
                const aFinalPrice = a.discont_price ? a.discont_price : a.price;
                const bFinalPrice = b.discont_price ? b.discont_price : b.price;
                return aFinalPrice - bFinalPrice;
            })
        } else if (action.payload === 'price_desc') {
            return [...state].sort((a, b) => {
                const aFinalPrice = a.discont_price ? a.discont_price : a.price;
                const bFinalPrice = b.discont_price ? b.discont_price : b.price;
                return bFinalPrice - aFinalPrice;
            })
        } else if (action.payload === 'default') {
            return [...state].sort((a, b) => a.id - b.id)
        }
    }

    else if (action.type === FILTER_PRODUCTS) {
        const { min_value, max_value } = action.payload;

        return state.map((el) => {
            if ((el.discont_price ? el.discont_price : el.price) >= min_value && (el.discont_price ? el.discont_price : el.price) <= max_value)
            // if ( el.price >= min_value && el.price  <= max_value) 
            {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el;
        })

    } else if (action.type === GET_DISCOUT_PRODUCTS) {
        if (action.payload) {
            return state.map(el => {
                if (el.discont_price === null) {
                    el.show_product = false

                }
                return el
            })
        } else {
            return state.map(el => {
                el.show_product = true;
                return el
            })
        }
    }

    else {
        return state
    }
}