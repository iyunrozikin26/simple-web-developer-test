import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Details from "../components/Details";
import ListUsers from "../components/ListUsers";
import Search from "../components/Search";

import { getUsers } from "../store.js/actions/creator";

export default function Home() {
    const dispatch = useDispatch();
    const userLoginEmail = localStorage.email;
    const userLoginrole = localStorage.role;

    const [select, setSelect] = useState(false);

    const { users, error, loading } = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div className="w-full flex bg-slate-200">
            {loading && <span className="text-3xl text-fuchsia-500">Loading...</span>}
            {!loading && error && <h3>{error}</h3>}
            {!loading && !error && (
                <>
                    <div className="w-full px-5">
                        <div className="flex flex-col justify-center items-center">
                            <p></p>
                            <span className="text-gray-600 font-semibold text-2xl mt-3">Welcome to Gandiwa Full Stack Developer</span>
                            <span className="text-gray-600 font-semibold text-xl">You can do this, I believe in you.</span>
                        </div>
                        <div className="mt-5 mb-2 text-2xl">
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-2 w-24 h-24 rounded-full shadow-lg" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Bonnie image" />
                                <span className="text-xl">{userLoginEmail}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{userLoginrole}</span>
                            </div>
                            <Search />
                        </div>
                        <div className="overflow-x-auto h-80 relative shadow-md sm:rounded-lg ">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-4 px-6">
                                            Full name
                                        </th>
                                        <th scope="col" className="py-4 px-6">
                                            Image
                                        </th>
                                        <th scope="col" className="py-4 px-6">
                                            Email
                                        </th>
                                        <th scope="col" className="py-4 px-6">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.data?.map((user, i) => {
                                        return (
                                            <>
                                                <ListUsers user={user} setSelect={setSelect} key={i} />;
                                            </>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {select ? <Details setSelect={setSelect} /> : null}
                    <Outlet />
                </>
            )}
        </div>
    );
}
