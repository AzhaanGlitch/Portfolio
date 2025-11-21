import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo } from "react"

export default function IntroAnimation({ onFinish }){
  const greetings = useMemo(() => [
    "Hello", "Asslamualaikum", "नमस्ते", "Hola", "Bonjour",
    "Ciao", "Olá", "Welcome!"
  ], [])

  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    if(index < greetings.length - 1){
      const id = setTimeout(() => setIndex((i) => i+1), 350); // Fast but visible
      return () => clearTimeout(id);
    } else {
      const t = setTimeout(() => setVisible(false), 1500); // Quick finale
      return () => clearTimeout(t);
    }
  }, [index, greetings.length])

  return(
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-orange-400 overflow-hidden" 
          initial={{y: 0}}
          exit={{y: "-100%", transition: {duration: 1.05, ease: [0.22, 1, 0.36, 1]}}}
        >
          <AnimatePresence mode="wait">
            <motion.h1 
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.2, ease: "easeInOut"}} // Snappier animation
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}