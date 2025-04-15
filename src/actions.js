// Action type for triggering the API call (used by Redux-Saga)
export const GET_USERS_FETCH = 'GET_USERS_FETCH';

// Action type for setting the fetched users in the store
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// Action creator to trigger the GET_USERS_FETCH action
export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
});
