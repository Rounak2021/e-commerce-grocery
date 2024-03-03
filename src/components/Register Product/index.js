import React, { useState, useEffect } from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import moment from "moment"
import swal from 'sweetalert';
import axios from "axios"
import {useNavigate} from "react-router-dom"

const RegisterProduct = () => {
    const navigate = useNavigate();

    const [productCode, setProductCode] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productValidity, setProductValidity] = useState("");
    const [ssiCode, setSSiCode] = useState("");

    const registerProductApi = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = {
            storeId: productCode,
            storeDesc: productDesc,
            itemValidity: moment(productValidity).format("YYYY-MM-DD"),
            ItemSSICode: ssiCode
        }
        try {
            const response = await axios.post(`http://localhost:3000/user/product-registration`, body, config);
            if (response?.data?.data === "SUCCESS") {
                swal({
                    title: `${response?.data?.data}`,
                    text: "Popup will automatically close in 2 seconds",
                    // timer: 2000
                });
            } else {
                swal({
                    title: `Error`,
                    text: "Popup will automatically close in 2 seconds",
                    timer: 2000
                });
            }

        } catch (error) {

        }
    }

    return (
        <div>
            <>
                <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
                    <form>
                        <div className=" mx-auto bg-white rounded shadow-lg w-96 rounded-2xl" style={{ width: "200%", padding: "47px" }} >
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                                        Product Information
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Use a z-5 code to receive mail.
                                    </p>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Product Id
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    value={productCode}
                                                    onChange={(e) => setProductCode(e.target.value)}
                                                    autoComplete="given-name"
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Product Name/ Description
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    value={productDesc}
                                                    onChange={(e) => setProductDesc(e.target.value)}
                                                    autoComplete="family-name"
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="prod-valid"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Product Validity
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    name="first-name"
                                                    id="prod-valid"
                                                    value={productValidity}
                                                    onChange={(e) => setProductValidity(e.target.value)}
                                                    autoComplete="given-name"
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="ssi-code"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                SSI Code
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="ssi-code"
                                                    value={ssiCode}
                                                    onChange={(e) => setSSiCode(e.target.value)}
                                                    autoComplete="given-name"
                                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                />
                                            </div>
                                        </div>




                                    </div>
                                </div>

                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                    type="button"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                    onClick={()=>navigate(-1)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => registerProductApi()}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        </div >
    )
}

export default RegisterProduct