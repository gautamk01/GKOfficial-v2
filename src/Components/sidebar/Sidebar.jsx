import { useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Togglebutton from "./toggleButton/Togglebutton";

const Sidebar = () => {

    const [Open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1000px at 40px 48px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(28px at 50px 48px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <motion.div className="sidebar" variants={variants} animate={Open ? "open" : "closed"}>
            <motion.div className="bg">
                <Links />
            </motion.div>
            <Togglebutton setopen={setOpen} />
        </motion.div>
    )
}

export default Sidebar