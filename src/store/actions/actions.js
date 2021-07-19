import axios from "axios"
import { SERVER_URL } from "../../common/config"
import { initPhoneListAction, selectPhoneAction } from "../../common/strings"

const fetchProductsSuccess = (phoneList) => {
    return {
        type: initPhoneListAction,
        phoneList
    }
}

const fetchProductsError = (error) => {
    return {
        type: initPhoneListAction,
        error: error
    }
}

const selectPhone = (phone) => {
    // console.warn('insid-action', phone);
    return {
        type: selectPhoneAction,
        phone
    }
}

const fetchPhonesList = async (dispatch) => {
    axios.get(`${SERVER_URL}/phones`).then(res => {
        if (res.data.success) {
            dispatch(fetchProductsSuccess(res.data.data));
        }
    })
}

export { fetchProductsError, fetchProductsSuccess, fetchPhonesList, selectPhone }