import { motion } from "motion/react"; 
import { useState } from "react";

const Class3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarVariants = {
    open: { width: "16rem" },
    closed: { width: "4.5rem" },
  };

  return (
    <div className="h-screen flex cursor-pointer">
      <motion.div
        initial={false}
        variants={sideBarVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
        className="p-4 bg-neutral-900 group"
      >
        <h1
          className={`font-bold text-[24px] ${
            !isOpen ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          DashBoard
        </h1>

        <div
          className={`mt-4 ${
            !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <ul className="flex flex-col gap-2 text-lg">
            <li>HOME</li>
            <li>SHOPS</li>
            <li>MORE</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Class3;
