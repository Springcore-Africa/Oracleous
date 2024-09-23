import React from "react"
import './Topnav.css'
import OracleousLogo2 from '../../assets/OracleousLogo.png'
function Topnav() {

    return (
      
      <div className='Topnav w-full flex bg-white fixed z-20 h-[75px] shadow-md shadow-black'>
        <div className="Logo">
          <img src={OracleousLogo2} alt='Logo' className="h-[65px] ml-[-40px] "/>
        </div>
       
        <div className="Home flex space-x-[50px] pt-[30px] text-xl text-black">
          <a href="/" className="hover:text-green-700 hover:underline">Home</a>
          <a href="/product-page" className="hover:text-green-700 hover:underline">Products</a>
          <a href="/Our-Story-page" className="hover:text-green-700 hover:underline">Our story</a>
          <a href="/about-us-page" className="hover:text-green-700 hover:underline">About us</a>
          <a href="/contact-page" className="hover:text-green-700 hover:underline">Contact</a>
        </div>
      </div>
   
    )
  }
  
  export default Topnav