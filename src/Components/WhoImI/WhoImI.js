import React, { useState ,useEffect,useRef} from "react";
import { motion } from "framer-motion";

export default function WhoImI() {
  let [inView, setInvView] = useState(false)


  return (
    <motion.section
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={() => {
        setInvView(true)
      }}
      className="m-auto  relative z-10  my-16 flex w-full flex-col items-center md:w-11/12 md:flex-row max-w-6xl text-left font-jura ">
      
      <motion.div className="flex flex-col gap-7 px-5 py-3 md:w-7/12">
        <h1 className="font-inter text-5xl font-semibold text-gray-50">
          Who im I ?
        </h1>
    
        <p className="text-xl  tracking-wide leading-relaxed text-gray-400">
          My name is Nikola,<br/>
          I am 25 years old. I am a student of Geoinformatics at
          Faculty of Technical Sciences in Novi Sad.<br/>
          I have a great interest and passion for Design and Web Development.
          During my studies, I got acquainted with different programming languages, but javascript attracted the most attention.<br/>
          I get the most satisfaction when I design a project and then turn it into reality.<br/>
          The goal <span className="text-teal-800">goal</span> of my career is to be  <span className="text-teal-800">full stack developer</span>  and  <span className="text-teal-800">UI/UX</span> deigner.
        </p>
      </motion.div>

      <div className=" relative">
        <svg
          className=" absolute  left-1/3 z-20 top-12 stroke-slate-50"
          width="136"
          height="258"
          viewBox="0 0 136 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            d="M58.9423 165.15C58.8615 146.563 58.2589 142.641 72.0955 128.315C96.4449 103.11 132.558 106.672 132.406 62.4166C132.25 16.8848 88.1956 -6.94307 43.6129 8.89814C3.60677 23.1134 -6.28618 73.9663 14.7955 97.7753"
            stroke="#FFDCDC"
            strokeWidth="7"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            d="M63.077 234.697C59.9749 234.968 56.9133 235.73 54.4068 237.681C52.4993 239.162 51.0331 241.027 49.9901 243.206C49.2215 244.808 48.4559 246.577 48.4098 248.383C47.9684 265.504 77.0931 253.709 66.6514 241.474"
            stroke="#FFDCDC"
            strokeWidth="2"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="overflow-hidden opacity-40 rounded-full blur-3xl animate-pulse">
          <img
            alt="Rotating Img"
            draggable="false"
            loading="lazy"
            className="h-full w-full "
            src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </motion.section>
  );
}
