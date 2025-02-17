import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

//calculatre the reverse index for staggered delay
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;

}
const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div 

                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * 0.1,

                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
            })}
        </>
        //render in 6 div blocks with stair sliding affect
    )

}
export default Stairs;
