import userContext from "../context/user/UserContext"
import { useContext } from "react"
import avatar from '../assets/avatar.png'

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
            <div className="flex justify-center items-center w-screen lg:mt-[93px] md:mt-[64px] sm:mt-[72px] mt-[60px] border-t-[2px]">
                <div className="flex justify-center text-black w-4/5 bg-orange-50 mb-5 pb-8 pr-7 lg:mt-5 md:mt-3 sm:mt-3 mt-3 rounded-xl">
                    <div className='md:mt-10 lg:mt-10 mt-8 w-11/12 flex flex-col'>
                        <h1 className='text-slate-700 text-2xl font-medium mb-2'>User Profile</h1>
                        <hr className="border-[1px] border-zinc-300 mb-8 w-1/4"></hr>
                        <div id="profile-photo" className="flex flex-row justify-around items-center">
                            <div className="flex flex-row items-center gap-5">
                                <img src={avatar} alt={user.name.first} className='w-[130px] h-[130px] rounded-full'></img>
                                <h1 className='text-lg font-medium text-indigo-900'>{user.name.first + " " + user.name.last}</h1>
                            </div>
                            <div className="flex gap-5 h-[50px]">
                                <button className='bg-indigo-900 text-white font-lg p-3 px-4 rounded-lg w-[170px]'>Upload New Photo</button>
                                <button className='bg-white text-indigo-900 font-medium border-indigo-900 border-[1.8px] font-lg p-3 px-4 rounded-lg w-[170px]'>Delete</button>
                            </div>
                        </div>
                        <hr className="border-[1px] border-zinc-300 mb-8 ml-4 w-full mt-9"></hr>
                        <div className="flex flex-col">
                            <div className="flex flex-row flex-wrap justify-between">
                                <div className="flex flex-col sm:w-2/5 w-full min-w-[210px] mr-2">
                                    <label htmlFor="firstname" className='flex items-center mb-2 ml-4 text-lg font-medium text-indigo-900 min-w-[305px]'>First Name</label>
                                    <input name="firstname" value={user.name.first} className='text-zinc-600 ml-4 border-2 bg-white p-1 pl-2 rounded-md w-full'></input>
                                </div>
                                <div className="flex flex-col mt-6 sm:mt-0 sm:w-2/5 w-full min-w-[210px]">
                                    <label htmlFor="lastname" className='flex items-center mb-2 ml-4 text-lg font-medium text-indigo-900 min-w-[305px]'>Last Name</label>
                                    <input name="lastname" value={user.name.last} className='text-zinc-600 ml-4 border-2 bg-white p-1 pl-2 rounded-md w-full'></input>
                                </div>
                            </div>
                            <label htmlFor="username" className='mt-6 mb-2 ml-4 text-lg font-medium text-indigo-900'>User Name</label>
                            <input name="username" value='' className='text-zinc-600 ml-4 border-2 bg-white p-1 pl-2 rounded-md w-full'></input>
                            <hr className="border-[1px] border-zinc-300 mb-8 ml-4 w-full mt-9"></hr>
                            <label htmlFor="email" className='mt-6 mb-2 ml-4 text-lg font-medium text-indigo-900'>Email Address</label>
                            <input name="email" value={user.email} className='text-zinc-600 ml-4 border-2 bg-white p-1 pl-2 rounded-md w-full'></input>
                            <label htmlFor="phone" className='mt-6 mb-2 ml-4 text-lg font-medium text-indigo-900'>Phone Number</label>
                            <input name="phone" value='' className='text-zinc-600 ml-4 border-2 bg-white p-1 pl-2 rounded-md w-full'></input>
                        </div>
                        <button onClick={logoutHandler} type="button" className='flex justify-center items-center m-6 bg-blue-600 p-3 h-10 w-28 text-white rounded-lg'>Log out</button>
                    </div>
                </div>
            </div>
        </>
    )
}
