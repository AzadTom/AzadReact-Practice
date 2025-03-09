import { Link } from 'react-router-dom';
import {motion} from 'motion/react';
import { slide } from '../anim';


const index = ({data}:{data:{title:string,href:string,index:number}}) => {
  return (
    <motion.div  variants={slide} animate="enter" exit="exit"  initial="initial">
        <Link to={data.href}>
        {data.title}
        </Link>

    </motion.div>
  )
}

export default index