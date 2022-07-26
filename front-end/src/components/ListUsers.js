import React from "react";

export default function ListUsers({ setSelect }) {
    return (
        <>
            <tbody className="overflow-y-scroll h-80">
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th onClick={() => setSelect(true)} scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td onClick={() => setSelect(true)} className="py-4 px-6">
                        <img className="mb-3 w-14 h-w-14 rounded-full shadow-lg" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Bonnie image" />
                    </td>
                    <td onClick={() => setSelect(true)} className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Delete
                        </a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td className="py-4 px-6">
                        {" "}
                        <img className="mb-3 w-14 h-w-14 rounded-full shadow-lg" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Bonnie image" />
                    </td>
                    <td className="py-4 px-6">Laptop PC</td>
                    <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                        </a>
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="py-4 px-6">
                        {" "}
                        <img className="mb-3 w-14 h-w-14 rounded-full shadow-lg" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Bonnie image" />
                    </td>
                    <td className="py-4 px-6">Accessories</td>
                    <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                        </a>
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="py-4 px-6">
                        {" "}
                        <img className="mb-3 w-14 h-w-14 rounded-full shadow-lg" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Bonnie image" />
                    </td>
                    <td className="py-4 px-6">Accessories</td>
                    <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    );
}
