import { useRef } from "react"
import "./Services.scss"
import { inView, motion, useInView } from "framer-motion"
const boxText = [
    {
        title: "Branding",
        para: "Lorem ipsum dolor sit amet adipisicing elit Nostrum libero enim nisi aliquam consectetur expedi magni eius ex corrupti animi! Ad "
    },
    {
        title: "Branding",
        para: "Lorem ipsum dolor sit amet adipisicing elit Nostrum libero enim nisi aliquam consectetur expedi magni eius ex corrupti animi! Ad "
    },
    {
        title: "Branding",
        para: "Lorem ipsum dolor sit amet adipisicing elit Nostrum libero enim nisi aliquam consectetur expedi magni eius ex corrupti animi! Ad "
    },
    {
        title: "Branding",
        para: "Lorem ipsum dolor sit amet adipisicing elit Nostrum libero enim nisi aliquam consectetur expedi magni eius ex corrupti animi! Ad "
    },
]

const varients = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }

    }
}

const Services = () => {

    const ref = useRef();
    const inView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div ref={ref} className="services" variants={varients} initial="initial" animate={inView && "animate"} >
            <motion.div className="textContainer">
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>What We Do ? </button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                {boxText.map((x, i) => (
                    <motion.div whileHover={{ background: "lightgray", color: "black" }} className="box" key={i}>
                        <h2>{x.title}</h2>
                        <p>{x.para}</p>
                        <button>Go</button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services