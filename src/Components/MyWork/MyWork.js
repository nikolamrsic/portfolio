import React from 'react'
import PS from './../IMGS/ps.png'
import FG from './../IMGS/f2.png'
import { useEffect,useState,useRef} from 'react'
export default function MyWork() {




  return (
    <div  className=' w-fit m-auto py-5 px-3 md:gap-10 gap-14 flex flex-col md:flex-row justify-center items-center'>
      <a href='https://nikolamrsic.github.io/playsimo/' target="_blank"> <img src={PS} alt='Mp3 Player Link' className=' w-40 grayscale hover:grayscale-0 transition-all '></img></a>
      <a href='https://nikolamrsic.github.io/freegames2play/' target="_blank"> <img src={FG} alt='Mp3 Player Link'  className=' w-40 grayscale hover:grayscale-0 transition-all '></img></a>
    </div>
  )
}
