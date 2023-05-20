import React from 'react'

const DealCompo = ({src,name,price}) => {
  return (
    <div className="col-md-3">
                    <div className="card text-center shadow">
                        <img src={src} alt="shirt" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <b>{price}</b>
                        </div>
                    </div>
                </div>
  )
}

export default DealCompo
