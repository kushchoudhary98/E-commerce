import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);

    const port = "9000"
    let link = document.location.href
    link = link.slice(0, -11) + port + "/signup"

    useEffect(() => {
        if (screen.width > 768) return;
        else {
            document.getElementById("hamburger").style.right = "-300px"
            document.getElementById("ham-close").style.display = "none"
            document.getElementById("ham-open").style.display = "block"
        }
    })

    const signupHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const passwd = e.target.password.value;

        setLoading(true);

        axios.post(link, {
            name: name,
            email: email,
            password: passwd
        }).then((res) => {
            if (res.data.status == 'error') { 
                window.alert('An error occured.');
            }
            if (res.data.status == 'exists') {
                document.getElementById('verification').style.display = 'block';
                setLoading(false);
            }
            if (res.data.status == 'success') {
                setLoading(false);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                window.location.href = '/profile';
            }
        })
    }

    return (
        <>
            <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="post" onSubmit={signupHandler}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
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
                            <p id="verification" className='text-red-600 hidden'>*Email already exists. Try another email</p>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ? "Signing up ..." : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a user?
                        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
