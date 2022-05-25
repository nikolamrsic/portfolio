import React from 'react'
import avatar from "./../../img/82596940_3156849621002563_6521214734333640704_n(1).png"
import HeroImg from "./../IMGS/230092839_105388811786621_7368783307649459150_n.jpg"
import { useEffect } from 'react'
import { FaLinkedinIn,FaGithub,FaCodepen } from "react-icons/fa"
 


export default function Heder() {

 
  return (
    <section className="relative flex h-96 w-full items-end justify-center font-jura  overflow-visible  pb-14  bg-cover bg-no-repeat  ">
      <div className='absolute top-4 right-4 z-30  w-fit flex gap-5'>
        <a href="https://www.linkedin.com/in/nikola-mrsic-design/" target="_blank" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
          <FaLinkedinIn size="1.5rem"/>
        </a>
        <a href="https://github.com/nikolamrsic" target="_blank" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
          <FaGithub size="1.5rem"/>
        </a>

     

        <a href="https://codepen.io/niDzolski" target="_blank" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
          <FaCodepen size="1.5rem"/>
        </a>
       
      </div>
      <div className="absolute z-30 top-3 left-5">
        <div className='p-3 font-bold text-white text-xl   font-jura rounded-full font-bold '>NM</div>


      </div>
      <div className="absolute z-10  h-full   w-full animate-pulse  overflow-visible bg-hero-img bg-cover  opacity-60 backdrop-blur-3xl">
      
      </div>
      <div className="absolute select-none z-20 h-44 w-44 translate-y-20 overflow-hidden rounded-full  outline-dashed outline-offset-8 outline-blue-50">
        <img alet="Avatar" draggable="false" loading="lazy" className="select-none h-full  object-top  w-full object-cover" src={avatar} />
      </div>
    </section>
  )
}
