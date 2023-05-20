import React from 'react'
import { Link } from 'react-router-dom'

const Bag = () => {
  return (
    <div className='container my-5 text-center'>
     
      <img src="/bag.png" alt="shop" width={200}/>
      <p className='fw-bold fs-5 '>Hey, it feels so light!</p>
      <p className='text-center fs-5'>There is nothing in your bag. Let's add some items.</p>
      <Link to="/wishlist"><button className='bg-transparent mt-4' style={{ outline:"none",borderColor:"#ff3f6c",color:"#ff3f6c",fontWeight: "700",fontSize:"14px",padding:"10px"}}>ADD ITEMS FROM WISHLIST</button></Link>
    </div>
  )
}

export default Bag
