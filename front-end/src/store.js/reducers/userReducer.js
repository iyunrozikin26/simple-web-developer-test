import { SET_USERS, SET_USER_DETAIL, SET_USER_LOGIN, SET_ERROR, SET_LOADING, SET_SEARCH } from "../types";

const initialState = {
    users: [],
    user: {},
    error: null,
    loading: false,
    search: "",
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USERS:
            return { ...state, users: payload };
        case SET_ERROR:
            return { ...state, error: payload };
        case SET_LOADING:
            return { ...state, loading: payload };
        case SET_USER_DETAIL:
            return { ...state, user: payload };
        case SET_USER_LOGIN:
            return { ...state, user: payload };
        case SET_SEARCH:
            return { ...state, search: payload };
        default:
            return state;
    }
}

export default userReducer;
