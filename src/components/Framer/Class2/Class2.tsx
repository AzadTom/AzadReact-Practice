import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Class2 = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-72 min-h-[30rem] rounded-xl   
        shadow-[0_0_0_0.05px_rgba(0,0,0,0.05),0_1px_2px_rgba(34,42,53,0.04),0_4px_8px_rgba(47,48,55,0.05)] 
        p-6 
        flex flex-col"
            >
              <h2 className=" font-bold  text-[12px] text-black">
                Acertinity UI Components
              </h2>
              <p className="text-neutral-400 mt-2  text-[12px]">
                A Collection of beautiful UI components , let's get on with it.
              </p>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className="shadow-[0_0_0_0.05px_rgba(0,0,0,0.05),0_1px_2px_rgba(34,42,53,0.04),0_4px_8px_rgba(47,48,55,0.05)] p-1 rounded-md px-2 bg-black text-white text-[10px]"
                >
                  Accertinity
                </button>
              </div>
              <div className="relative flex-1 bg-gray-100 text-neutral-400 mt-4  rounded-lg border border-dashed border-neutral-200">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                  }}
                  className="absolute inset-0 w-full h-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
                >
                  <div className="p-4 text-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    odit
                  </div>
                  <div className="p-4 text-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    odit
                  </div>
                  <div className="p-4 text-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    odit
                  </div>
                  <div className="p-4 text-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    odit
                  </div>
                  <div className="p-4 text-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    odit
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Class2;
