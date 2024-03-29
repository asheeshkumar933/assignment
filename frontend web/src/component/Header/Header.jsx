import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faHeart,
  faBriefcase,
  faUser,
  faHandsBound,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0">

        {/*  ********************   Top Header section Start Here********************************* */}
        <div className=" bg-black  text-red-900 flex justify-evenly">
          <p className=" hidden md:block">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className=" hidden md:block">Lorem ipsum dolor sit amet.</p>
        </div>
        {/* *********************  Top Header section ends here   ************************* */}

{/* ********************** Header section  ****************** */} 
        <div className="flex justify-between  items-center gap-8 bg-slate-50">
          <div className=" grid grid-cols-2">
            <Link to="/" className="p-3 ml-16">
              <FontAwesomeIcon icon={faHandsBound} />
            </Link>
            <Link to="/" className="p-3 ml-10 md:hidden">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>

          <Link to="/" className="p-3 ml-16">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex gap-6 align-middle items-center cursor-pointer ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBriefcase} />
            <span className=" hidden md:block">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <select className="cursor-pointer hidden md:block" name="" id="">
              <option value="">ENG</option>
            </select>
          </div>
        </div>

        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
            {/* <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link> */}
           
            <div
              className="   justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              id="mobile-menu-2"
            >
              <ul className="flex  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/card"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
