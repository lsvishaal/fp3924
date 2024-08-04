
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si"; 
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial:{y: -10},
  animate:{
    y:[10,-10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
 
    
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-orange-500 bloom-orange"/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaCss3Alt className="text-7xl text-blue-500"/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <IoLogoJavascript className="text-7xl text-yellow-400 font-thin"/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaReact className="text-7xl text-cyan-300" style={{ color: 'red' }}/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiNextdotjs className="text-7xl text-white-300 " />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiTailwindcss className="text-7xl text-cyan-300"/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGitAlt className="text-7xl" style={{ color: '#de4d37' }}/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <GrMysql className="text-7xl text-sky-700"/>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="inital" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className="text-7xl text-green-500 " />
        </motion.div>
    

      </motion.div>
    </div>
    )
}

export default Technologies
