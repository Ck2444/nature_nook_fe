import { loadSingleProductAction } from "../store/reducers/singleProductReducer"



export const getSingleProduct = id => {
    return dispatch => {
        fetch(`https://project-fe-buiu.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }
}

export const getDiscount = new_product => {
    fetch('https://project-fe-buiu.onrender.com/sale/send', {

        method: 'POST',
        body: JSON.stringify({ new_product })

    })
        .then(res => res.json())
        .then(json => console.log(json, 'Congratulations! You have got your disount 5%'))
}

export const sendOrder = new_product => {
    fetch('https://project-fe-buiu.onrender.com/order/send', {
        method: 'POST',
        body: JSON.stringify({ new_product })
    })
        .then(res => res.json())
        .then(json => console.log(json, 'Congratulations! Your new order added'))
}
