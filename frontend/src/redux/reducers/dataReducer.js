import {produce} from 'immer';
import { 
    FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    SEND_DATA_REQUEST, SEND_DATA_SUCCESS, SEND_DATA_FAILURE
} from '../actions/dataActions';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
    responseMessage: '',
};

const dataReducer = produce((draft = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
        case SEND_DATA_REQUEST:
            draft.status = 'loading';
            return draft;
        case FETCH_DATA_SUCCESS:
            draft.status = 'succeeded';
            draft.data = action.payload;
            return draft;
        case FETCH_DATA_FAILURE:
        case SEND_DATA_FAILURE:
            draft.status = 'failed';
            draft.error = action.error;
            return draft;
        case SEND_DATA_SUCCESS:
            draft.status = 'succeeded';
            draft.responseMessage = action.payload.message;
            return draft;
        default:
            return draft;
    }
});

export default dataReducer;
