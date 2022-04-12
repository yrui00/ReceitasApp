import { MEDIDAS_LIST_FAIL, MEDIDAS_LIST_REQUEST, MEDIDAS_LIST_SUCCESS } from "../constants/medidasConstants";

export const medidasListReducer = (state = { loading: false, medidas: Array(0), error: false }, action) => {
    switch (action.type) {
        case MEDIDAS_LIST_REQUEST:
            return { loading: true, medidas: [] };
        case MEDIDAS_LIST_SUCCESS:
            return { loading: false, medidas: action.payload };
        case MEDIDAS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
