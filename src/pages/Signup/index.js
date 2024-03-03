import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import axios from 'axios';
import "../../components/Loader/loader.css"
const Register = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    }

    const [loading, setLoading] = useState(false);
    const [userName, setUsername] = useState("");
    const [emailId, setEmailId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [cPasswordError, setCPasswordError] = useState("");

    const handleConfirmPassword = (value) => {
        setCPassword(value);
        setCPasswordError("")
        if (value !== password) {
            setCPasswordError("Password and confirm password doesn't matching")
        }
    }

    // --------------------
    // Signup Api
    const signupApi = async () => {
        setLoading(true)
        setCPasswordError("");
        if (cPassword !== password) {
            return setCPasswordError("Password and confirm password doesn't matching")
        }

        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = {
            "name": userName,
            "email": emailId,
            "phonenumber": phoneNumber,
            "password": password
        }
        console.log(body)
        // return
        try {
            const response = await axios.post(`http://localhost:3000/user/register`, body, config);
            if (response?.data?.message === "SUCCESS") {
                // localStorage.setItem(response?.data?.result.name)
                swal({
                    title: `Success`,
                    text: "Data saved successfully",
                    timer: 2000
                });

            } else {
                swal({
                    title: `Error`,
                    text: "Popup will automatically close in 2 seconds",
                    timer: 2000
                });
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    // -----------------------------

    // For loader
    if (loading) {
        return (
            <div className='spinner'>
            </div>
        )
    }


    return (
        <div>
            <div className="flex flex-wrap w-full">
                <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                        <a href="#" className="p-4 text-xl font-bold text-white bg-black">
                            UNIX DIGITAL SYSTEMS
                        </a>
                    </div>
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p className="text-3xl text-center">Welcome.</p>
                        <form className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="flex relative ">
                                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        // name="first-name"
                                        // id="username"
                                        value={userName}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="given-name"
                                        placeholder='User Name'
                                        class="appearance-none block w-full  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex relative ">
                                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="email"
                                        // name="first-name"
                                        // id="first-name"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                        autoComplete="given-name"
                                        placeholder='Email Id'
                                        class="appearance-none block w-full  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex relative ">
                                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="number"
                                        // name="first-name"
                                        // id="first-name"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        autoComplete="given-name"
                                        placeholder='Mobile Number'
                                        class="appearance-none block w-full  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4 ">
                                <div className="flex relative ">
                                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="password"
                                        // name="first-name"
                                        // id="first-name"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="given-name"
                                        placeholder='Password'
                                        class="appearance-none block w-full  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4 ">
                                <div className="flex relative ">
                                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg
                                            width={15}
                                            height={15}
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="password"
                                        // name="first-name"
                                        // id="first-name"
                                        value={cPassword}
                                        onChange={(e) => handleConfirmPassword(e.target.value)}
                                        autoComplete="given-name"
                                        placeholder='Confirm Password'
                                        class="appearance-none block w-full  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />

                                </div>
                                {/* {cPassword.trim().length > 0 && (
                                    <p className="text-red-600 text-sm absolute top-full right-0 -mt-3 -mr-3">{cPasswordError}</p>)} */}
                            </div>
                            <div className="flex flex-col pt-4 mb-4">
                                <div className="flex relative ">
                                    {cPassword.trim().length > 0 && (
                                        <p className="text-red-600 text-sm absolute top-full  -mt-3 -mr-3">{cPasswordError}</p>)}

                                </div>

                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                            >
                                <button className="w-full" onClick={() => signupApi()} >Submit</button>
                            </button>
                        </form>
                        <div className="pt-12 pb-12 text-center">
                            <p>
                                Already have an account? &nbsp;
                                <button onClick={() => goToLogin()} className="font-semibold underline">
                                    Let's login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img
                        className="hidden object-cover w-full h-screen md:block"
                        src="https://images.pexels.com/photos/6214449/pexels-photo-6214449.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
            </div>

        </div>
    )
}

export default Register