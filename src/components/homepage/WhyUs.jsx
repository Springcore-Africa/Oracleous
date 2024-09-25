import React from 'react'
import {WhyUsData} from '../../data/WhyUsData'
import whyUsPalm from '../../assets/whyUsPalm.jpg'
import whyUs from '../../assets/whyUs.png'



function WhyUs() {
  return (
    <div>
        <div>
        <img src={whyUs} alt="" className='h-[100px] ml-[550px] mt-[100px]' />
            
            
        </div>
        <div className='grid grid-cols-3 gap-10 space-x-[6px] mt-[60px] ml-[50px] '>
      {WhyUsData.map((data, index)=>{
        return(
            <div key={index} className=''>
              <div className=''>
              <img src={data.image} alt=" " className='w-[60px] mt-[50px] h-[60px]  ' /> 
              <div className=' ml-[100px] mt-[-93px] gap-20'>
              <h1 className='font-bold font-serif text-[17px]'>{data.title}</h1> 
              <h2 className='mt-[10px]'>{data.description}</h2>
              </div>
              </div>
            </div>
        )
      })}
    </div>
    
    <div className='bg-green-950 h-[450px] w-[700px] ml-[120px] mt-[110px]'>
      
      <h1 className='font-bold text-[28px] ml-[40px] pt-[120px] text-purple-200 font-serif'>Curabitur sed iaculis dolor, non congue,<br/> ligula imperdiet ante posuere
      </h1>
      <h2 className='text-slate-200 ml-[40px] mt-[24px] text-[17px]'>African oil palm is more widely distributed than other types of palm trees and was first discovered in
        Africa along the coastal strip. Since being domesticated, the oil palm has been imported and grown throughout the humid tropics, with the majority of palm oil being used
        for food. It still has numerous traditional applications in Africa. Breeding can increase the amount of oil produced by the palm, enhance
        the type of oil it produces, and improve nutritional value.
      </h2>
      
    </div>
    <div>
      <img src={whyUsPalm} alt='' className='h-[450px] w-[450px] mt-[-450px] ml-[800px] ' />
    </div>
    </div>
    
  )
}

export default WhyUs