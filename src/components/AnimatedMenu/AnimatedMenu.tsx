import  { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "motion/react";
import NavBar from "./Nav/NavBar";

const varients = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
};

const AnimatedMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <main>
      <div className={styles.header}>
        {isActive && <MenuOption isActive={isActive} />}
        <div
          onClick={() => setIsActive((prev) => !prev)}
          className={styles.button}
        >
          <motion.div
            animate={{ top: isActive ? "-100%" : "0" }}
            transition={{ duration: 0.5, ease: [0.12, 0, 0.39, 0] }}
            className={styles.slider}
          >
            <div className={styles.en}>
              <PerPectiveText label="Menu" />
            </div>
            <div className={styles.en}>
              <PerPectiveText label="Close" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AnimatedMenu;

const PerPectiveText = ({ label }: { label: string }) => {
  return (
    <div className={styles.perpectivetext}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};

const MenuOption = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className={styles.menu}
      variants={varients}
      animate={isActive ? "open" : "closed"}
      initial="closed"
    >
      <NavBar/>
    </motion.div>
  );
};
