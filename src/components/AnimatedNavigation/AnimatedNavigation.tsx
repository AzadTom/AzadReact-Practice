import { useState } from "react";
import Nav from "./Nav/Nav";
import { AnimatePresence } from "motion/react";
import styles from "./style.module.scss";

const AnimatedNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default AnimatedNavigation;
