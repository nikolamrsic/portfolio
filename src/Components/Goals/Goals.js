import React from "react";
import { animate, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
export default function Goals() {
  let [inView, setInvView] = useState(false);



  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={() => {
        setInvView(true);
      }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex font-jura  flex-col m-auto  my-20    w-11/12 bg-gray00-900 py-4 text-left  lg:max-w-6xl"
    >
      <div className="flex-1 max-w-5xl flex-col-reverse md:flex-row flex items-center justify-between ">
        <div className="flex flex-col gap-7 px-5 py-3 md:w-7/12">
          <h1 className="font-inter text-5xl font-semibold text-gray-50">
            What can you expect from me?
          </h1>
          <ul className="text-gray-400 text-2xl list-disc ">
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Responsibility
            </motion.li>
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Dedication to work
            </motion.li>
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Team Spirit
            </motion.li>
          </ul>
        </div>

        <div className="px-5   mb-10 md:mb-0">
          <svg
            width="266"
            height="98"
            viewBox="0 0 266 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              viewport={{ once: true }}
              d="M3 60.1432C3.5963 65.1661 2.90746 93.6511 3.35968 94.9097M3.35968 94.9097C3.74595 95.9858 10.4955 87.2619 17.0961 78.2468M3.35968 94.9097C13.8075 30.2121 48.8104 28.9817 74.7823 30.7015C106.198 32.7821 129.489 46.1035 155.139 52.2695C192.795 61.3223 242.191 64.6801 263 3.00002"
              stroke="white"
              strokeWidth="5.58817"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <hr className=" outline outline-1 outline-dotted opacity-10 my-6" />
      <div className="flex-1 items-center  flex-col-reverse md:flex-row   flex justify-between  text-left">
        <div className="  flex justify-center flex-1  mt-10 md:mt-0">
          <svg
            width="189"
            height="169"
            viewBox="0 0 189 169"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={{ pathLength: inView ? 1 : 0 }}
              initial={{ pathLength: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              viewport={{ once: true }}
              d="M23.4318 29.373C22.4229 22.8558 21.6089 16.2153 20.2546 9.76042C19.9368 8.2457 19.5913 4.13198 18.0474 3.2735C16.0921 2.18668 13.9993 4.60201 12.9463 5.91502C9.79901 9.84127 7.51889 14.9975 5.17171 19.4544C4.7011 20.3474 2.76495 23.0417 3.02368 24.1364M18.0509 3.2735C15.3186 15.1138 15.6764 27.9616 15.8201 40.0507C16.1112 64.5883 10.2066 126.109 30.7481 144.188C42.9829 154.956 64.1584 154.141 79.26 155.45C114.473 158.503 150.661 165.908 186 166"
              stroke="white"
              strokeWidth="5.58817"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-7 px-5 py-3 md:w-7/12  max-w-5xl">
          <h1 className="font-inter text-5xl font-semibold text-gray-50">
            What i expect from u ?
          </h1>
          <ul className="text-gray-400 text-2xl list-disc ">
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Knowledge sharing
            </motion.li>
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Collegiality
            </motion.li>
            <motion.li
              whileHover={{ scale: 0.8 }}
              className="border-b border-transparent hover:border-teal-400 w-fit py-2 px-3 cursor-pointer"
            >
              Triendly environment
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
