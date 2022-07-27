import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        if (!localStorage.access_token) {
            navigate("/login");
        }
    };
    return (
        <aside className="w-64 h-screen" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 h-screen">
                <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-9 mt-2">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLSxMgpzBy_7BUEExbg20qLxY1TmLa8HfCr-D_GIxQ=s900-c-k-c0x00ffffff-no-rj" className="mr-2 h-6 rounded-full sm:h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GANDIWA</span>
                </a>
                <ul className="space-y-2">
                    {localStorage.access_token ? (
                        <>
                            <li>
                                <Link to={"/"}>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg
                                            aria-hidden="true"
                                            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                        <span className="ml-3">Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/users"}>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg
                                            aria-hidden="true"
                                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add New User</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a onClick={handleLogout} href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                </a>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to={"/login"}>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </aside>
    );
}
