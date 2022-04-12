import { MEDIDAS_LIST_FAIL, MEDIDAS_LIST_REQUEST, MEDIDAS_LIST_SUCCESS } from "../constants/medidasConstants";
import Axios from 'axios';

export const listMedidas = () => async (dispatch) => {
    dispatch({
        type: MEDIDAS_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/medidas/`);
        dispatch({ type: MEDIDAS_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: MEDIDAS_LIST_FAIL, payload: error.message });
    }
};
