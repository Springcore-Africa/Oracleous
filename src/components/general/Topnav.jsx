import React from "react"
import './Topnav.css'
import OracleousLogo2 from '../../assets/OracleousLogo2.png'
function Topnav() {

    return (
      
      <div className='Topnav w-full flex bg-green-950 fixed z-20'>
        <div className="Logo">
          <img src={OracleousLogo2} alt='Logo' className=" "/>
        </div>
        <h1 class="text-white mt-[30px] text-bold">Oracleous</h1>
        <div className="Home flex space-x-[50px] pt-[30px] text-purple-200">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/product-page" className="hover:text-white">Products</a>
          <a href="/Our-Story-page" className="hover:text-white">Our story</a>
          <a href="/about-us-page" className="hover:text-white">About us</a>
          <a href="/contact-page" className="hover:text-white">Contact</a>
        </div>
      </div>
   
    )
  }
  
  export default Topnav