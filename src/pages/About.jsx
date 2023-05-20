import React from "react";



const About = () => (
  <div className="bg-light" >
    <div className=" py-5 container">
      <div className="row g-4 py-2 align-items-center">

        <div className="col-md-4 text-center">
          <img src="/bg.jpg" className="img-fluid rounded" alt="about pic" loading="lazy" width={300} />
        </div>
        <div className="col-md-8">
          <h1 className="display-5 fw-bold  mb-2">About Us</h1>
          <p>We are a small cloth shop that specializes in high-quality clothing and accessories. Our goal is to provide our customers with the best shopping experience possible, from the moment they enter our store to the moment they receive their order. We are passionate about fashion and strive to stay on the cutting edge of the latest trends and styles. Thank you for choosing our cloth shop!</p>
          <p>At our online store, we believe in providing a seamless shopping experience. From browsing to payment, we strive to make everything as smooth as possible. Our user-friendly website and mobile app make it easy for you to find exactly what you're looking for, and our fast shipping ensures that your products reach you quickly.</p>

         
          <h5>Sincerely,<br />
            The ClothShop Team</h5>

        </div>

      </div>
    </div>

  </div>

);

export default About;
