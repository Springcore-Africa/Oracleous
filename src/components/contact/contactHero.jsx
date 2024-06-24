import React from 'react'
import ContactHeroPalm from '../../assets/ContactHeroPalm.jpg'
import {contactIconData} from '../../data/contactIconData.jsx'
import Footer from '../general/Footer.jsx'

function contactHero() {
  return (
    <div>
        <div className='bg-slate-100 h-[2250px] w-full'>
        <img src={ContactHeroPalm} alt='' className='w-full h-[640px]'/>
        <div className='h-[830px] w-[1100px] ml-[130px] absolute mt-[-280px] bg-green-950'>
            <p className='text-[45px] font-serif text-purple-300 font-bold ml-[300px] pt-[70px] py-5'>Feel free to contact us.<br/>
We are here to answer<br/></p>
            <p className='text-[45px] font-serif text-purple-300 font-bold ml-[350px] mt-[-20px]'> all your questions</p>
            <div className='mt-[30px]'>
            <h1 className='font-bold text-purple-200 ml-[280px]'>Monday - Saturday</h1>
            <div className='h-[1px] w-[148px] bg-lime-500 ml-[280px] mt-[6px]'></div>
            <h1 className='text-[40px] text-lime-500 ml-[260px]'>8am - 4pm</h1>
            </div>
            <div className='mt-[-85px] ml-[400px]'>
            <h1 className='font-bold text-purple-200 ml-[290px]'>Sunday</h1>
            <div className='h-[1px] w-[60px] bg-lime-500 ml-[290px] mt-[6px]'></div>
            <h1 className='text-[40px] text-lime-500 ml-[234px]'>9am - 3pm</h1>
            </div>
            <div className='flex space-x-[50px] mt-[70px] ml-[180px] '>
      {contactIconData.map((data, index)=>{
        return(
            <div key={index} className='bg-green-950 h-[100px] w-[850px] '>
                <img src={data.image} alt="" className='w-[50px] h-[50px] ml-[20px] mt-[px]' /> 
              <h1 className='font-bold text-3xl ml-[px]  mt-[30px] text-purple-200 font-serif'>{data.title}</h1>     
              <h2 className='text-purple-100 ml-[-25px] mr-[px] mt-[30px]'>{data.description}</h2>
            </div>
        )
      })}
    </div>
        </div>
        <div className='w-[1100px] h-[80px] mt-[550px] ml-[130px]'><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3276%20Sandlake%20road%20off%20Kastina%20ala%20street%20Maitama.+(Oracleous)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
       <div className='mt-[630px]'> <Footer/></div>
        </div>
    </div>

  )
}

export default contactHero