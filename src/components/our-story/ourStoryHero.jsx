import React from 'react'
import OurStoryHeroPic from '../../assets/ourStoryHeroPic.webp'
import { OurExperiencesPalm } from '../../data/OurExperiencesPalm'
import OurStoryPalm from '../../assets/ourStoryPalm.jpg' 
import whyUsPalm from '../../assets/whyUsPalm.jpg'
import Footer from '../general/Footer'


function ourStoryHero() {
  return (
    <div>
      <img src={OurStoryHeroPic} alt=''className='w-full h-[650px]'/>
      <div className='h-[950px] w-full bg-green-950 '>
        <h1 className='font-bold text-[40px] ml-[250px] mt-[-130px] text-white font-serif '>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud<br/> exercitation.</h1>
        <div className='flex space-x-[120px] ml-[250px] mt-[70px]'>
        <h1 className='text-white'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel<br/> justo cursus, faucibus lorem eget, egestas<br/> eros. Maecenas eleifend erat at justo <br/>fringilla imperdiet id ac magna. Suspendisse<br/> vel facilisis odio, at ornare nibh. In malesuada,<br/> tortor eget sodales mollis, mauris lectus hendrerit purus,<br/> porttitor finibus eros lorem eget mauris.<br/> Curabitur lacinia enim at ex blandit, <br/>vel pellentesque odio elementum.</h1>
        <h1 className='text-white'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel <br/>justo cursus, faucibus lorem eget, egestas <br/>eros. Maecenas eleifend erat at justo<br/> fringilla imperdiet id ac magna.Suspendisse <br/>vel facilisis odio, at ornare nibh. In malesuada,<br/> tortor eget sodales mollis, mauris lectus hendrerit purus, <br/>porttitor finibus eros lorem eget mauris.<br/> Curabitur lacinia enim at ex blandit,<br/> vel pellentesque odio elementum.</h1>
        </div>
          <div className='h-[8px] w-[250px] mt-[70px] bg-lime-700 ml-[530px]'>

          </div>
      </div>
      <div className='bg-purple-200 h-[2650px] w-full'>
      <div className='flex space-x-[20px]  '>
      {OurExperiencesPalm.map((data, index)=>{
        return(
            <div key={index} className='h-[450px] w-[436px] mt-[-150px]'> 
              <img src={data.image} alt="" className='w-[600px] h-[500px]' /> 
            </div>
        )
      })}
      </div>
      <div className='bg-purple-100 mt-[190px] w-[1130px] ml-[120px] h-[680px]'>
        <h1 className='text-3xl pt-[80px] ml-[70px] font-bold font-serif'>Lorem ipsum dolor sit ametum consectetur adipisicing<br/> elit sed do eiusmod incidid unt magna nim ad minim<br/> veniam nascetur ridiculus mus.</h1>
        <h1 className='text-8xl ml-[70px] font-bold font-serif mt-[80px]'>48</h1>
        <h1 className='ml-[70px] mt-[20px]'>Years of<br/> Experience</h1>
        <div className='bg-lime-700 h-[60px] w-[60px] ml-[300px] mt-[-150px] rounded-md'>
           <h1 className='text-white text-5xl ml-[12px] pt-[5px]'>D</h1>
        </div>
        <h1 className='ml-[370px] mt-[-58px]'>uis dignissim mi ut laoreet mollis.<br/> Nunc id tellus finibus, eleifend mi vel,<br/> maximus justo. Maecenas mi tortor,</h1>
        <h1 className='ml-[300px]'>pellentesque a aliquam ut, fringilla eleifend<br/> lectus. Maecenas ultrices tellus sit amet sem <br/>placerat tempor. Maecenas eget arcu <br/>venenatis, sagittis felis sit amet, dictum nisl. <br/>Orci varius natoque penatibus et magnis dis<br/> parturient montes, nascetur ridiculus mus.<br/> Phasellus vitae vulputate elit. Fusce interdum<br/> justo quis libero ultricies laoreet.</h1>
        <h1 className='ml-[680px] mt-[-267px]'>Duis dignissim mi ut laoreet mollis. Nunc id<br/> tellus finibus, eleifend mi vel, maximus justo. <br/>Maecenas mi tortor, pellentesque a aliquam <br/>ut, fringilla eleifend lectus. Maecenas ultrices <br/>tellus sit amet sem placerat tempor.<br/> Maecenas eget arcu venenatis, sagittis.<br/>

            Orci varius natoque penatibus et magnis dis<br/> parturient montes, nascetur ridiculus mus. <br/>Phasellus vitae vulputate elit. Fusce interdum<br/> justo quis libero ultricies laoreet.</h1>
      </div>
        <img src={OurStoryPalm} alt='' className='w-[1130px] h-[450px] ml-[120px]'/>
      <div className='bg-purple-100 w-[1130px] ml-[120px] h-[680px]'>
        <h1 className='text-3xl pt-[80px] ml-[70px] font-bold font-serif'>Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet<br/> ante eget hendrerit posuere</h1>
        <div className='bg-lime-700 h-[60px] w-[60px] ml-[70px] mt-[80px] rounded-md'>
           <h1 className='text-white text-5xl ml-[15px] pt-[5px]'>L</h1>
        </div>
        <h1 className='ml-[140px] mt-[-58px]'>uis dignissim mi ut laoreet mollis.<br/> Nunc id tellus finibus, eleifend mi vel,<br/> maximus justo. Maecenas mi tortor,</h1>
        <h1 className='ml-[70px]'>pellentesque a aliquam ut, fringilla eleifend<br/> lectus. Maecenas ultrices tellus sit amet sem <br/>placerat tempor. Maecenas eget arcu <br/>venenatis, sagittis felis sit amet, dictum nisl. <br/>Orci varius natoque penatibus et magnis dis<br/> parturient montes, nascetur ridiculus mus.<br/> Phasellus vitae vulputate elit. Fusce interdum<br/> justo quis libero ultricies laoreet.</h1>
        <h1 className='ml-[450px] mt-[-267px]'>Duis dignissim mi ut laoreet mollis. Nunc id<br/> tellus finibus, eleifend mi vel, maximus justo. <br/>Maecenas mi tortor, pellentesque a aliquam <br/>ut, fringilla eleifend lectus. Maecenas ultrices <br/>tellus sit amet sem placerat tempor.<br/> Maecenas eget arcu venenatis, sagittis.<br/>

            Orci varius natoque penatibus et magnis dis<br/> parturient montes, nascetur ridiculus mus. <br/>Phasellus vitae vulputate elit. Fusce interdum<br/> justo quis libero ultricies laoreet.</h1>
      </div>
     
      
      </div>
      <div className='bg-purple-100 h-[730px] w-full'>

      </div>
    
      <div className='bg-green-950 h-[450px] w-[700px] ml-[120px] mt-[-930px]'>
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
    <div className='absolute top-[4230px]'>
    <Footer/>
    </div>
    </div>
  )
}

export default ourStoryHero