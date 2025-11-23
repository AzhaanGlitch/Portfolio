import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projects = useMemo(
    () => [
      {
        title: "Arvialo",
        link: "https://arvialo.vercel.app/",
        bgColor: "#000000",
        image: isMobile ? "/assets/photo1.png" : "/assets/img1.png",
        description: "Full-stack MERN application with modern UI/UX"
      },
      {
        title: "Crave",
        link: "https://crave-recipe-finder.onrender.com/",
        bgColor: "#280c01",
        image: isMobile ? "/assets/photo2.png" : "/assets/img2.png",
        description: "Recipe finder application with API integration"
      },
      {
        title: "VigilCam",
        link: "https://azhaanglitch-vigilcam.hf.space/",
        bgColor: "#00374d",
        image: isMobile ? "/assets/photo3.png" : "/assets/img3.png",
        description: "AI-powered surveillance system"
      },
      {
        title: "Smart Accident Detector",
        link: "https://smart-accident-detector-frontend-v1-one.vercel.app/",
        bgColor: "#060141",
        image: isMobile ? "/assets/photo4.png" : "/assets/img4.png",
        description: "ML-based accident detection system"
      },
      {
        title: "AtmoSphere",
        link: "https://atmo-sphere-weather.vercel.app/",
        bgColor: "#1a0033",
        image: isMobile ? "/assets/photo5.png" : "/assets/img5.png",
        description: "Real-time weather application"
      },
    ],
    [isMobile]
  );

  return (
    <section
      id="projects"
      className="relative bg-black text-white"
    >
      {/* Fixed Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <canvas 
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            background: 'transparent'
          }}
        />
      </div>

      {/* Scrollable Content */}
      <div 
        ref={containerRef}
        style={{ height: `${projects.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header */}
          <div className="relative z-10 text-center pt-20 pb-12 px-4">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Work
            </motion.h2>
            <motion.p
              className="mt-4 text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest projects
            </motion.p>
          </div>

          {/* Cards Container */}
          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-8">
            <div className="relative w-full max-w-6xl h-[70vh]">
              {projects.map((project, index) => {
                const cardProgress = useTransform(
                  scrollYProgress,
                  [index / projects.length, (index + 1) / projects.length],
                  [0, 1]
                );

                const x = useTransform(cardProgress, [0, 1], ["100%", "0%"]);
                const opacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
                const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.95]);

                return (
                  <motion.div
                    key={project.title}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      x,
                      opacity,
                      scale,
                    }}
                  >
                    <div
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                      style={{ backgroundColor: project.bgColor }}
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                      {/* Card Content */}
                      <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm">
                        {/* Project Title */}
                        <div className="absolute top-6 left-6 z-20 max-w-[60%]">
                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            {project.description}
                          </p>
                        </div>

                        {/* Project Image */}
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                            loading="eager"
                            onError={(e) => {
                              console.error(`Failed to load image: ${project.image}`);
                              e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23333" width="100" height="100"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-size="14">Image Error</text></svg>';
                            }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
                        </div>

                        {/* View Project Button */}
                        <div className="absolute bottom-6 right-6 z-20">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C69C00] via-[#C84F00] to-[#9B1D1A] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                          >
                            View Project
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>

                        {/* Card Number Badge */}
                        <div className="absolute top-6 right-6 z-20">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg border border-white/20">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="relative z-10 pb-8 px-4">
            <div className="max-w-md mx-auto">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
                  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                {projects.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}