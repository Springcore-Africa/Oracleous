import React from 'react'
import productHeroPalm from '../../assets/productHeroPalm.jpg'
import { ProductIconData } from '../../data/ProductIconData'
import ProductKarnel from '../../assets/ProductKarnel.png'
import ProductPalm from '../../assets/ProductPalm.png'
import ProductKarnel2 from '../../assets/ProductKarnel2.png'
import { ProductNumberData } from '../../data/ProductNumberData'
import Footer from '../general/Footer.jsx'

function productHero() {
  return (
    <div>
        <div>
            <img src={productHeroPalm} alt='' className='w-full h-[520px]'/>
            <h1 className='text-6xl font-bold ml-[540px] mt-[-270px] text-white font-serif'>Products</h1>
        </div>
        <div className='h-[750px]  w-full bg-green-950'>
        <div className='flex space-x-[80px] '>
      {ProductIconData.map((data, index)=>{
        return(
            <div key={index} className=' h-[500px] w-[400px] ml-[200px] mt-[250px]'>
              <img src={data.image} alt="" className='w-[150px] h-[150px] ml-[30px] mt-[40px]' /> 
              <h1 className='font-bold text-2xl  mt-[30px] text-slate-200 font-serif'>{data.title}</h1> 
              <h2 className='text-slate-100 ml-[-20px] mr-[50px] mt-[25px]'>{data.description}</h2>
            </div>
        )
      })}
    </div>
        </div>
        <div className='bg-slate-200 h-[2000px] w-full'>
                <img src={ProductKarnel} alt='' className='h-[350px] w-[350px] left-[200px] absolute top-[1200px]' />
                <h1 className='text-6xl font-serif font-bold ml-[650px] pt-[150px]'>Palm fruit</h1>
                <h2 className='text-[20px] font-bold ml-[650px] mt-[30px]'>Mauris rhoncus orci in imperdiet placerat. Vestibulum <br/> euismod nisl suscipit.</h2>
                <h1 className='text-[15px] ml-[650px] mt-[20px]'>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet<br/> elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas <br/>justo, vitae molestie ante. Integer magna purus, commodo pretium.</h1>
                <div className='h-[60px] mt-[30px] w-[200px] ml-[650px] bg-lime-700 hover hover:bg-lime-600 hover:cursor-pointer'>
                    <h1 className='text-white pt-[18px] ml-[53px]'>Read more</h1>
                   
                </div>
                <img src={ProductPalm} alt='' className='h-[350px] w-[350px] ml-[850px]' />
                <h1 className='text-6xl font-serif font-bold ml-[200px] mt-[-240px]'>Memories</h1>
                <h2 className='text-[20px] font-bold ml-[200px] mt-[30px]'>Mauris rhoncus orci in imperdiet placerat. Vestibulum <br/> euismod nisl suscipit.</h2>
                <h1 className='text-[15px] ml-[200px] mt-[20px]'>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet<br/> elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas <br/>justo, vitae molestie ante. Integer magna purus, commodo pretium.</h1>
                <div className='h-[60px] mt-[30px] w-[200px] ml-[200px] bg-lime-700 hover hover:bg-lime-600 hover:cursor-pointer'>
                    <h1 className='text-white pt-[18px] ml-[53px]'>Read more</h1>
                </div> 
                <img src={ProductKarnel2} alt='' className='h-[350px] w-[350px] left-[190px] absolute top-[2150px]' />
                <h1 className='text-6xl font-serif font-bold ml-[650px] pt-[150px]'>Yes Us!!!</h1>
                <h2 className='text-[20px] font-bold ml-[650px] mt-[30px]'>Mauris rhoncus orci in imperdiet placerat. Vestibulum <br/> euismod nisl suscipit.</h2>
                <h1 className='text-[15px] ml-[650px] mt-[20px]'>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet<br/> elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas <br/>justo, vitae molestie ante. Integer magna purus, commodo pretium.</h1>
                <div className='h-[60px] mt-[30px] w-[200px] ml-[650px] bg-lime-700 hover hover:bg-lime-600 hover:cursor-pointer'>
                    <h1 className='text-white pt-[18px] ml-[53px]'>Read more</h1>
                   
                </div>
                <div className='grid grid-cols-4 gap- space-x-[-10px] mt-[300px] ml-[220px] mr-[200px]'>
      {ProductNumberData.map((data, index)=>{
        return(
            <div key={index} className=''>
              <div className=''>
                <h1 className='font-bold text-5xl ml-[20px] space-x-[30px] '>{data.number}</h1>
              <h1 className='font-bold text-lime-700 text-[17px]  mt-[20px]'>{data.title}</h1> 
              <h2 className='mt-[25px] ml-[-20px]'>{data.description}</h2>
              </div>
              
              
            </div>
        )
      })}
    </div>
        </div>
        <div className='h-[500px] w-full bg-purple-200 pt-[100px] '>
            <div className='mt-[-220px]'>
            <Footer className='mt-[100px]'/>
            </div>
        </div>
        
            
    </div>
  )
}

export default productHero