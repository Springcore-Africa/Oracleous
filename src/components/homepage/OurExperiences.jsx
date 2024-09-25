import React from 'react'
import { OurExperiencesPalm } from '../../data/OurExperiencesPalm'
import KarnelPalm from '../../assets/karnelPalm.png'
import WhyUs from './WhyUs'

import RedPalm from '../../assets/Red-Palm-.jpg'
import PalmAgr from '../../assets/PalmAgr.jpg'
import shutter from '../../assets/shutterstock.webp'
import white from '../../assets/whitePalm.jpg'
import PalmPeople from '../../assets/PalmPeople.jpg'
import PalmHand from '../../assets/pamlHand.jpg'

function OurExperiences() {
  return (
    <div className='h-[200px] mt-[30px] w-full bg-slate-50'>

    <div className="overflow-hidden whitespace-nowrap mt-[50px]">
      <div className="flex space-x-[20px] animate-marquee">
        <img src={RedPalm} alt="Image 1" className="w-[250px] h-[250px] " />
        <img src={PalmAgr} alt="Image 2" className="w-[250px] h-[250px]" />
        <img src={shutter} alt="Image 3" className="w-[250px] h-[250px]" />
        <img src={white} alt="Image 1" className="w-[250px] h-[250px]" />
        <img src={PalmPeople} alt="Image 2" className="w-[250px] h-[250px]" />
        <img src={PalmHand} alt="Image 3" className="w-[250px] h-[250px]" />
      </div>
    </div>
    
      
    </div>
  )
}

export default OurExperiences