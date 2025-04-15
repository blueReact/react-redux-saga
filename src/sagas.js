import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';

// Function to fetch users data from an external API
function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

// Worker saga: called whenever GET_USERS_FETCH is dispatched
function* workGetUsersFetch() {
    // `call` invokes the fetch function and waits for result
    const users = yield call(usersFetch);

    // `put` dispatches a new action to update the store with fetched users
    yield put({ type: GET_USERS_SUCCESS, users });
}

// Root saga: watches for every GET_USERS_FETCH action
function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
