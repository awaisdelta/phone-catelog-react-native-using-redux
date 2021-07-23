import { fetchProductsErrorAction, fetchProductsPendingAction, initPhoneListAction, selectPhoneAction } from "../../common/strings"

const initialState = {
    phoneList: null,
    selected: null,
    error: false,
    pending: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchProductsPendingAction:
            return {
                ...state,
                pending: true
            }
        case initPhoneListAction:
            return {
                ...state,
                error: false,
                pending: false,
                phoneList: action.phoneList
            }
        case selectPhoneAction:
            return {
                ...state,
                selected: action.phone
            }
        case fetchProductsErrorAction:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

export default rootReducer;