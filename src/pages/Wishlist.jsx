import React from 'react'

const Wishlist = () => {
  return (
    <section className='container-fluid my-5' id='wishlist'>
      <h1 className=' my-3 text-center fw-bold'>My Wishlist</h1>
      <div className="row" id='upper-row'>
        <div className="col-md-3 text-center"><h5>Product Name</h5></div>
        <div className="col-md-3 text-center"><h5>Unit Price</h5></div>
        <div className="col-md-3 text-center"><h5>Stock Status</h5></div>

      </div>
      <hr />
      <div className="row bg-light">
        <div className="col-md-3 text-center">
          <img src="https://e7.pngegg.com/pngimages/614/591/png-clipart-blue-washed-denim-pants-carpenter-jeans-trousers-denim-slim-fit-pants-blue-jeans-blue-fashion.png" className="img-fluid" width={100} />
          <p className='fs-5'>Jeans</p>
        </div>
        <div className="col-md-3 text-center"><b className='fs-4'>$20.00</b>
        </div>
        <div className="col-md-3 text-center">
          <p className='text-success fs-5'>in Stock</p>
        </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-success btn-sm'>Add To Cart</button>
      </div>


      </div>
      <div className="row bg-light">
        <div className="col-md-3 text-center">
          <img src="https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png" class="img-fluid" width={100} />
          <p className='fs-5'>Black Tshirt</p>
        </div>
        <div className="col-md-3 text-center"><b className='fs-4'>$20.00</b>
        </div>
        <div className="col-md-3 text-center">
          <p className='text-success fs-5'>in Stock</p>
        </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-success btn-sm'>Add To Cart</button>
      </div>


      </div>
      <div className="row bg-light">
        <div className="col-md-3 text-center">
          <img src="https://e7.pngegg.com/pngimages/3/819/png-clipart-printed-t-shirt-polo-shirt-clothing-t-shirt-tshirt-fashion-thumbnail.png" class="img-fluid" width={100} />
          <p className='fs-5'>Red Tshirt</p>
        </div>
        <div className="col-md-3 text-center"><b className='fs-4'>$20.00</b>
        </div>
        <div className="col-md-3 text-center">
          <p className='text-success fs-5'>in Stock</p>
        </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-success btn-sm'>Add To Cart</button>
      </div>


      </div>

    </section>
  )
}

export default Wishlist
