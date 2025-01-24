import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "motion/react";

const ScrollAnimationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [6, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.1], [0, 350]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1.1]);
  const textScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);

  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10]);
  const finalBlur = useMotionTemplate`blur(${blur}px)`;

  return (
    <div
      ref={containerRef}
      className="w-full h-[300vh]  bg-neutral-50  flex flex-col items-center  py-40 [perspective:400px] sm:[perspective:250px] [transform-style:preserve-3d]"
    >
      <motion.h1
        style={{ scale: textScale, opacity: textOpacity, filter: finalBlur }}
        className=" text-black text-2xl sm:text-8xl font-bold text-center"
      >
        Unleash the power of <br /> scroll animation
      </motion.h1>
      <motion.div
        style={{
          rotateX: rotateX,
          translateZ: window.innerWidth <=614 ? "15px":"45px",
          scale: scale,
          y: rotateY,
        }}
        className="w-[320px] sm:w-[800px]   rounded-3xl bg-white shadow-2xl -mt-6 border border-neutral-100 p-2"
      >
        <div className="bg-black w-full h-full rounded-[16px] p-2">
          <div className="bg-neutral-100 w-full h-full rounded-[12p   x]">
            <img src="/vscode.png" alt="thumnail-img" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimationPage;
