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
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills(){
const skills = [
    { icon: <FaHtml5 />, name: "Html 5" },
    { icon: <FaCss3Alt />, name: "CSS 3" },
    { icon: <IoLogoJavascript /> , name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMongodb />, name: "MongoDb" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <SiExpress />, name: "ExpressJs" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <GrMysql />, name: "MySQL" },
    { icon: <RiTailwindCssFill />, name: "TailwindCss" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
  ];

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if(!el) return;

    const io = new IntersectionObserver((
      [entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
        { threshold: [0.1]}
    )
    io.observe(el);
    return () => io.disconnect();
  }, []);


  useEffect(() => {
    if(!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if(touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };
    window.addEventListener('wheel', onWheel, {passive: true});
    window.addEventListener('touchstart', onTouchStart, {passive: true});
    window.addEventListener('touchmove', onTouchMove, {passive: true});
    return () => {

    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchmove', onTouchMove);
    }
  }, [active]);

 useEffect(() => {
  let id;
  let last = performance.now();
  const SPEED = 80;
  const tick = (now) => {
    const dt = (now - last)/1000;
    last = now;
    let next = x.get() + SPEED*dir*dt;
    const loop = trackRef.current?.scrollWidth/2 || 0;
    if(loop){
      if(next <= -loop) next += loop;
      if(next >= 0) next -= loop;
    }
    x.set(next);
    id = requestAnimationFrame(tick)
  }
  id = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(id);
 }, [dir,x]);

  return(
    <section id="skills"
    ref={sectionRef}
    className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]
        opacity-20 blur-[120px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935]
        opacity-20 blur-[120px] animate-pulse delay-500"/>
      </div>

      <motion.h2 className="text-4xl mt-5 sm:text-5xl fonr-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E53935] z-10"
        initial = {{opacity: 0, x: -30}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 0.1}}
      >
        My Skills
      </motion.h2>
      <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial = {{opacity: 0, x: -10}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.1}}
      >
        Modern Applications | Modern Tech Stack
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <motion.div
        ref = {trackRef}
        className="flex mt-2 mb-2 gap-10 text-6xl text-[#FF8C00]"
        style={{x, whiteSpace: "nowrap", willChange: "transform"}}
        >
          {repeated.map((s,i) => (
            <div
            key={i} className="flex flex-col items-center gap-2 min-w-[120px]"
            aria-label={s.name}
            title={s.name}
            >
              <span className="hover:scale-125 transition duration-300">
                {s.icon}
                <p className="text-sm text-center">
                  {s.name}
                </p>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}