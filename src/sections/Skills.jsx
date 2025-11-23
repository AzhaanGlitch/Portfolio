import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMongoose, SiExpress, SiRedux, SiTensorflow } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "Html 5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS 3", color: "#1572B6" },
    { icon: <IoLogoJavascript />, name: "JavaScript", color: "#F7DF1E" },
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

  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth diagonal movement with easing
  const contentX = useTransform(scrollYProgress, [0, 0.5, 1], ["-30%", "0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ["-15%", "0%", "15%"]);
  const rotation = useTransform(scrollYProgress, [0, 0.5, 1], [15, 20, 25]);

  // Split skills into 3 rows with 5 skills each
  const row1 = skills.slice(0, 5);
  const row2 = skills.slice(5, 10);
  const row3 = skills.slice(10, 15);

  const SkillCard = ({ skill, delay = 0 }) => (
    <motion.div
      className="flex-shrink-0 flex flex-col items-center gap-3 group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.2 }}
    >
      <div
        className="relative flex items-center justify-center"
      >
        {/* Glow effect on hover - no box, just glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl scale-150"
          style={{
            background: `radial-gradient(circle, ${skill.color}60, transparent 70%)`,
          }}
        />

        {/* Icon without box */}
        <div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-300 relative z-10"
          style={{
            color: skill.color,
            filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))",
          }}
        >
          {skill.icon}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-black text-white overflow-hidden"
      style={{ minHeight: "150vh" }}
    >
      {/* Diagonally moving content container with smooth transitions */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{
          x: contentX,
          y: contentY,
          paddingTop: "50vh",
        }}
      >

        {/* Content wrapper with smooth diagonal rotation */}
        <div className="relative w-full max-w-[90vw] h-full flex items-center justify-center overflow-visible">
          <motion.div 
            className="relative"
            style={{
              rotate: rotation,
              transformOrigin: 'center',
            }}
          >
            <div 
              className="flex flex-col items-center gap-12 md:gap-14 lg:gap-16"
            >
              {/* Header */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]">
                  My Skills
                </h2>
                <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl">
                  Modern Applications | Modern Tech Stack
                </p>
              </motion.div>

              {/* Skills grid - tilted layout with more spacing */}
              <div className="flex flex-col items-center gap-12 md:gap-14 lg:gap-16">
                {/* Row 1 */}
                <motion.div 
                  className="flex items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  {row1.map((skill, idx) => (
                    <SkillCard key={skill.name} skill={skill} delay={idx * 0.1} />
                  ))}
                </motion.div>

                {/* Row 2 - Offset to create diagonal effect */}
                <motion.div 
                  className="flex items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20"
                  style={{ marginLeft: '5rem' }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {row2.map((skill, idx) => (
                    <SkillCard key={skill.name} skill={skill} delay={idx * 0.1 + 0.2} />
                  ))}
                </motion.div>

                {/* Row 3 - Further offset */}
                <motion.div 
                  className="flex items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20"
                  style={{ marginLeft: '10rem' }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {row3.map((skill, idx) => (
                    <SkillCard key={skill.name} skill={skill} delay={idx * 0.1 + 0.4} />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.33], [1, 0.3]) }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
            style={{ opacity: useTransform(scrollYProgress, [0.33, 0.66], [0.3, 1]) }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]"
            style={{ opacity: useTransform(scrollYProgress, [0.66, 1], [0.3, 1]) }}
          />
        </div>
      </div>
    </section>
  );
}