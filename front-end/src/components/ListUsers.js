import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUserDetails } from "../store.js/actions/creator";
import swal from "sweetalert";

export default function ListUsers({ user, setSelect }) {
    const dispatch = useDispatch();

    const handleDetails = (id) => {
        dispatch(getUserDetails(id));
        setSelect(true);
    };
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this account",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUser(id));
                swal("Poof! account has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your account is safe!");
            }
        });
    };

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th onClick={() => handleDetails(user.id)} scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td onClick={() => handleDetails(user.id)} className="py-4 px-6">
                    <img className="mb-3 w-14 h-w-14 rounded-full shadow-lg" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Bonnie image" />
                </td>
                <td onClick={() => handleDetails(user.id)} className="py-4 px-6">
                    {user.email}
                </td>
                {localStorage.role === "admin" && (
                    <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDelete(user.id)}>
                            Delete
                        </a>
                    </td>
                )}
            </tr>
        </>
    );
}
