import React from 'react'
import Farm2 from '../../assets/blurHero.webp'
import { HomeCardData } from '../../data/HomeCardData'
import palm from '../../assets/palmHero.png'

function HomeHero() {
  return (
    <div className="Farm2" >
      
      <h1 className='text-5xl text-purple-100 mt-[330px] ml-[50px] mr-[400px] absolute content-center font-sans font-bold '>Introducing Nigeria'a Most Affordable and Undiluted Palm Oil</h1>
      <div className='h-[5px] w-[310px] bg-lime-400 ml-[50px] mt-[430px] absolute'></div>
      <img src={palm} alt="Palm" className='ml-[557px] mt-[250px] absolute' />
     
          <img src={Farm2} alt='Farm2' className="w-full h-[550px] filter brightness-30"/>
        
      <h1 className='text-purple-100 mt-[-100px] ml-[50px] mr-[500px] absolute'>Oracleous Enterprises is dedicated to producing Nigeria's most affordable and undiluted palm oil. 
        By harnessing cutting-edge technology and sustainable practices, we ensure high-quality 
        products that meet both local and global demand.</h1>

    <div className='flex space-x-[40px] mt-[50px] ml-[130px] '>
      {HomeCardData.map((data, index)=>{
        return(
            <div key={index} className=' bg-lime-900 h-[500px] w-[250px] rounded-lg'>
              <h1 className='font-bold text-2xl ml-[50px]  mt-[30px] text-purple-200 font-serif'>{data.title}</h1> 
              <img src={data.image} alt="" className='w-[180px] h-[180px] ml-[40px] mt-[80px]' /> 
              <h2 className='text-purple-100 ml-[30px] mr-[10px] mt-[30px] text-center'>{data.description}</h2>
            </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default HomeHero