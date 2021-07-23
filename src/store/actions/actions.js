import axios from "axios"
import { SERVER_URL } from "../../common/config"
import { fetchProductsErrorAction, fetchProductsPendingAction, initPhoneListAction, selectPhoneAction } from "../../common/strings"

const fetchProductsSuccess = (phoneList) => {
    return {
        type: initPhoneListAction,
        phoneList
    }
}

const fetchProductsError = (error) => {
    return {
        type: fetchProductsErrorAction,
        error: error
    }
}

const selectPhone = (phone) => {
    return {
        type: selectPhoneAction,
        phone
    }
}

const fetchPhonesList = async (dispatch) => {
    axios.get(`${SERVER_URL}/phones`).then(res => {
        if (res.data.success) {
            return dispatch(fetchProductsSuccess(res.data.data));
        }
        dispatch(fetchProductsError(error))
    }).catch(error => dispatch(fetchProductsError(error)))
}

export { fetchProductsError, fetchProductsSuccess, fetchPhonesList, selectPhone }