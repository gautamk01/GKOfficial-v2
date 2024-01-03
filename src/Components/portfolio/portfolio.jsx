import { useRef } from 'react';
import './Portfolio.scss';
import Single from './Single';
import { motion, useScroll, useSpring } from 'framer-motion';

const item = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular.Morning control cloud fairly captain stronger variety feet excitement matter sent."
    },
    {
        id: 2,
        title: "Nextjs Project",
        img: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular.Morning control cloud fairly captain stronger variety feet excitement matter sent."
    },
    {
        id: 3,
        title: "Js advance Project",
        img: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular.Morning control cloud fairly captain stronger variety feet excitement matter sent."
    },
    {
        id: 4,
        title: "My social Media",
        img: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular.Morning control cloud fairly captain stronger variety feet excitement matter sent."
    },
]


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    }
    );
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {item.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio