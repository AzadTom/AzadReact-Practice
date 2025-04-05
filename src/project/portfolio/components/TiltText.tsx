import { motion, useMotionValue, useTransform, useInView } from "motion/react";
import { useRef } from "react";

const TiltText: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = ((clientX - left) / width) * 100 - 50;
    const yPos = ((clientY - top) / height) * 100 - 50;

    x.set(xPos);
    y.set(yPos);
  };  

  return (
    <motion.div
      ref={textRef}
      className="mt-24"
      onMouseMove={handleMouseMove} 
      style={{ perspective: 1000,width:"max-content",rotateX:rotateX,rotateY:rotateY}}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1
        className="text-7xl md:text-8xl uppercase font-extrabold tracking-wide"
      >
        I am <span className="">DARK MODE</span>
      </h1>
      <h1
        className="text-8xl md:text-9xl font-extrabold tracking-tight "
       
      >
        DESIGNER
      </h1>
      <h1
        className="text-7xl md:text-8xl font-semibold tracking-widest "
      
      >
        To Hire
      </h1>
    </motion.div>
  );
};

export default TiltText;


export const AnimatedLogo = () => {
  return (
    <div>
      <motion.img
        animate={{ rotate:[0,360]}}
        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
        alt="circle"
        transition={{
          duration:2,
          repeat:Infinity,
          ease:"linear"
        }}
      />
    </div>
  );
};
