import { Fragment } from "react/jsx-runtime";
import "./styles.modules.css";
import { useEffect, useRef } from "react";
import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import Lenis from "lenis";
import { useDimension } from "../../hooks/common/useDimension";

const TransitionPage = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-8">
      <div className="z-50">
        <NavigationSubMenuTransition />
      </div>
      <GalleryTransition />

      <div className="fixed bottom-4 right-4 z-50">
        <Transition1 />
      </div>
      <GalleryScrollTransition />
      <TextOpacityTransition />
    </section>
  );
};

export default TransitionPage;

const Transition1 = () => {
  return (
    <div className="size-[80px] bg-white rounded-full cursor-pointer transition-all duration-100  ease-in-out hover:bg-red-600  hover:rounded-full" />
  );
};

const NavigationSubMenuTransition = () => {
  return (
    <header className="mx-6">
      <nav>
        <ul>
          <li className="has-submenu">
            <a href="#">Services</a>
            <ul className="z-50">
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">eCommerce</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
            </ul>
          </li>
          <li className="hidden sm:block">
            <a href="#">Company</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Blog</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Careers</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const GalleryTransition = () => {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {Array.from({ length: 3 }, (_: unknown, index: number) => (
        <Fragment key={index}>
          <li className="w-full h-full">
            <figure>
              <a href="#">
                <img
                  src="/gallery-1.jpg"
                  alt="Great Barrier Reef, Australia"
                  className="h-[600px] object-cover"
                />
              </a>
              <figcaption className="">
                <main className="">
                  <p>9-day trip</p>
                  <h3>
                    Great Barrier Reef, <em>Australia</em>
                  </h3>
                  <p>
                    Dive into the vibrant underwater world of the Great Barrier
                    Reef, a UNESCO World Heritage Site teeming with marine life.
                  </p>
                </main>

                <footer>
                  <div>
                    <p>From</p>
                    <p>€2,500</p>
                  </div>

                  <img src="/icon-arrow-right-color.svg" alt="Icon" />
                </footer>
              </figcaption>
            </figure>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

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

const TextOpacityTransition = () => {
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
