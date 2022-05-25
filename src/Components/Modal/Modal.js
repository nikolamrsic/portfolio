import React, { Fragment, useRef ,useState,useEffect} from 'react'
import ReactDOM  from 'react-dom';
import { IoIosClose } from "react-icons/io"
import { useSelector,useDispatch, } from 'react-redux';
import { closeModal } from '../Store/ModalReducer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Modal() {
   
  let store=useSelector(store=>store.ModalReducer)
  let dipatch=useDispatch()
   
  const close=()=>{
    dipatch(closeModal())
  }


  
  
  let ref=useRef()


    return ReactDOM.createPortal(
      
      <motion.dialog initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} ref={ref} className='bg-white w-full max-w-xl  py-12  bg-gradient-to-br from-teal-700 to-black px-3 fixed z-50 top-10 a' open={true}>
        <button onClick={close} className='absolute top-3 right-3 p-3 hover:bg-teal-900 transition-colors '><IoIosClose className=' h-8 w-8 fill-white'/></button>
         <form
           className="  w-full  max-w-4xl"
           action="https://formsubmit.co/b6d5d3a41797b7e003f1e14e6b558893"
           method="POST"
         >
           <fieldset className="  py-4 px-5 flex flex-col gap-5 rounded-xl">
             <legend className="text-2xl font-bold text-gray-300">Send me a message:</legend>
 
             <div className="flex gap-8 w-full justify-between">
               <label htmlFor="name" className="text-xl text-gray-300">
                 Your name:
               </label>
               <input
                 type="text"
                 id="name"
                 className=" bg-transparent border-b focus:outline-none text-gray-300"
                 placeholder="Enter your email here"
               />
             </div>
 
             <div className="flex gap-8 w-full justify-between">
               <label htmlFor="email" className="text-xl text-gray-300">
                 Email:
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 className=" bg-transparent border-b focus:outline-none text-gray-300"
                 placeholder="Enter your email here"
               />
             </div>
             <div className="flex flex-col ">
               <label htmlFor="email" className="text-xl mb-3 text-gray-300">
                 Message:
               </label>
               <textarea className=" bg-transparent border min-h-[300px] text-gray-300 p-3" name="message" rows="10" required></textarea>
             </div>
             <button className="py-2 px-8 self-start bg-teal-700 hover:bg-teal-900 transition-all hover:text-white hover:px-9 transition-all ">Send</button>
           </fieldset>
         </form>
      </motion.dialog >
      ,
      document.getElementById("modal")
     
   )

  
}
