import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills(){
  const skills = [
    { icon: <FaHtml5 />, name: "Html 5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS 3", color: "#1572B6" },
    { icon: <IoLogoJavascript /> , name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiMongodb />, name: "MongoDb", color: "#47A248" },
    { icon: <SiMongoose />, name: "Mongoose", color: "#880000" },
    { icon: <SiExpress />, name: "ExpressJs", color: "#FFFFFF" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "NodeJs", color: "#339933" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF" },
    { icon: <GrMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <RiTailwindCssFill />, name: "TailwindCss", color: "#06B6D4" },
    { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
    { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
  ];

  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const touchY = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if(!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if(!active) return;

    const onWheel = (e) => setDirection(e.deltaY > 0 ? 1 : -1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if(touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDirection(delta > 0 ? -1 : 1);
      touchY.current = e.touches[0].clientY;
    };
    
    window.addEventListener('wheel', onWheel, {passive: true});
    window.addEventListener('touchstart', onTouchStart, {passive: true});
    window.addEventListener('touchmove', onTouchMove, {passive: true});
    
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 15; // Degrees per second
    
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setRotation(prev => prev + SPEED * direction * dt);
      id = requestAnimationFrame(tick);
    };
    
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [direction]);

  return(
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden py-20"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] opacity-20 blur-[120px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] opacity-20 blur-[120px] animate-pulse delay-500"/>
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]">
          My Skills
        </h2>
        <p className="mt-4 text-white/90 text-base sm:text-lg">
          Modern Applications | Modern Tech Stack
        </p>
      </motion.div>

      {/* Semicircular Ring Container */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] flex items-end justify-center">
        {/* SVG Ring Path - Bottom Half Circle */}
        <svg 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '90%',
            maxWidth: '1200px',
            height: 'auto',
            aspectRatio: '2/1'
          }}
          viewBox="0 0 1200 600"
          fill="none"
        >
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E53935" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <path
            d="M 100 600 A 500 500 0 0 1 1100 600"
            stroke="url(#ringGradient)"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
          {/* Inner ring */}
          <path
            d="M 150 600 A 450 450 0 0 1 1050 600"
            stroke="url(#ringGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </svg>

        {/* Skill Icons rotating on the path */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2" 
          style={{
            width: '90%',
            maxWidth: '1200px',
            aspectRatio: '2/1'
          }}
        >
          {skills.map((skill, index) => {
            // Calculate evenly spaced positions on semicircle
            const totalSkills = skills.length;
            const angleSpacing = 180 / (totalSkills + 1); // Equal spacing across 180 degrees
            const baseAngle = angleSpacing * (index + 1); // Start from first spacing
            const angle = baseAngle + rotation;
            
            // Semicircle math (bottom half)
            const radius = 450; // Radius of the path
            const centerX = 600; // Center X of viewBox
            const centerY = 600; // Bottom of viewBox
            
            // Convert angle to radians and calculate position
            const angleRad = (angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(Math.PI - angleRad);
            const y = centerY - radius * Math.sin(Math.PI - angleRad);
            
            // Convert from viewBox coordinates to percentage
            const xPercent = (x / 1200) * 100;
            const yPercent = (y / 600) * 100;
            
            // Calculate opacity based on position (fade at edges)
            const normalizedAngle = ((angle % 360) + 360) % 360;
            let opacity = 1;
            if (normalizedAngle < 0 || normalizedAngle > 180) {
              opacity = 0;
            } else if (normalizedAngle < 20) {
              opacity = normalizedAngle / 20;
            } else if (normalizedAngle > 160) {
              opacity = (180 - normalizedAngle) / 20;
            }
            
            // Calculate scale for depth effect (smaller at edges)
            let scale = 1;
            if (normalizedAngle >= 0 && normalizedAngle <= 180) {
              if (normalizedAngle < 30) {
                scale = 0.7 + (normalizedAngle / 30) * 0.3;
              } else if (normalizedAngle > 150) {
                scale = 0.7 + ((180 - normalizedAngle) / 30) * 0.3;
              }
            }
            
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: `${xPercent}%`,
                  top: `${yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  opacity: opacity,
                }}
                whileHover={{ scale: scale * 1.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col items-center gap-2"
                  style={{
                    transform: `scale(${scale})`,
                  }}
                >
                  <div 
                    className="text-5xl sm:text-6xl md:text-7xl transition-all duration-300 drop-shadow-lg"
                    style={{ 
                      color: skill.color,
                      filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))'
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium whitespace-nowrap bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Instruction Text */}
      <motion.p 
        className="relative z-10 mt-8 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Scroll to rotate
      </motion.p>
    </section>
  );
}