import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ViewbasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className=" h-[150vh]"></div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className=" h-screen bg-black"
      ></motion.div>

      <div
        ref={ref}
        style={{
          background: isInView ? "blue" : "red",
          transition: "background 1s",
        }}
        className=" h-screen"
      ></div>
    </>
  );
};

export default ViewbasedAnimations;
