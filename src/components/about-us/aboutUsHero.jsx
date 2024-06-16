import React from 'react'
import WhyUsPalm from '../../assets/whyUsPalm.jpg'
import OurTeam from '../../assets/ourTeam.png'
import {WhyUsData} from '../../data/WhyUsData'
import { ProductNumberData } from '../../data/ProductNumberData'
import Footer from '../general/Footer'

function aboutUsHero() {
  return (
    <div>
        <div className='h-[1200px] w-full bg-green-900'>
            <h1 className='text-5xl font-serif font-bold text-purple-200 pt-[170px] ml-[90px]'>Lorem ipsum dolor<br/> sit amet, consectetur<br/> adipisicing elit, sed <br/>do eiusmod tempor<br/> incididunt ut labore<br/> et im ad minim <br/>veniam quis nostrud<br/> exercit atiooris.</h1>
            <img src={WhyUsPalm} alt='' className='mt-[-430px] h-[600px] w-[580px] ml-[700px]'/>
            <div className='h-[60px] w-[250px] bg-lime-600 ml-[90px] hover:cursor-pointer hover:bg-lime-500 mt-[-100px]'>
                <h1 className='text-white ml-[90px] pt-[15px] '>Read more</h1>
            </div>
            <h1 className='font-serif text-6xl mt-[150px] ml-[450px] text-white'>Meet our team</h1>
            </div>
            <div className='bg-slate-200 w-full h-[1800px]'>
                <div className='bg-green-950 absolute w-[350px] h-[460px] left-[150px] top-[1020px]'>
                    <h1 className='text-2xl font-serif text-white ml-[140px] mt-[40px] font-bold'>Carl</h1>
                    <h1 className='text-2xl font-serif text-white ml-[110px] mt-[5px] font-bold'>Rossman</h1>
                    <img src={OurTeam} alt='' className='ml-[70px] rounded-full h-[350px] w-[200px] mt-[-80px]'/>
                    <h1 className='text-white ml-[50px] mt-[-40px]'>Duis dignissim mi ut laoreet mollis.</h1>
                    <h1 className='text-white ml-[60px] mt-[]'>Nunc id tellus finibus, eleifend mi</h1>
                    <h1 className='text-white ml-[90px] mt-[]'>vel, maximus justo.</h1>
                </div>
                <div className='bg-green-900 absolute w-[350px] h-[460px] left-[520px] top-[1020px]'>
                    <h1 className='text-2xl font-serif text-white ml-[140px] mt-[40px] font-bold'>Carl</h1>
                    <h1 className='text-2xl font-serif text-white ml-[110px] mt-[5px] font-bold'>Rossman</h1>
                    <img src={OurTeam} alt='' className='ml-[70px] rounded-full h-[350px] w-[200px] mt-[-80px]'/>
                    <h1 className='text-white ml-[50px] mt-[-40px]'>Duis dignissim mi ut laoreet mollis.</h1>
                    <h1 className='text-white ml-[60px] mt-[]'>Nunc id tellus finibus, eleifend mi</h1>
                    <h1 className='text-white ml-[90px] mt-[]'>vel, maximus justo.</h1>
                </div>
                <div className='bg-green-800 absolute w-[350px] h-[460px] left-[892px] top-[1020px]'>
                    <h1 className='text-2xl font-serif text-white ml-[140px] mt-[40px] font-bold'>Carl</h1>
                    <h1 className='text-2xl font-serif text-white ml-[110px] mt-[5px] font-bold'>Rossman</h1>
                    <img src={OurTeam} alt='' className='ml-[70px] rounded-full h-[350px] w-[200px] mt-[-80px]'/>
                    <h1 className='text-white ml-[50px] mt-[-40px]'>Duis dignissim mi ut laoreet mollis.</h1>
                    <h1 className='text-white ml-[60px] mt-[]'>Nunc id tellus finibus, eleifend mi</h1>
                    <h1 className='text-white ml-[90px] mt-[]'>vel, maximus justo.</h1>
                </div>
            <h1 className='text-3xl font-serif font-bold ml-[400px] pt-[400px] '>Ut ultricies imperdiet sodales. Aliquam</h1>
            <h1 className='text-3xl font-serif font-bold ml-[460px] '>fringilla aliquam elementum</h1>

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
        <h1 className='ml-[80px] mt-[90px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/> culpa qui officia deserunt mollit anim id est laborum.</h1>

        <h1 className='ml-[80px] mt-[10px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/> accusantium doloremque laudantium, totam rem aperiam,<br/> eaque ipsa quae ab illo inventore veritatis et quasi architecto <br/>beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem <br/>quia voluptas sit aspernatur aut odit aut fugit, sed quia <br/>consequuntur magni dolores eos qui ratione voluptatem sequi<br/> nesciunt. Neque porro quisquam est, qui dolorem ipsum quia<br/> dolor sit amet, consectetur, adipisci velit, sed quia non numquam <br/>eius modi tempora incidunt ut labore et dolore magnam.</h1>
        <h1 className='ml-[600px] mt-[-395px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/> enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br/> reprehenderit in voluptate velit esse cillum dolor in<br/>reprehenderit in voluptate velit esse cillum dolore eu fug.</h1>
        <div className=" ml-[600px] mt-[15px]">
          <ul class="list-decimal">
            <li>Mauris rhoncus orci in imperdiet placerat. Vestibulum<br/>euismod nisl suscipit</li>
            <li>Cras massa nibh, tincidunt ut eros a, vulputate consequat<br/> odio eniam, quis nostrud exercitation.</li>
            <li>Vestibulum vehicula tempor nulla, sed hendrerit urna<br/> interdum in.</li>
            <li>Aenean accumsan id mi nec semper.</li>
          </ul>
          <div className='grid grid-cols-4   mt-[250px] ml-[-420px] mr-[100px]'>
      {ProductNumberData.map((data, index)=>{
        return(
            <div key={index} className=''>
              <div className=''>
                <h1 className='font-bold text-5xl ml-[20px] space-x-[20px] '>{data.number}</h1>
              <h1 className='font-bold text-lime-700 text-[17px]  mt-[20px]'>{data.title}</h1> 
              <h2 className='mt-[25px] ml-[-20px]'>{data.description}</h2>
              </div>
              
              
            </div>
        )
      })}
    </div> 
      </div>
    
            </div>
    <div className='bg-purple-200 h-[430px] w-full'>
    <div className='absolute mt-[-180px]'>
      <Footer/>
    </div>
    </div>  
    </div>
  )
}

export default aboutUsHero