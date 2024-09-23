import React from 'react'
import Farm2 from '../../assets/tree.jpg'
import { HomeCardData } from '../../data/HomeCardData'

function HomeHero() {
  return (
    <div className="Farm2" >
          <img src={Farm2} alt='Farm2' className="w-full h-[650px] filter brightness-30"/>
        <h1 className=' text-5xl text-purple-200 font- ml-[300px] content-center absolute mt-[-450px] font-sans font-bold '>Producing Nigeria'a Most Affordable and Undiluted Palm Oil</h1>
        <div className='h-[3px] w-[110px] bg-lime-500 ml-[580px] mt-[-350px] absolute'></div>

    <div className='flex space-x-[20px] absolute top-[400px] left-[150px] '>
      {/* {HomeCardData.map((data, index)=>{
        return(
            <div key={index} className='bg-green-950 h-[500px] w-[250px] rounded-lg'>
              <h1 className='font-bold text-2xl ml-[80px]  mt-[30px] text-purple-200 font-serif'>{data.title}</h1> 
              <img src={data.image} alt="" className='w-[150px] h-[150px] ml-[30px] mt-[40px]' /> 
              <h2 className='text-purple-100 ml-[50px] mr-[50px] mt-[30px]'>{data.description}</h2>
            </div>
        )
      })} */}
    </div>
    </div>
    
  )
}

export default HomeHero