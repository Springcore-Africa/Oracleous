import React from 'react'
import { OurExperiencesPalm } from '../../data/OurExperiencesPalm'
import KarnelPalm from '../../assets/karnelPalm.png'
import WhyUs from './WhyUs'

function OurExperiences() {
  return (
    <div className='h-[3000px] w-full bg-slate-50'>
        <h1 className='font-bold text-2xl pl-[250px] pt-[380px] font-serif'>Lorem ipsum dolor sit consect eiusmod</h1>
        <div className='h-[50px] w-[180px] bg-lime-600 rounded-md absolute left-[900px] top-[1030px] hover:bg-lime-500 hover:cursor-pointer'>
            <h1 className='text-white ml-[40px] mt-[10px]' >Read more </h1>
        </div>
        <h1 className='font-Bolder pt-[220px] text-8xl pl-[180px] font-serif'>48</h1>
        <h1 className='font-serif pt-[15px] pl-[200px]'>years of<br/>experience</h1>
        <div className='h-[395px] w-[800px] bg-purple-100 absolute top-[1190px] left-[370px]'>
            <div className='text-3xl font-bold font-serif pl-[50px] pt-[80px] pr-[50px]'>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus sed iaculis dolor, non congue ligula mus.</div>
        </div>
        <div className='flex space-x-[20px] absolute top-[1550px] '>
      {OurExperiencesPalm.map((data, index)=>{
        return(
            <div key={index} className='h-[450px] w-[436px]'> 
              <img src={data.image} alt="" className='w-[600px] h-[500px] mt-[40px]' /> 
            </div>
        )
      })}
      </div>
      <div className='h-[35px] w-[4px] bg-lime-600 left-[145px] absolute top-[2230px]'></div>
      <div className='h-[350px] w-[810px] mt-[654px] ml-[350px] bg-purple-100'>
        <h1 className='font-serif ml-[50px] mr-[50px] pt-[80px] text-[18px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</h1>
      </div>
      <div className='h-[60px] w-[250px] bg-lime-600 ml-[550px] hover:cursor-pointer hover:bg-lime-500'>
        <h1 className='text-white ml-[90px] pt-[15px] '>Read more</h1>
      </div>
      <div className='KarnelPalm'>
        <img src={KarnelPalm} alt='' className='h-[250px] w-[250px] ml-[900px] mt-[-200px]'/>
      </div>
      <WhyUs/>
    </div>
  )
}

export default OurExperiences