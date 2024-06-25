import { fetchInitMessage, updateMessage } from '../../api/api';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const SEND_DATA_REQUEST = 'SEND_DATA_REQUEST';
export const SEND_DATA_SUCCESS = 'SEND_DATA_SUCCESS';
export const SEND_DATA_FAILURE = 'SEND_DATA_FAILURE';

export const fetchData = () => async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
        const data = await fetchInitMessage();
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
    }
};

export const sendData = (data) => async (dispatch) => {
    dispatch({ type: SEND_DATA_REQUEST });

    try {
        const response = await updateMessage(data);
        dispatch({ type: SEND_DATA_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: SEND_DATA_FAILURE, error: error.message });
    }
};
