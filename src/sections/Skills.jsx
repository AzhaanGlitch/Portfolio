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
    offset: ["start start", "end end"]
  });

  // Diagonal movement for entire content
  const contentX = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

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
      whileHover={{ scale: 1.15 }}
    >
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
        style={{
          boxShadow: `0 10px 30px ${skill.color}20`,
          transform: 'rotate(45deg)',
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          style={{
            background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`,
          }}
        />

        <div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 relative z-10"
          style={{
            color: skill.color,
            filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))",
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
      style={{ height: "300vh" }}
    >
      {/* Diagonally moving content container */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        {/* Animated gradient blobs that move with content */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] opacity-20 blur-[120px] animate-pulse" />
          <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#E53935] via-[#FF8C00] to-[#FFD700] opacity-15 blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FFD700] to-[#E53935] opacity-20 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Moving particles overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content wrapper with diagonal rotation */}
        <div className="relative w-[200vw] h-[200vh] flex items-center justify-center">
          <div 
            className="relative"
            style={{
              transform: 'rotate(-30deg)',
              transformOrigin: 'center',
            }}
          >
            <div 
              className="flex flex-col items-center gap-16 md:gap-24 lg:gap-32"
              style={{
                transform: 'rotate(30deg)',
                transformOrigin: 'center',
              }}
            >
              {/* Header */}
              <motion.div
                className="text-center"
                style={{
                  transform: 'rotate(45deg)',
                  transformOrigin: 'center',
                }}
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

              {/* Skills grid - tilted layout */}
              <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
                {/* Row 1 */}
                <motion.div 
                  className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
                  style={{ transform: 'rotate(0deg)' }}
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
                  className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
                  style={{ marginLeft: '5rem', transform: 'rotate(3deg)' }}
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
                  className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
                  style={{ marginLeft: '10rem', transform: 'rotate(6deg)' }}
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
          </div>
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