import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function DetiledSkilss({ open }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          key="modal"
           initial={{opacity:0}}
           animate={{marginBottom:'150px',opacity:1,}}
           exit={{marginBottom:"-250px",opacity:0}}
          className="w-full  grid md:grid-cols-3  grid-cols-1 my-20  gap-x-9 gap-y-9  px-5 py-3"
        >
          <div>
            <h2 className="text-2xl font-medium text-gray-50 mb-7">
              Design stuff:
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Photoshop
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Figma
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Ilustarator
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-50  mb-7">
              Devlopment stuff:
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Html
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Css
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Sass
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Tailwind
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50 hover:bg-teal-900 cursor-pointer">
                JavaScrtip
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                React
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                MotionFramer
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-50  mb-7">
              Also familiar::
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                SQL
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                Enterprise Architect
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                PostgreSQL
              </span>
              <span className="rounded-full bg-teal-500 py-2 px-6 font-inter text-gray-50  hover:bg-teal-900 cursor-pointer">
                GeoServer
              </span>
            
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
