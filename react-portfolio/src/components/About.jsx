import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants/index'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center'>About <span className='text-neutral-500'>Me</span></h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 ">
            <div className=' flex item-center justify-center'>
                <img src={aboutImg} alt='about' className='rounded-3xl' />
            </div>
            
        </div>

        <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start item-center">
                    <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default About
