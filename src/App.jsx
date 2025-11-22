import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";


export default function App(){
const [introDone, setIntroDone] = React.useState(false);
return(
  <>
  {!introDone && <IntroAnimation onFinish = {() => setIntroDone(true)}/>}
  {introDone && (
  <div className="relative gradient text-white">
    <CustomCursor/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
  </div>
  )}
  </>
)
}