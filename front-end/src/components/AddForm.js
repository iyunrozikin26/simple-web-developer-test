import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { createNewUser } from "../store.js/actions/creator";
import swal from "sweetalert";

export default function AddForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const submitCreateNewUser = async (e) => {
        e.preventDefault();
        try {
            if (newUser.name == "" || newUser.email == "" || newUser.password == "") throw { message: "fill all the field, please!" };
            const result = await dispatch(createNewUser(newUser));
            if (result.status === "created") {
                swal(`${result.email}`, "success to create", "success");
                setTimeout(() => {
                    navigate("/");
                    setNewUser({
                        name: "",
                        email: "",
                        password: "",
                    });
                }, 2000);
            }
        } catch (error) {
            swal("Ooopps...", `${error.message}`);
        }
    };
    return (
        <div className="w-full bg-slate-200 flex flex-col justify-center items-center">
            <div className="w-2/6 dark:bg-gray-800 px-10 py-5 rounded-xl">
                <div className="mt-5 mb-5 text-cyan-50 text-3xl flex items-center justify-center">
                    <span className="font-extrabold">Create Form</span>
                </div>
                <div className="mb-6">
                    <form onSubmit={submitCreateNewUser}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="text"
                                value={newUser.name}
                                onChange={changeNewUser}
                                name="name"
                                id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                for="name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Full Name
                            </label>
                        </div>

                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="email"
                                value={newUser.email}
                                onChange={changeNewUser}
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
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
                                value={newUser.password}
                                onChange={changeNewUser}
                                name="password"
                                id="password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
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
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <Outlet />
        </div>
    );
}
