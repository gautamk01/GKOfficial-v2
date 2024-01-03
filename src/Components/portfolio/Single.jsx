import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section  >
            <div className="container">
                <div className="image" ref={ref}>
                    <img src={item.img} alt="This is big" />
                </div>
                <motion.div className="textContainer" style={{ y: y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button >see Demo</button>
                </motion.div>
            </div>
        </section>
    );
};

export default Single;
