import { motion } from "framer-motion"
import p from "/assets/p.jpg";

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ]


  return (
    <section id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] animate-pulse ${c}`} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div className = "flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial = {{opacity: 0, y: 24}}
          whileInView = {{opacity: 1, y: 0}}
          transition = {{duration: 0.6}}
          viewport = {{once:true, amount: 0.4}}
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]
          rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]
          border-[#E53935]
          "
          whileHover={{scale: 1.02}}
          transition={{type: "spring", stiffness: 200, damping: 18}}
          >
            <img src={p} alt="azhaan" className="absolute inset-0"/>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]
            ">
              Azhaan Ali Siddiqui
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack MERN Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I am dedicated to leveraging technology for impactful solutions on real life problems. My toolkit spans MERN stack, AI/ML, REST APIs, Blockchain.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition">View Projects</a>
              <a href="#contacts" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white-20 transition">Get in Touch</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="text-center md:text-left"
        initial = {{opacity: 0, x: -30}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true, amount: 0.4}}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className=" text-gray-300 leading-relaxed text-base sm:text-lg">
            I am a Full Stack MERN Developer, Machine Learning Engineer and Cloud Developer, who is passionate about building new, clean, interactive, minimal websites and ML projects.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I try to maintain my GitHub streaks, compete in hackathons and developing more to myself daily. 
          </p>
        </motion.div>
      </div>
    </section>
  )
}