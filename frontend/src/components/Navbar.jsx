import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function Navbar() {

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      document.getElementById('login-btn').style.display = 'block'
    }
    else {
      document.getElementById('login-btn').style.display = 'none'
    }
  })

  const goToCategory = () => {
    window.location.href = '/#category';
  }

  const hamburgerHandlerOpen = () => {
    document.getElementById("hamburger").style.right = "0px"
    document.getElementById("ham-open").style.display = "none"
    document.getElementById("ham-close").style.display = "block"
  }
  const hamburgerHandlerClose = () => {
    document.getElementById("hamburger").style.right = "-300px"
    document.getElementById("ham-close").style.display = "none"
    document.getElementById("ham-open").style.display = "block"
  }

  return (
    <nav className='flex fixed z-20 bg-white top-0'>
      <div className='flex justify-around items-center w-screen'>
        <div className='hidden md:flex'>
          <button className='font-sans lg:text-2xl m-2 mr-9 md:text-xl' onClick={goToCategory}>Category</button>
          <Link to='/maintenance'>
            <button className='font-sans lg:text-2xl m-2 md:text-xl'>Best Seller</button>
          </Link>
        </div>
        <Link to='/'>
          <img src={logo} alt="Fashion" className=' lg:w-96 md:w-[270px] sm:w-[300px] w-[250px]' />
        </Link>

        <div className='hidden md:flex flex-row gap-7 hover:cursor-pointer'>
          <Link to='/maintenance' className='flex justify-center'>
            <Tooltip title='Search'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-search md:w-[17px] lg:w-[20px]" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Tooltip>
          </Link>
          <Link to='/maintenance' className='flex justify-center'>
            <Tooltip title='Favourites'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-heart md:w-[17px] lg:w-[20px]" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </Tooltip>
          </Link>
          <Link to='/cart' className='flex justify-center'>
            <Tooltip title='Cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-cart md:w-[17px] lg:w-[20px]" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Tooltip>
          </Link>
          <Link to='/profile' className='flex justify-center'>
            <Tooltip title='Account'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-person md:w-[20px] lg:w-[23px]" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Tooltip>
          </Link>
          <Link to='/login'>
            <button id='login-btn' type='submit' className='flex flex-row font-sans justify-center items-center gap-2 bg-blue-700 p-2 text-white rounded-2xl px-5 hover:bg-blue-800 transition-all  md:text-md lg:text-xl'>
              <p className='md:block flex items-center'>Login</p>
            </button>
          </Link>
        </div>
      </div>
      <button id='ham-open' className='absolute right-4 top-4 block md:hidden' type='button' onClick={hamburgerHandlerOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <button id='ham-close' className='absolute right-4 top-4 hidden md:hidden' type='button' onClick={hamburgerHandlerClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </nav>
  )
}
