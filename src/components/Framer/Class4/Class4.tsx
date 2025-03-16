import { motion, useInView } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

const Class4 = () => {
  return (
    <div className="h-screen flex flex-col  items-center justify-center space-y-8">
      <div className="bg-red-600 rounded-lg p-4 max-w-[800px] mx-auto">
        <FadeUp delay={0.3}>
          <h1 className="text-[48px] font-bold text-white uppercase">
            Empower Your Journey with Innovation
          </h1>
        </FadeUp>
        <FadeUp delay={0.6}>
          <p className="text-[20px] text-neutral-200">
            Discover cutting-edge solutions designed to elevate your experience
            and drive success. Join us on the path to a smarter future.
          </p>
        </FadeUp>
      </div>
      {Array.from(Array(10).keys()).map((i: number) => (
        <FadeUp key={i}>
          <p className="max-w-[1000px] mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            exercitationem ullam hic obcaecati delectus corrupti reprehenderit
            quod accusantium, sequi nam distinctio eveniet magni assumenda eos
            officia eius nisi. Quibusdam eveniet eos consequuntur asperiores?
          </p>
        </FadeUp>
      ))}
    </div>
  );
};

export default Class4;

function FadeUp({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial={false}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
