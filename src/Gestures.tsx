import { motion, MotionConfig } from "framer-motion";

function Gestures() {
  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="grid place-content-center h-screen gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, rotate: "2.5deg" }}
            className=" bg-blue-700 rounded-md py-2 px-4 text-2xl text-white"
          >
            Click Me!
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, rotate: "2.5deg" }}
            className=" bg-red-700 rounded-md py-2 px-4 text-2xl text-white"
          >
            Click Me!
          </motion.button>
        </div>
      </MotionConfig>
    </>
  );
}

export default Gestures;
