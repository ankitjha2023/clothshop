import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    return (
        <div>
            <h1 className=' display-5 fw-bold text-center mt-5'>Shop Now</h1>
            <div className='row justify-content-center gap-4 mx-auto my-5' id="product">
            {
                data.map((val) => (
                   
                        <div className="card" style={{ width: "18rem" }} key={val.id}>
                            <img src={val.image} className="card-img-top" alt="cloth" />
                            <div className="card-body">
                                <h5 className="text-center">{val.title}</h5>
                                
                                
                               
                                <center><Link to="/" className="btn btn-primary mt-2">Buy Now</Link></center>
                            </div>
                        </div>

                   
                ))
            }
             </div>
        </div>
    )
}

export default Shop
