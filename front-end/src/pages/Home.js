import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Details from "../components/Details";
import ListUsers from "../components/ListUsers";
import Search from "../components/Search";

export default function Home() {
    const [select, setSelect] = useState(false);

    return (
        <div className="w-full flex bg-slate-200">
            <div className="w-full px-5">
                <div className="flex justify-center items-center">
                    <span className="text-3xl mt-5">Welcome to Gandiwa Full Stack Developer Test</span>
                </div>
                <div className="mt-5 mb-2 text-2xl">
                    <div className="flex flex-col items-center pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Bonnie image" />
                        <span className="text-xl ">Visual Designer</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                    <Search />
                </div>
                <div className="overflow-x-auto h-80 relative shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Full name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <ListUsers setSelect={setSelect} />
                    </table>
                </div>
            </div>
            {select ? <Details setSelect={setSelect} /> : null}
            <Outlet />
        </div>
    );
}
