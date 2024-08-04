import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/kevinRushProfile.jpg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="  pl-3 flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vishaal L.S
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl bg-clip-text tracking-tight text-transparent">
              Full-Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
                <div className=" w-full lg:w-1/2 lg:px-8 lg:py-4 overflow-hidden flex justify-center items-center">
          <img src={profilePic} alt="Profile" className="mr-10 rounded-full max-w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;