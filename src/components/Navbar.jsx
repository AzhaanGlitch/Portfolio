import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 trasition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex item-center space-x-2">
        <img src = {Logo} alt="logo" className="w-8 h-8"/>
        <div className="text-2xl font-bold text-white hidden sm:block">
          Azhaan Ali Siddiqui
        </div>
      </div>
      <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <button onClick={() => setMenuOpen(true)}
          className="text-white text-3xl focus:outline-none"
          aria-label="open Menu"
          >
          <FiMenu/>
        </button>
      </div>
      <div className="hidden lg:block">
        <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-500 text white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">
          Reach Out
        </a>

      </div>
    </nav>
    <OverlayMenu isOpen = {menuOpen} onClose = {() => setMenuOpen(false)}/>
    </>
  )
}