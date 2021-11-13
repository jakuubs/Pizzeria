const initialState = {
    loading: true,
    products: [],
    error: null
}

const pizzasReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_PIZZAS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PIZZAS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case "FETCH_PIZZAS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default pizzasReducer;