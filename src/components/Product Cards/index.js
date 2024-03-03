import React, { useState, useEffect } from 'react'
import axios from "axios"
import moment from "moment"
// import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = () => {
    useEffect(() => {
        fetchProductApi();
    }, [])


    const [productList, setProductList] = useState([]);
    const fetchProductApi = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = {}
        try {
            const response = await axios.post(`http://localhost:3000/user/get-all-products`, body, config);
            setProductList(response?.data?.responseObject)

        } catch (error) {

        }
    }
    return (
        <div style={{padding: "20px"}}>

            {
                productList.map((data) => (
                    <div className="mx-auto bg-white rounded shadow-sm w-96 rounded" style={{ display: "inline-block" , padding: "20px" , border: "5px solid #d7c8e314"}} >
                        <div className="h-48 p-3 overflow-hidden bg-gray-200 ">
                            <img className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl" src="https://images.pexels.com/photos/724300/pexels-photo-724300.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div className="p-3 h-">
                            <div className="grid grid-cols-1 gap-4 mt-2">
                                <div className="h-12 bg-gray-200 rounded grid grid-cols-1 gap-1 ">
                                    <label className="p-4 font-bold  text-sm dark:text-white" style={{ width: "100%", padding: "5px" }}>Product Description: {data.store_desc}</label>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-2">

                                <div className="h-12 col-span-2 bg-gray-200 rounded ">
                                    <label className="p-4 font-bold  text-sm dark:text-white" style={{ width: "100%", padding: "5px" }} >Product Validity: {moment(data.item_validity).format("DD-MM-YYYY")}</label></div>
                                <div className="h-12 bg-gray-200 rounded  "><label className="p-4 font-bold  text-sm dark:text-white" style={{ width: "100%", padding: "5px" }}>Code: {data.store_id}</label></div>
                                <div className="..."></div>
                                <div className="col-span-2 ..."></div>
                            </div>
                        </div>

                    </div>



                ))
            }



            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ProductCard