import { GET_USERS_SUCCESS } from "./actions";

// Initial state with an empty users array
const initialState = {
    users: []
};

// Reducer to update state when users are successfully fetched
const myFirstReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            // Update users array with the fetched data
            return { ...state, users: action.users };
        default:
            return state;
    }
}

export default myFirstReducer;
