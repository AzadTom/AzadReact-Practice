import {motion} from 'motion/react';

const Class1 = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255 ,255, 0.1) 0.5px, transparent)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
        className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex justify-center items-center"
      >
        <motion.button
        whileHover={{
            rotateX:25,
            rotateY:10,
            boxShadow:"0px 20px 50px rgba(8,112,,184,0.7)",
            y:-20,
        }}
        style={{
            translateZ:100,
        }}
         className=" group  relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
          <span className='group-hover:text-cyan-500 transition-colors duration-300'>Subscribe</span>
          <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500  to-transparent  h-px w-3/4 mx-auto"></span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity  duration-300  absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500  to-transparent  h-[4px] blur-sm w-3/4 mx-auto"></span>
        </motion.button>
      </div>
    </div>
  );
};

export default Class1;
