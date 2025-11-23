import { useMemo } from "react";
import img1 from "/assets/img1.png";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import img4 from "/assets/img4.png";
import img5 from "/assets/img5.png";
import photo1 from "/assets/photo1.png";
import photo2 from "/assets/photo2.png";
import photo3 from "/assets/photo3.png";
import photo4 from "/assets/photo4.png";
import photo5 from "/assets/photo5.png";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Projects() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const projects = useMemo(
    () => [
      {
        title: "Arvialo",
        link: "https://arvialo.vercel.app/",
        bgColor: "#000000",
        image: isMobile ? photo1 : img1,
        description: "Full-stack MERN application with modern UI/UX"
      },
      {
        title: "Crave",
        link: "https://crave-recipe-finder.onrender.com/",
        bgColor: "#280c01",
        image: isMobile ? photo2 : img2,
        description: "Recipe finder application with API integration"
      },
      {
        title: "VigilCam",
        link: "https://azhaanglitch-vigilcam.hf.space/",
        bgColor: "#00374d",
        image: isMobile ? photo3 : img3,
        description: "AI-powered surveillance system"
      },
      {
        title: "Smart Accident Detector",
        link: "https://smart-accident-detector-frontend-v1-one.vercel.app/",
        bgColor: "#060141",
        image: isMobile ? photo4 : img4,
        description: "ML-based accident detection system"
      },
      {
        title: "AtmoSphere",
        link: "https://atmo-sphere-weather.vercel.app/",
        bgColor: "#1a0033",
        image: isMobile ? photo5 : img5,
        description: "Real-time weather application"
      },
    ],
    [isMobile]
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white py-20"
    >
      <ParticlesBackground />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my latest projects
        </motion.p>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10">
        {projects.map((project, index) => {
          const topOffset = 100 + index * 40; // Each card stacks with 40px offset
          const scale = 1 - index * 0.05; // Subtle scale reduction for depth

          return (
            <div
              key={project.title}
              className="sticky px-4 sm:px-8 md:px-12"
              style={{
                top: `${topOffset}px`,
                marginBottom: index === projects.length - 1 ? "0" : "60vh",
              }}
            >
              <motion.div
                className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: project.bgColor,
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm">
                  {/* Project Title */}
                  <div className="absolute top-6 left-6 z-20">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                      loading="lazy"
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
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom Spacer */}
      <div className="h-32"></div>
    </section>
  );
}