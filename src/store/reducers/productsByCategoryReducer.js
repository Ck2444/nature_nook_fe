const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY'; // Fixed typo here
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS'; // Fixed typo here

export const loadProductsByCategoryAction = payload => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload });

export const sortProductsAction = payload => ({
    type: SORT_PRODUCTS, payload
});
export const filterProductsAction = payload => ({
    type: FILTER_PRODUCTS, payload
});
export const discountProductsAction = payload => ({  // Fixed typo here
    type: GET_DISCOUNT_PRODUCTS, payload
});

const initialState = {
    data: [],
    category: null,
};

export const productsByCategoryReducer = (state = initialState, action) => {  // Fixed typo here
    switch (action.type) {
        case LOAD_PRODUCTS_BY_CATEGORY: {
            const { data, category } = action.payload;
            const data_show_product = data.map(el => ({ ...el, show_product: true }));
            return { ...state, category, data: data_show_product };
        }
        case SORT_PRODUCTS: {
            const sortedData = [...state.data];
            if (action.payload === 'title') {
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (action.payload === 'price_asc') {
                sortedData.sort((a, b) => {
                    const aFinalPrice = a.discont_price ? a.discont_price : a.price;
                    const bFinalPrice = b.discont_price ? b.discont_price : b.price;
                    return aFinalPrice - bFinalPrice;
                });
            } else if (action.payload === 'price_desc') {
                sortedData.sort((a, b) => {
                    const aFinalPrice = a.discont_price ? a.discont_price : a.price;
                    const bFinalPrice = b.discont_price ? b.discont_price : b.price;
                    return bFinalPrice - aFinalPrice;
                });
            } else if (action.payload === 'default') {
                sortedData.sort((a, b) => a.id - b.id);
            }
            return { ...state, data: sortedData };
        }
        case FILTER_PRODUCTS: {
            const { min_value, max_value } = action.payload;
            const filteredData = state.data.map(el => {
                if ((el.discont_price ? el.discont_price : el.price) >= min_value && (el.discont_price ? el.discont_price : el.price) <= max_value)
                // if ( el.price >= min_value && el.price  <= max_value) 
                {
                    el.show_product = true;
                } else {
                    el.show_product = false;
                }
                return el;
            });
            return { ...state, data: filteredData };
        }
        case GET_DISCOUNT_PRODUCTS: {
            const discountedData = state.data.map(el => {
                if (action.payload) {
                    if (el.discont_price === null) {

                        el.show_product = false;
                    }
                    return el
                } else {
                    el.show_product = true;
                }
                return el;
            });
            return { ...state, data: discountedData };
        }
        default:
            return state;
    }
};
/*
else if (action.type === GET_DISCOUNT_PRODUCTS){
        if (action.payload) {
            return state.map(el => {
              if(!el.discont_price){
                el.show_product = false
              }
              return el
            })
          } else {
            return state.map( el => {
              el.show_product = true
              return el
            })
          }
          */