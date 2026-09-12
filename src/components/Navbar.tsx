import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/logo-text.png";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menuAppeared, setMenuAppear] = useState(false);
  const handleMenuAppear = () => {
    setMenuAppear(!menuAppeared);
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4 px-3 md:px-3 lg:px-0">
          <CiMenuBurger
            onClick={handleMenuAppear}
            className="w-10 text-2xl cursor-pointer md:hidden lg:hidden"
          />
          <img
            className="ml-5 md:mx-0 lg:mx-0 w-[135px] h-[35px]"
            src={Logo}
            alt="Logo"
          />
          <ul className="hidden md:flex lg:flex justify-between gap-4 items-center text-[14px] text-[#475569]">
            <li className="text-[#DB2777] font-medium">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex gap-3">
            <button className="text-[#334155] font-bold md:font-medium lg:font-medium cursor-pointer hoverStyle">
              Sign In
            </button>
            <button className="text-[#FFFFFF] bg-[#D91B7E] hover:bg-[#f52892] rounded-3xl md:font-semibold lg:font-semibold px-5 py-2 hoverStyle cursor-pointer">
              Sign Up
            </button>
          </div>
        </nav>

        {menuAppeared && (
          <div className="fixed top-0 bg-white h-full py-7 pl-5 pr-10 text-[14px] text-[#475569] md:hidden lg:hidden">
            <RxCross1
            onClick={handleMenuAppear}
            className="text-2xl cursor-pointer mb-5"
          />
            <ul className="flex flex-col gap-2">
              <li className="text-[#DB2777] font-medium border-b border-gray-300 my-1">
                <a href="">Home</a>
              </li>
              <li className="border-b border-gray-300 my-1">
                <a href="">Technologies</a>
              </li>
              <li className="border-b border-gray-300 my-1">
                <a href="">Projects</a>
              </li>
              <li className="border-b border-gray-300 my-1">
                <a href="">About</a>
              </li>
              <li className="border-b border-gray-300 my-1">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
