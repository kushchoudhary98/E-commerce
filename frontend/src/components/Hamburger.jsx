import { Link } from "react-router-dom"
import { useEffect } from "react";

export default function Hamburger() {
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          document.getElementById('ham-login-btn').style.display = 'flex'
        }
        else {
          document.getElementById('ham-login-btn').style.display = 'none'
        }
    })

    return (
        <div id="hamburger" className='fixed z-10 h-screen w-[200px] right-[-300px] top-0 pt-[100px] bg-white shadow-2xl transition-all'>
            <div className='flex flex-col justify-evenly ml-10 h-[400px]'>
                <Link to='/'><div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-house mr-4" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>Home</div></Link>
                <Link to='/maintenance'><div className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-search mr-4" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>Search</div></Link>
                <Link to='/profile'><div className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-person mr-4" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>Account</div></Link>
                <Link to='/maintenance'><div className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-heart mr-4" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>Fav</div></Link>
                <Link to='/cart'><div className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-cart mr-4" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>Cart</div></Link>
                <Link to='/login'>
                    <button id="ham-login-btn" type='submit' className='flex-row font-sans justify-center items-center gap-2 bg-blue-700 p-2 text-white rounded-2xl px-5 hover:bg-blue-800 transition-all  md:text-md lg:text-xl'>
                        <p className='md:block flex items-center'>Login</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}
