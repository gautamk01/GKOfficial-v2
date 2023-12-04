import './hero.scss';
import { motion } from 'framer-motion';

const textVarients = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildern: 0.4
        }
    },
    scrollButton: {
        opacity: 1,
        y: 10,
        transition: {
            duration: 1,
            delay: 0.4,
            type: "spring", stiffness: 100, damping: 3,
            repeat: Infinity
        }
    }
}

const sliderVarients = {
    initial: {
        x: "100%"
    },
    animate: {
        x: "-320%",
        transition: {
            repeat: "mirror",
            duration: 40
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div variants={textVarients} initial="initial" animate="animate" className="textContainer">
                    <motion.h2 variants={textVarients}>Gautam Krishna M </motion.h2>
                    <motion.h1 variants={textVarients}>Front-End Developer</motion.h1>
                    <motion.div variants={textVarients} className="button">
                        <motion.button variants={textVarients}>See the Latest Work</motion.button>
                        <motion.button variants={textVarients}>Cotanct me </motion.button>
                    </motion.div>
                    <motion.img variants={textVarients} animate="scrollButton" src='/scroll.png' alt="" />
                </motion.div>
            </div>
            <motion.div variants={sliderVarients} initial="initial" animate="animate" className="slideingTextContainer">
                Gautam Krishna M
            </motion.div>
            <div className='imageContainer'>
                <img src='/output.png' alt='Hero image' />
            </div>
        </div>
    )
}

export default Hero