import React from 'react'
import categories from "../api/CategoryApi"
import CategoryCompo from '../components/CategoryCompo'
const Category = () => {
  return (
    <section className='container my-5' id='category'>
      <h1 className='fw-bold text-center my-5'>Featured Categories</h1>
      <div className="row">
        {
            categories.map((category)=>{
               return(
                <CategoryCompo key={category.name} src={category.imgSrc} title={category.name} desc={category.para}/>
               )
            })
        }
      </div>
    </section>
  )
}

export default Category
