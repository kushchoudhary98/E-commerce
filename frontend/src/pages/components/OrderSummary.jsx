import { useEffect, useState, useContext } from "react";

export default function OrderSummary(props) {
    
    let shipcharge = 5.00;
    if(props.price == 0){
        shipcharge = 0.0;
    }
    const tax = Math.floor((props.price*0.1) * 100) / 100;
    const total = Math.floor((props.price + shipcharge + tax) * 100) / 100;
    return (
        <div className='bg-zinc-100 rounded-xl p-4 sm:w-[450px] h-[380px] sm:mx-5 mt-[55px]'>
            <p className='text-2xl m-2 my-5 font-medium'>Order summary</p>
            <div className='flex m-2 my-3 justify-between items-center'>
                <span>Subtotal</span>
                <span className='font-semibold'>${props.price}</span>
            </div>
            <hr></hr>
            <div className='flex m-2 my-3 justify-between items-center'>
                <span className='flex'>
                    <span className='mr-2'>Shipping estimate</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" className="bi bi-question-circle-fill text-zinc-400" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                </span>
                <span className='font-semibold'>${shipcharge}</span>
            </div>
            <hr></hr>
            <div className='flex m-2 my-3 justify-between items-center'>
                <span className='flex'>
                    <span className='mr-2'>Tax estimate</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" className="bi bi-question-circle-fill text-zinc-400" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                </span>
                <span className='font-semibold'>${tax}</span>
            </div>
            <hr></hr>
            <div className='flex m-2 my-3 justify-between items-center'>
                <span className='text-lg font-medium'>Order Total</span>
                <span className='font-semibold text-lg'>${total}</span>
            </div>
            <button type='button' className='m-2 my-3 bg-blue-600 hover:bg-blue-800 text-lg font-medium text-white rounded-lg sm:px-40 px-28 py-3'>Checkout</button>
        </div>
    )
}
