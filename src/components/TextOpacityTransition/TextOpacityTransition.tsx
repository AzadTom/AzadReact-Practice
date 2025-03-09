import { MotionValue, useScroll, useTransform ,motion} from "motion/react";
import { useRef } from "react";

export const TextOpacityTransition = () => {
    // const textRefs = useRef<HTMLParagraphElement | null>(null);
    // const { scrollYProgress } = useScroll({
    //   target: textRefs,
    //   offset: ["start 0.9", "start 0.25"],
    // });
  
    const value = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          quibusdam eius dignissimos doloremque, distinctio nostrum blanditiis
          similique dolores quis quidem deserunt optio id, porro illum dolor earum
          aperiam, provident quaerat eos. Cum, rerum quo?`;
  
    return (
      <div>
        <div className="h-screen"></div>
        {/* <motion.p ref={textRefs} className="text-[50px] max-w-[1280px] p-[40px]" style={{opacity:scrollYProgress}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          quibusdam eius dignissimos doloremque, distinctio nostrum blanditiis
          similique dolores quis quidem deserunt optio id, porro illum dolor earum
          aperiam, provident quaerat eos. Cum, rerum quo?{" "}
        </motion.p> */}
        <WordTransition value={value} />
        <div className="h-screen"></div>
      </div>
    );
  };
  
  const WordTransition = ({ value }: { value: string }) => {
    const textRefs = useRef<HTMLParagraphElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: textRefs,
      offset: ["start 0.9", "start 0.25"],
    });
  
    const words = value.split(" ");
  
    return (
      <p ref={textRefs} className="text-[32px] max-w-[1280px] p-[40px]">
        {words.map((word: string, index: number) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={index}
              value={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    );
  };
  
  const Word = ({
    value,
    progress,
    range,
  }: {
    value: string;
    range: number[];
    progress: MotionValue<number>;
  }) => {
    const opacity = useTransform(progress, range, [0, 1]);
  
    return (
      <span className="relative">
        <span className="absolute inset-0" style={{ opacity: 0.1 }}>
          {value}
        </span>
        <motion.span style={{ opacity: opacity }}>
          {value}
        </motion.span>
      </span>
    );
  };
  