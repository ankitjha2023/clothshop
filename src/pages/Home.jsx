import React from 'react'
import { Link } from 'react-router-dom'
import Deal from './Deal'
import Category from './Category'

const Home = () => {
  return (
    <>
    <section className="d-flex flex-column align-items-center justify-content-center text-center" id="home">
    <h1 className="display-4 fw-bold">WELCOME TO OUR CLOTHSHOP</h1>
    
    <p className="fs-4 fw-bold">Here are some of our latest products</p>
    <Link to="/product"><button className="btn btn-primary btn-lg rounded-5">Click here</button></Link>
     
     
      
    
  </section>
  <Deal/>
  <Category/>
  </>
  )
}

export default Home
