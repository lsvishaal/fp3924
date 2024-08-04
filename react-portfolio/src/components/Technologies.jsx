
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si"; 
import { FaGitAlt } from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";




const Technologies = () => {
 
    
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-500 bloom-orange"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-blue-500"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400 font-thin"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-300" style={{ color: 'red' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNextdotjs className="text-7xl text-white-300 " />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl text-cyan-300"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl" style={{ color: '#de4d37' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <GrMysql className="text-7xl text-sky-700"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500 " />
            </div>
  

      </div>
    </div>
  )
}

export default Technologies
