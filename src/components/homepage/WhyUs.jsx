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
        <div className='grid grid-cols-3 gap-20 space-x-[6px] mt-[60px] ml-[70px] '>
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
      <h2 className='text-slate-200 ml-[40px] mt-[24px] text-[17px]'>Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor<br/> dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit<br/> accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor<br/> pharetra odio, in varius ante ante sed nisi orci varius.
      </h2>
      
    </div>
    <div>
      <img src={whyUsPalm} alt='' className='h-[450px] w-[450px] mt-[-450px] ml-[800px] ' />
    </div>
    </div>
    
  )
}

export default WhyUs