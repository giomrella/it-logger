import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';

// Get techs from server 
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_TECHS,
            payload: err.response.statusText
        });
    }
}

// Set loading to true
const setLoading = () => ({ type: SET_LOADING })