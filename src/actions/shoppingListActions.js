import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';
import { shoppingData } from '../mock/shoppingData';

// Fetch all shopping lists

export function getLists(page, limit) {
    return function (dispatch) {
        dispatch(getListsRequest());

        // return axios({
        //     method: "get",
        //     url: helpers.ROOT_URL + "/shopping_lists?page=" + page +"&limit=" + limit
        // }).then(response => {
        //     if (response.status === 200) {
        //         dispatch(getListsSuccess(response));
        //     } else {
        //         dispatch(getListsFail(response));
        //     }
        // }).catch(error => {
        //     dispatch(getListsFail(error));
        //     errorHandling.catchError(error);
        // });

        //using mock
        let response = {
            status: 200,
            data: shoppingData
        }
        dispatch(getListsSuccess(response));
        
    };
}

export function getListsRequest() {
    return {
        type: actionTypes.GET_LISTS_REQUEST,
    };
}

export function getListsSuccess(response) {
    return {
        type: actionTypes.GET_LISTS_SUCCESS,
        response
    };
}

export function getListsFail(response) {
    return {
        type: actionTypes.GET_LISTS_FAIL,
        response
    };
}

// Delete list

export function deleteList(id, callback) {
    return function (dispatch) {
        dispatch(deleteListRequest());

        return axios({
            method: "delete",
            url: helpers.ROOT_URL + "/shopping_lists/" + id,
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(deleteListSuccess(response, id));
                callback();
            } else {
                dispatch(deleteListFail(response));
            }
        }).catch(error => {
            dispatch(deleteListFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function deleteListRequest() {
    return {
        type: actionTypes.DELETE_LIST_REQUEST,
    };
}

export function deleteListSuccess(response, id) {
    return {
        type: actionTypes.DELETE_LIST_SUCCESS,
        response,
        id
    };
}

export function deleteListFail(response) {
    return {
        type: actionTypes.DELETE_LIST_FAIL,
        response
    };
}
