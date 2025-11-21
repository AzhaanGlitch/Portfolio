import { useEffect, useMemo, useRef, useState } from "react"
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { WiDayCloudy } from "react-icons/wi";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query])
  return isMobile;
}

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(() => [
    {
      title: "Arvialo",
      link: "https://arvialo.vercel.app/",
      bgColor: "linear-gradient(45deg, #702499ff, #000000ff)",
      image: isMobile ? photo1 : img1
    },
    {
      title: "Crave",
      link: "https://crave-recipe-finder.onrender.com/",
      bgColor: "linear-gradient(45deg, #ffbb00ff, #ff9900ff)",
      image: isMobile ? photo2 : img2
    },
    {
      title: "VigilCam",
      link: "https://azhaanglitch-vigilcam.hf.space/",
      bgColor: "linear-gradient(45deg, #00e1ffff, #000000ff)",
      image: isMobile ? photo3 : img3
    },
    {
      title: "Smart Accident Detector",
      link: "https://smart-accident-detector-frontend-v1-one.vercel.app/",
      bgColor: "linear-gradient(45deg, #008cffff, #000000ff)",
      image: isMobile ? photo4 : img4
    },
    {
      title: "AtmoSphere",
      link: "https://atmo-sphere-weather.vercel.app/",
      bgColor: "linear-gradient(45deg, #211746ff, #000000ff)",
      image: isMobile ? photo5 : img5
    }
  ], [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  })
  const thresholds = projects.map((_, i) => (i + 1) / projects.length)
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
  });

  const activeProject = projects[activeIndex]

  return (
    <section id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        // Changed to backgroundImage for gradient effect
        backgroundImage: activeProject.bgColor,
        // Change transition property to backgroundImage
        transition: "background-image 400ms ease"
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2 className={` text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-8"
          }`}>
          My Work
        </h2>
        <div className="relative w-full flex-1 flex items-center justify-center">
          {projects.map((project, idx) => (
            <div key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"
                }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3 key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}

                    className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:-left-[35%] lg:left-[-5%] sm:mb-0
                    italic font-semibold ${isMobile ? "-mt-24" : ""
                      }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>
              <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                md:shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.7)] ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                }
                h-[62vh] sm:h-[66vh]
                `}
                style={{
                  zIndex: 10,
                  transition: "box-shadow 250ms ease"
                }}
              >
                <img src={project.image} alt={project.image}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    filter: "drop-shadow(0,16px 40px rgba(0, 0, 0, 0.65))",
                    transition: "filter 200ms ease"
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"
          }`}>
          <a href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-grau-200 transition-all"
            aria-label={`view ${activeProject?.title}`}
          >View Project</a>
        </div>
      </div>
    </section>
  )
}