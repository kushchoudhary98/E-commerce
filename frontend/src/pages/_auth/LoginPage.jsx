import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import userContext  from "../../context/user/UserContext";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const state = useContext(userContext);

    const port = "9000"
    let link = document.location.href
    link = link.slice(0,-10) + port + "/login"

    useEffect(() => {
      if(screen.width > 768) return;
      else {
        document.getElementById("hamburger").style.right = "-300px"
        document.getElementById("ham-close").style.display = "none"
        document.getElementById("ham-open").style.display = "block"
      }
    })

    const loginHandler = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const passwd = e.target.password.value;

      setLoading(true);

      axios.post(link,{
        username: email,
        password: passwd
      }).then((res) => {
        if(res.data['verified']){
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          window.location.href = '/profile';
        }
        else {
          document.getElementById('verification').style.display = 'block';
          setLoading(false);
        }
      })
    }

    return (
      <>
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={loginHandler} method="post">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address / User Name
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <p id="verification" className='text-red-600 hidden'>*Invalid credentials. Please try again.</p>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading?"Logging in ...":"Log in"}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Doesn't have an Account?
              <Link to='/signup' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  