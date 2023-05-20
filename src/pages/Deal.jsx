import React from 'react'
import DealCompo from '../components/DealCompo'
import products from "../api/DealApi"
const Deal = () => {
    return (
        <section className='container' id='deal'>
          <h1 className='text-center my-5 fw-bold'>DEAL OF THE DAY</h1>
            <div className="row">
              {
                products.map((product)=>{
                    return(
                        <DealCompo key={product.imgSrc} src={product.imgSrc} name={product.name} price={product.price}/>
                    )
                })
              }
            </div>
        </section>
    
  )
}

export default Deal
