import {useState} from 'react';
import { RiMoonLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

function Navbar() {
    const [menu, Setmenu] = useState(false);
  return (
    <>
        <nav
      className="md:w-[70vw] h-16 md:mx-auto flex items-center justify-around md:start md:gap-10"
    >
      <h1
        className="text-3xl font-extrabold text-blue-700 md:w-[20vw] font-['Poppins']"
      >
        Digi<span className="text-black">Marketing</span>
      </h1>
      <div
        className="hidden md:block md:flex md:items-center md:w-[60vw] md:justify-between"
      >
        <div className="flex gap-10 font-['Poppins']">
          <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
            >Home</a
          >
          <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
            >About</a
          >
          <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
            >Services</a
          >
          <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
            >Pages</a
          >
          <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
            >contact</a
          >
        </div>
        <div className="flex gap-10 items-center">
          <i
            className="fa-solid fa-magnifying-glass text-[16px] bg-grey-300 p-3 bg-gray-200 rounded-full"
          ></i>
          <a href="#" className="bg-blue-900 text-white px-9 py-3 rounded"
            >Purchase</a
          >
        </div>
      </div>
      <RiMoonLine className="fa-regular fa-moon text-2xl"></RiMoonLine>
      <FaBars
        onClick={() => Setmenu(!menu)}
        className="text-4xl bg-blue-900 text-white py-1 px-2 rounded md:hidden block"
      ></FaBars>
    </nav>
    {
        menu ?
         <div
      className="abc md:hidden flex items-center gap-10 flex-col justify- bg-blue-200 p-5"
    >
      <div className="flex flex-col gap-10 font-['Poppins']">
        <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
          >Home</a
        >
        <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
          >About</a
        >
        <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
          >Services</a
        >
        <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
          >Pages</a
        >
        <a href="#" className="text-[16px] hover:text-red-500 hover:font-semibold"
          >contact</a
        >
      </div>
      <div className="flex flex-col gap-10 items-center">
        <i
          className="fa-solid fa-magnifying-glass text-[16px] bg-grey-300 p-3 bg-gray-200 rounded-full"
        ></i>
        <a href="#" className="bg-blue-900 text-white px-9 py-3 rounded"
          >Purchase</a
        >
      </div>
    </div>
    :<div></div>
    }
    </>
  )
}

export default Navbar