import styles from "./style.module.scss";
import { links } from "./data";
import {motion } from 'motion/react';

const perspective = {

    initial:{

        opacity:0,

    },
    enter:(i:number)=>({

        opacity:1,
        transition:{delay:0.5+(i*0.5)}

    }),
    exit:{

        opacity:0

    }

}

const NavBar = () => {
  return (
    <div className={`text-white ${styles.nav}`}>
      <div className={styles.body}>
        {links.map((item,index:number)=>( <motion.div key={index} custom={index} variants={perspective} animate="enter" exit="exit" initial="initial">
            <a href={item.href}>{item.title}</a>
        </motion.div> ))}
      </div>
    </div>
  );
};

export default NavBar;
