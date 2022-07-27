import axios from "axios";
import { SET_USERS, SET_USER_DETAIL, SET_LOADING, SET_ERROR, SET_SEARCH, SET_USER_LOGIN } from "../types";

export const setUsers = (payload) => {
    return { type: SET_USERS, payload };
};
export const setLoading = (payload) => {
    return { type: SET_LOADING, payload };
};
export const setError = (payload) => {
    return { type: SET_ERROR, payload };
};
export const setSearch = (payload) => {
    return { type: SET_SEARCH, payload };
};
export const setUsersDetails = (payload) => {
    return { type: SET_USER_LOGIN, payload };
};

export const getUsers = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        axios({
            method: "GET",
            url: "/users",
        })
            .then(({ data }) => {
                dispatch(setUsers(data));
            })
            .catch((error) => dispatch(setError("failed to get all users data")))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const getUserDetails = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: `/users/${id}`,
        })
            .then(({ data }) => {
                dispatch(setUsersDetails(data.data));
            })
            .catch((error) => console.log(error));
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `/users/${id}`,
            headers: { access_token: localStorage.access_token },
        })
            .then(({ data }) => {
                if (data.status === "deleted") {
                    return axios({
                        method: "GET",
                        url: "/users",
                    });
                }
            })
            .then((result) => {
                dispatch(setUsers(result.data));
            })
            .catch((error) => console.log(error));
    };
};

export const userLoginCreator = (userLogin) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: "/login",
                data: userLogin,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        });
    };
};

export const createNewUser = (newUser) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: "/users",
                data: newUser,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        });
    };
};
