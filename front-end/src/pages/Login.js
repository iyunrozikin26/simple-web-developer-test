import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userLoginCreator } from "../store.js/actions/creator";
import swal from "sweetalert";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "admin@voltest.com",
        password: "admin!123",
    });

    const changeNewUser = (e) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();
        dispatch(userLoginCreator(userLogin))
            .then((result) => {
                localStorage.setItem("access_token", result.access_token);
                localStorage.setItem("email", result.email);
                localStorage.setItem("role", result.role);
                // swal("Good job!", "Sign In success!", "success");
                setTimeout(() => {
                    if (localStorage.access_token) navigate("/");
                }, 500);
            })
            .catch((err) => {
                swal(`${err.response.data.status}`, `${err.response.data.message}`, "error");
            });
    };
    return (
        <div className="w-full bg-slate-200 flex flex-col justify-center items-center">
            <div className="w-2/6 dark:bg-gray-800 px-10 py-5 rounded-xl">
                <div className="mt-5 mb-5 text-cyan-50 text-3xl flex items-center justify-center">
                    <span className="font-extrabold">Sign In</span>
                </div>
                <div className="mb-6">
                    <form onSubmit={submitLogin}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="email"
                                name="email"
                                value={userLogin.email}
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                                onChange={changeNewUser}
                            />
                            <label
                                for="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="password"
                                name="password"
                                value={userLogin.password}
                                id="password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                                onChange={changeNewUser}
                            />
                            <label
                                for="password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>

            <Outlet />
        </div>
    );
}
