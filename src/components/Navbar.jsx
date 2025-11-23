import { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "/assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        if (timerId.current) clearTimeout(timerId.current);
      } else {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 bg-black/30 backdrop-blur-md ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Azhaan Ali Siddiqui
          </div>
        </div>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-orange-400 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu - Only Visible Below 768px */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* CTA Button - Desktop Only */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#C69C00] via-[#C84F00] to-[#9B1D1A] text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      {/* Overlay Menu - Only for Mobile */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}