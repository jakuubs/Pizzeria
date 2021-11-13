const initialState = {
    loading: true,
    products: [],
    error: null
}

const ingredientsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_INGREDIENTS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "FETCH_INGREDIENTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case "FETCH_INGREDIENTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ingredientsReducer;