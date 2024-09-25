import React from "react"

function Footer() {

    return (
    <div className="mt-[70px]">
      <div className='text-green-950 text-ul mt-[140px] ml-[540px] text-[25px]'>
        <h1></h1>
      </div>
      <div className="flex space-x-[200px] mt-[100px] font-serif">
      <h1 className="text-[18px] ml-[120px] font-bold font-serif">Contact us<br/>
Curabitur et ligula molestie,<br/> ultricies porta urna.</h1>
      <h1 className="text-[18px] ml-[200px] font-bold font-serif">Ullamcorper</h1>
      <h1 className="text-[18px] font-bold">Our mission</h1>
      </div>
  
      <div className="h-[50px] w-[170px] mt-[30px] ml-[120px] bg-lime-700 hover:bg-lime-600 hover:cursor-pointer ">
        <h1 className="ml-[40px] pt-[10px] text-slate-200">Read more</h1>
      </div>
      
      <div className="flex space-x-[25px] mt-[30px] ml-[120px] text-lime-700">
        <a href="FAQ" className="hover:underline">FAQ</a>
        <a href="Spport" className="hover:underline">Support</a>
        <a href="Useful-info" className="hover:underline">Useful info</a>
      </div>
      <div className=" text-[16px] ml-[585px] mt-[-170px]">
          <ul class="list-decimal">
            <li>Lorem ipsum dolor sit amet<br/> enim. Etiam ullamcorper</li>
            <li>Maecenas malesuada elit<br/> lectus felis ultricies</li>
            <li>Curabitur ligula</li>
            <li>Vestibulum</li>
          </ul>
      </div>
      <h1 className="-[16px] ml-[900px] mt-[-150px]">Lorem ipsum dolor sit amet enim.<br/> Etiam ullamcorper. Suspendisse a<br/> pellentesque dui, non felis.<br/> Maecenas malesuada elit lectus<br/> felis, malesuada ultricies. Curabitur<br/> et ligula. Ut molestie enim.
      </h1>
      <div className="ml-[900px] mt-[10px] text-lime-700 hover:underline">
        <a href="Read more">Read more</a>
      </div>
      <div className="flex space-x-[10px] mt-[100px] text-[15px] font-bold">
        
        <h1 className=" ml-[550px]">Powered by <a href="Spring Core Africa" className="text-lime-700 hover:underline">Spring Core Africa </a></h1>
      </div>
    </div>
  
    )
  }
  
  export default Footer