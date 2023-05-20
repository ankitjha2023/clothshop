import React from 'react'

const CategoryCompo = ({src,title,desc}) => {
  return (
    <div className='col-md-4'>
        <div className="card text-center">
            <img src={src} alt="image" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">{desc}</p>
                <button className='btn btn-primary rounded-5'>SHOP NOW</button>
            </div>
        </div>
      
    </div>
  )
}

export default CategoryCompo
