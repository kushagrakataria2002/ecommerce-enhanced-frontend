import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">E-Shop</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <IoIosHome className='text-lg text-black mr-1' />
            <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
            <IoCartSharp className='text-lg text-black mr-1' />
            <Link to={'/cart'} className="mr-5 hover:text-gray-900">Cart</Link>
          </nav>
        </div>
      </header>

      <hr />

    </>
  )
}

export default Header