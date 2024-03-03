import React from 'react'
import homepage_logo from "../../images/homepage_img_1.png"
import { useNavigate, Link } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register")
    }
    return (
        <div  >
            <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800" >
                <header className="z-30 flex items-center w-full h-24 sm:h-32">
                    <div className="container flex items-center justify-between px-6 mx-auto">
                        <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                            UNIX DIGITAL SYSTEMS
                        </div>
                        <div className="flex items-center">
                            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                                <button className="flex px-6 py-2">
                                    Admin
                                </button>
                                <button onClick={() => handleLogin()} className="flex px-6 py-2">
                                    Login
                                </button>
                                <button onClick={() => handleRegister()} className="flex px-6 py-2">
                                    Signup
                                </button>
                                {/* <a href="#" className="flex px-6 py-2">
                                    Contact
                                </a>
                                <a href="#" className="flex px-6 py-2">
                                    Carrer
                                </a> */}
                            </nav>
                            {/* <button className="flex flex-col ml-4 lg:hidden">
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            </button> */}
                        </div>
                    </div>
                </header>
                <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
                    <div className="container relative flex px-6 py-16 mx-auto">
                        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
                            <h1 className="flex flex-col text-3xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                                we create
                                <span className="text-5xl sm:text-4xl">for FUTURE TOMORROW</span>
                            </h1>
                            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                                Dimension of reality that makes change possible and understandable. An
                                indefinite and homogeneous environment in which natural events and
                                human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <button onClick={() => handleLogin()}
                                    className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400"
                                >
                                    Go to login
                                </button>
                                <button
                                    href="#"
                                    className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
                                >
                                    More about us
                                </button>
                            </div>
                        </div>
                        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                            <img
                                src={homepage_logo}
                                className="max-w-xs m-auto md:max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Homepage