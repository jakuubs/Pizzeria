const initialState = {
    loading: true,
    products: [],
    error: null
}

const saucesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_SAUCES_LOADING":
            return {
                ...state,
                loading: true
            }
        case "FETCH_SAUCES_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case "FETCH_SAUCES_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default saucesReducer;