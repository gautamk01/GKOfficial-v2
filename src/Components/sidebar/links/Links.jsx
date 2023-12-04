import { motion } from "framer-motion";


const variants = {
    open: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemvariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}
const Links = () => {
    const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
    return (
        <motion.div className="links" variants={variants} >{items.map((item, index) => {
            return <motion.a variants={itemvariants} href={`#${item}`} key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} >{item}</motion.a>
        })}</motion.div>
    )
}

export default Links