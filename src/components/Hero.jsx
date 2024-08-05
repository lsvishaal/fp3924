import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/kevinRushProfile.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x:-100, opacity: 0 },
  visible:{
    x:0,
    opacity:1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="  pl-3 flex flex-col items-center lg:items-start">

            <motion.h1 variants={container(0)} initial="hidden" animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vishaal L.S
            </motion.h1>

            <motion.span variants={container(0.5)} initial="hidden" animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl bg-clip-text tracking-tight text-transparent">
              Full-Stack Developer
            </motion.span>

            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>

          </div>
        </div>
                <div className=" w-full lg:w-1/2 lg:px-8 lg:py-4 overflow-hidden flex justify-center items-center">
          <motion.img  initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.2, duration:1}}
           src={profilePic} alt="Profile" className="mr-10 rounded-xl  max-w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;