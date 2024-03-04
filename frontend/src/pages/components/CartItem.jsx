import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartItem(props) {
    let link = 'http://localhost:9000/removeitem'
    let user = JSON.parse(localStorage.getItem('user'));

    const removeItemHandler = async() => {
        const id = toast.loading('Removing from cart.');
        console.log(props.item.id);
        await axios.put(link,{
            item: props.item.id,
            email: user.email
        }).then(res=>{
            console.log('Item removed');
            toast.update(id, {render: "Item Removed", type: "success", isLoading: false});
            window.location.reload();
        })
    }

    return (
        <>
            <li className='py-10 flex gap-4'>
                <div className='lg:min-w-48 md:min-w-40 sm:min-w-32 min-w-32 max-w-32 flex justify-center items-center rounded-lg bg-zinc-100'>
                    <img src={props.item.image} className='lg:w-36 md:w-32 sm:w-28 w-[300px] p-2' style={{ mixBlendMode: 'multiply' }}></img>
                </div>
                <div className='flex flex-col justify-between md:w-auto sm:w-3/4'>
                    <div>
                        <p className='font-sans m-2 font-semibold text-lg text-gray-800 overflow-hidden sm:h-auto h-[30px]'>{props.item.title}</p>
                        <p className='text-zinc-600 font-sans m-2 flex gap-2'>
                            <span>Color</span>
                            <span className='text-zinc-200 font-thin'>|</span>
                            <span>Large</span>
                        </p>
                        <p className='m-2 font-semibold'>$<span className='item-price'>{props.item.price}</span></p>
                    </div>
                    <div className='flex justify-between md:w-[500px] sm:w-[350px]'>
                        <p className='flex items-center m-2 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-arrow-right-short text-green-600" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>
                            <span className='text-gray-800'>In stock</span>
                        </p>
                        <button onClick={removeItemHandler} className='flex justify-center items-center px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" className="bi bi-x-lg text-zinc-500" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
            <hr className='' />
            <ToastContainer />
        </>
    )
}
