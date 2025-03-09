import styles from "./style.module.scss";
import Link from "../Link/Link";
import { motion } from "motion/react";
import { menuSlide } from "../anim";
import Curved from "../Curve/Curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  return (
    <motion.div
      className={styles.menu}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((navItem, index: number) => (
            <Link key={index} data={{ ...navItem, index }} />
          ))}
        </div>
        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curved />
    </motion.div>
  );
};

export default Nav;
