import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 border-y  ">
      <div className="  mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className=" flex flex-col md:flex-row  md:justify-evenly ">
          <div className=" grid grid-cols-2   gap-5 sm:gap-6 sm:grid-cols-3">
            <div className="md:hidden flex-wrap flex-col ">
              <div className=" text-gray-600">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  BE THE FIRST KNOW
                </h2>
                <p>
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  delectus.
                </p>
                <input
                  className="mt-10 p-1 text-gray-600"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your mail.."
                />
                <label
                  className="p-4 ml-4 cursur-pointer  border-white"
                  htmlFor="email"
                >
                  email
                </label>
              </div>

              <hr className=" my-6 border-gray-400 sm:mx-auto lg:my-8 md:hidden" />

              <div className="  p-4 ml-80 text-gray-700 grid grid-flow-col">
                <h2 className="mb-10  text-sm font-semibold text-white uppercase">
                  Callus
                </h2>
                <div className="">
                  <p> +9189779889 </p>
                  <p>googlegoogle@gmail.com</p>
                </div>
                <p className="text-xl text-white mt-2  mb-2 font-bold">
                  CURRENCY
                </p>
                <div className="text-white  flex flex-row">
                  <Link to="#" className="text-gray-500 ">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </Link>
                  <p className="ml-2  ">USD</p>
                </div>
              </div>
            </div>

            <div className=" hidden md:block text-gray-600">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                BE THE FIRST KNOW
              </h2>
              <p>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                delectus.
              </p>
              <input
                className="mt-10 p-1 text-gray-600"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail.."
              />
              <label
                className="p-4 ml-4 cursur-pointer m-3 border-solid border-slate-50"
                htmlFor="email"
              >
                email
              </label>
            </div>

            <div className=" hidden md:block p-4 ml-80 text-gray-700">
              <h2 className="mb-10  text-sm font-semibold text-white uppercase">
                Contactus
              </h2>
              <p> +9189779889</p>
              <p>googlegoogle@gmail.com</p>
              <p className="text-xl text-white mt-2  mb-2 font-bold">
                CURRENCY
              </p>
              <div className="text-white  flex flex-row">
                <Link to="#" className="text-gray-500 ">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </Link>
                <p className="ml-2  ">USD</p>
              </div>

              <span>googlegoogle@gmail.com Loremipsumdolorsitamet.</span>

             
              <div className="mb-5 text-gray-700">
                <h1> metamouse.com </h1>
              </div>
             
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
