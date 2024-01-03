
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({ type }) => {
    const ref = useRef(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
    return (
        <div ref={ref} className="parallax" style={{ background: type === "services" ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg,#111132,#505064)" }}>
            <motion.h1 style={{ y: ytext }}> {type === "services" ? " What We Do ? " : " What We Did? "}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{ backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`, y: ybg }}></motion.div>
            <motion.div style={{ x: ybg }} className="stars"></motion.div>
        </div>
    )
}

export default Parallax