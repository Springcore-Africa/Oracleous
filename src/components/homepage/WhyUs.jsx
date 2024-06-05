import React from 'react'
import {WhyUsData} from '../../data/WhyUsData'
import whyUsPalm from '../../assets/whyUsPalm.jpg'



function WhyUs() {
  return (
    <div>
        <div>
            <h2 className='font-bold font-serif ml-[420px] mt-[60px] text-[30px]'>Ut ultricies imperdiet sodales. Aliquam<br/> fringilla aliquam elementum</h2>
        </div>
        <div className='grid grid-cols-3 gap-20 space-x-[10px] mt-[60px] ml-[80px] '>
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
    <div className='bg-purple-100 h-[900px] w-full mt-[300px]'>
    </div>
    <div className='bg-green-950 h-[450px] w-[700px] ml-[120px] mt-[-1100px]'>
      <h1 className='font-bold text-[28px] ml-[40px] pt-[40px] text-purple-200 font-serif'>Curabitur sed iaculis dolor, non congue,<br/> ligula imperdiet ante posuere
      </h1>
      <h2 className='text-slate-200 ml-[40px] mt-[24px] text-[17px]'>Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor<br/> dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit<br/> accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor<br/> pharetra odio, in varius ante ante sed nisi orci varius.
      </h2>
      <div className='w-[200px] h-[60px] bg-lime-700 mt-[30px] ml-[40px] hover:cursor-pointer hover:bg-lime-600'>
        <h1 className='text-slate-200 pt-[20px] ml-[55px]'>Read more</h1>
      </div>
    </div>
    <div>
      <img src={whyUsPalm} alt='' className='h-[450px] w-[450px] mt-[-450px] ml-[800px] ' />
    </div>
    </div>
    
  )
}

export default WhyUs