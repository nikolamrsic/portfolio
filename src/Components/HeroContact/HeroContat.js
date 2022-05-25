
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {closeModal} from '../Store/ModalReducer';
import { openModal } from '../Store/ModalReducer';
import {AnimatePresence } from 'framer-motion'
import Modal from '../Modal/Modal';
export default function HeroContat() {
   
  let store=useSelector(store=>store.ModalReducer)
  let dipatch=useDispatch()

 

  const changeOpen=(e)=>{
 
  dipatch(openModal())
  }

  return (
    <section className="  font-jura  mt-16 flex flex-col items-center   z-20 relative text-center font-inter  ">
  <div className="mb-4 flex flex-col gap-3">
    <h1 className="text-3xl text-gray-50">Nikola Mrsic</h1>
    <h2 className="text-4xl font-medium text-teal-500">Developer & Designer</h2>
  </div>
  <button onClick={changeOpen} className=' bg-teal-400 text-black px-5 py-3 my-12  font-inter hover:bg-teal-900 transition-all hover:text-white hover:px-9 transition-all'>Contact me</button>
 
 
</section>
  )
}
