import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const Controls = useAnimationControls();

  const handleClick = () => {
    Controls.start("flip");
  };

  return (
    <div>
      <div className="grid place-content-center h-screen gap-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, rotate: "2.5deg" }}
          className=" bg-blue-700 rounded-md py-2 px-4 text-2xl text-white"
          onClick={handleClick}
        >
          Flip It!
        </motion.button>

        <motion.div
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          initial="initial"
          animate={Controls}
          className=" w-40 h-40 bg-black"
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimationControls;
