import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {icon : FaGithub, label: "GitHub", href: "https://github.com/AzhaanGlitch"},
  {icon : FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/azhaanalisiddiqui/"},
  {icon : FaKaggle, label: "Kaggle", href: "https://www.kaggle.com/azhaanalisiddiqui"}
]

const glowVarients = {
  initial: {scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"},
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(200, 50, 200, 0.9)) drop-shadow(0 0 18px rgba(0, 255, 255, 0.8))",
    transition: {type: "spring", stiffness: 300, damping: 15}
  },
  tap: {scale: 0.95, y: 0, transition: {duration: 0.08}}
}


export default function Footer(){
  return(
    <footer className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_35%_at_60%_25%,rgba(200,50,200,0.3),transparent_80%)]"/>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_40%_at_30%_70%,rgba(0,255,255,0.25),transparent_80%)]"/>
      <motion.div className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
          initial = {{opacity: 0, y: -30}}
          whileInView = {{opacity: 1, y: 0}}
          transition = {{duration: 0.8}}
      >
        <h1 className="font-semibold leading-none text-white text-center select-none"
        style={{
          fontSize: "clamp(3rem,5vw,14rem)",
          letterSpacing: "0.02em",
          lineHeight: 0.9,
          padding: "0 3vw",
          whiteSpace: "nowrap",
          textShadow: "0 2px 18 rgba(0, 0, 0, 0.45)"
        }}>
          Azhaan Ali Siddiqui
        </h1>
        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"/>

        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({icon: Icon, label, href}) => (
            <motion.a href={href}
            key={label}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            variants={glowVarients}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon/>
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 italic max-w-xl">
          "In JS, 'undefined' is just the universe's way of saying 'try async/await instead."
        </p>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Azhaan Ali Siddiqui. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}