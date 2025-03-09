import { MotionValue, useScroll, useTransform,motion} from "motion/react";
import { useDimension } from "../../hooks/common/useDimension";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const GalleryScrollTransition = () => {
    const { height } = useDimension();
    const container = useRef<HTMLDivElement | null>(null);
  
    const { scrollYProgress } = useScroll({
      offset: ["start end", "end start"],
    });
  
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);
  
    useEffect(() => {
      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }, []);
  
    return (
      <main>
        <div className="h-[100vh]"></div>
        <div
          ref={container}
          className="gallery overflow-hidden bg-white p-4 rounded-2xl"
        >
          <Column
            images={[
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
            ]}
            y={y1}
          />
          <Column
            images={[
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
            ]}
            y={y2}
          />
          <Column
            images={[
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
            ]}
            y={y3}
          />
          <Column
            images={[
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
              "/gallery-1.jpg",
            ]}
            y={y4}
          />
        </div>
        <div className="h-[100vh]"></div>
      </main>
    );
  };

  export default GalleryScrollTransition;

  const Column = ({
    images,
    y,
  }: {
    images: string[];
    y?: MotionValue<number>;
  }) => {
    return (
      <motion.div style={{ y }} className="column">
        {images.map((src: string, index: number) => (
          <div key={index} className="w-full h-full">
            <img
              src={src}
              alt={"thumnail"}
              className="min-w-[280px] w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </motion.div>
    );
  };