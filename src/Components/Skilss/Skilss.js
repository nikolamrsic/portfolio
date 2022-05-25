import React, { useState,useEffect,useRef } from 'react'
import DetiledSkilss from '../DetiledSkilss/DetiledSkilss'
import { motion, AnimatePresence } from "framer-motion"
export default function Skilss() {

    let [open,setOpen]=useState(false)



    const toggleOpen=()=>{
        setOpen(!open)
    }
  return (
    <section  className=" my-24 font-inter w-full  max-w-8xl font-jura  flex flex-col gap-5 m-auto b w-11/12">
  <div className=" self-center">
    <h1 className="font-inter text-5xl font-semibold text-gray-50 text-center mb-6">My Skilss</h1>
  <div className="flex flex-col md:flex-row gap-5">
    <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50 hover:bg-teal-900 cursor-pointer">Development</span>
    <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">Design</span>
    <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">Creativity</span>
  </div>
  </div>
 
      <DetiledSkilss open={open}/>
 
  

  <button onClick={toggleOpen} className="text-sm border-b border-transparent hover:border-teal-400 px-5 py-2 s text-teal-400  self-center mb-4 w-fit">{open ? 'show less' : 'show more'}</button>

</section>
  )
}
