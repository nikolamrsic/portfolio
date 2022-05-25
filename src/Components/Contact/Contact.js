import React from "react";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaCodepen ,FaRegCopy} from "react-icons/fa"
export default function Contact() {


  
  let [isCopy, setCopy] = useState(false);
  let [isCopyMobile, setCopyMobile] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("nikolamrsic@aol.com")
    setCopy(true)
  }
  const copyMobile = () => {
    navigator.clipboard.writeText("+381677611996")
    setCopyMobile(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setCopyMobile(false)
    }, 2000)
  }, [isCopyMobile])

  useEffect(() => {
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }, [isCopy])
  return (
    <section className="   font-jura flex flex-col items-center relative font-inter text-white px-6 py-6 w-full mx-auto  3xl:max-w-7xl mt-28 text-left bg-grad-img  bg-contain bg-no-repeat bg-right-bottom">
     
     <q className="absolute  bottom-0 right-5 text-3xl opacity-40 text-yellow-50/20  italic hidden md:block">Just practice and you will learn anything</q>

      <div className="md:text-center  py-4">
        <h1 className="text-5xl font-inter font-bold mb-16">Contact me:</h1>
      </div>


      <div className="flex md:flex-row justify-start md:w-10/12 w-full  max-w-7xl  self-center flex-col gap-14">
        <form
          className="md:w-8/12  w-full  max-w-4xl"
          action="https://formsubmit.co/b6d5d3a41797b7e003f1e14e6b558893"
          method="POST"
        >
          <fieldset className="  py-4 px-5 flex flex-col gap-5 rounded-xl">
            <legend className="text-2xl font-bold">Send me a message:</legend>

            <div className="flex gap-8 w-full justify-between">
              <label htmlFor="name" className="text-xl text-gray-300">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                className=" bg-transparent border-b focus:outline-none"
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
                className=" bg-transparent border-b focus:outline-none"
                placeholder="Enter your email here"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className="text-xl mb-3 text-gray-300">
                Message:
              </label>
              <textarea className=" bg-transparent border min-h-[300px] p-3" name="message" rows="10" required></textarea>
            </div>
            <button className="py-2 px-8 self-start bg-teal-700 hover:bg-teal-900 transition-all hover:text-white hover:px-9 transition-all ">Send</button>
          </fieldset>
        </form>

        <div className=" flex-1 relative flex justify-start self-center md:self-auto">
        
          <div className="w-fit">
            <h1 className="text-2xl font-bold mb-5">Personal Contact:</h1>
            <div className="flex flex-col gap-5" >
              <div onClick={copyEmail} className="py-2 px-3  bg-teal-800  hover:bg-teal-900 cursor-pointer ">{isCopy ? "Copyed !" : <span className="flex items-center justify-around">nikolamrsic@aol.com<FaRegCopy/></span> }</div>
              <div onClick={copyMobile} className="py-2 px-3 bg-teal-800  hover:bg-teal-900 cursor-pointer ">{isCopyMobile ? "Copyed !" : <span className="flex items-center justify-around">+381 677 611 996<FaRegCopy/></span> }</div>

              <div className='  w-fit flex gap-5 mt-5'>
                <a href="https://www.linkedin.com/in/nikola-mrsic-design/" rel="noreferrer" target="_blank" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
                  <FaLinkedinIn size="1.5rem" className=" fill-black" />
                </a>
                <a href="https://github.com/nikolamrsic" target="_blank"  rel="noreferrer" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
                  <FaGithub size="1.5rem" className=" fill-black" />
                </a>
                <a href="https://codepen.io/niDzolski" target="_blank" className=" cursor-pointer hover:bg-teal-500  py-3 px-3 bg-white rounded-full">
          <FaCodepen size="1.5rem" className=" fill-black" />
        </a>

              </div>

            </div>
          </div></div>

      </div>


    </section>
  );
}
