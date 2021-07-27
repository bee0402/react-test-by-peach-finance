import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_LISTS_REQUEST:
                return {
                ...state,
                loading: true
            };

        case actionTypes.GET_LISTS_SUCCESS:
            return { ...state,
                shoppingLists: action.response.data,
                loading: false
            };

        case actionTypes.GET_LISTS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.DELETE_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.DELETE_LIST_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.DELETE_LIST_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
