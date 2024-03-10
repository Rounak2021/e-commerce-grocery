import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../../components/Loader/loader.css"

const SubmissionForm = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUserInfo();
    }, [])

    const [state, setState] = useState(
        [
            {
                "name": "",
                "address": "",
                "email": "",
                "phoneNumber": "",
                "description": ""
            }
        ]
    );

    // const user = {
    //     "name": "",
    //     "address": "",
    //     "email": "",
    //     "phoneNumber": "",
    //     "description": ""
    // }

    // Fetching user information Api
    const fetchUserInfo = async () => {
        setLoading(true)

        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = {}
        // return
        try {
            const response = await axios.post(`http://localhost:3000/user/getUserInformation`, body, config);
            // Step1
            setState(response?.data?.responseObject)
            console.log(response?.data?.responseObject);
            console.log(response?.data?.responseObject[0].email);


        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    // -----------------------------

    if (loading) {
        return (
            <div className='spinner'>
            </div>
        )
    }

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                UNIX DIGITAL SYSTEMS
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                Normal  User Information Panel
                            </h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                                    Description
                                </a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                                    Account
                                </a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                                    Details
                                </a>
                            </div>
                            <p className="leading-relaxed mb-4">{state?.description}
                            </p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Name</span>
                                <span className="ml-auto text-gray-900">{state?.name}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Email</span>
                                <span className="ml-auto text-gray-900">{state?.email}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Phone Number</span>
                                <span className="ml-auto text-gray-900">{state?.phoneNumber}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Address</span>
                                <span className="ml-auto text-gray-900">{state?.address}</span>
                            </div>


                        </div>
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src="https://dummyimage.com/400x400"
                        />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone Number</th>

                    </thead>
                    <tbody>

                        {

                            state?.map((data, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{index+1}</td>
                                        <td>{data?.name}</td>
                                        <td>{data?.address}</td>
                                        <td>{data?.email}</td>
                                        <td>{data?.phoneNumber}</td>

                                    </tr>
                                );
                            })

                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}

export default SubmissionForm