import userContext from "../context/user/UserContext"
import { useContext } from "react"

export default function Profile() {
    const state = useContext(userContext);
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = '/login';
    }

    function logoutHandler() {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    return (
        <>
            <div className="flex justify-center items-center text-black h-screen">
                Profile for {user.name}
                <button onClick={logoutHandler} type="button" className='m-6 border-black bg-blue-600 p-3 text-white rounded-lg'>Log out</button>
            </div>
            
        </>)
}
