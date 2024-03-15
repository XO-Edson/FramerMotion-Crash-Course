import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Gestures from "./Gestures";
import AnimationControls from "./AnimationControls";
import ViewbasedAnimations from "./ViewbasedAnimations";
import ScrollAnimation from "./ScrollAnimation";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* <div className="grid place-content-center h-screen gap-2">
        <motion.button
          className=" bg-blue-600 rounded-md text-white p-2 mb-14"
          onClick={() => setIsVisible(!isVisible)}
          layout
        >
          Show/Hide
        </motion.button>

        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              initial={{ rotate: "0deg", scale: 0, y: 0 }}
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 50, -50, -50, 0],
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.5, 0.85, 1],
              }}
              className=" w-40 h-40 bg-black"
            ></motion.div>
          )}
        </AnimatePresence>
      </div> */}
      {/*   <Gestures /> */}
      {/*  <AnimationControls /> */}
      {/*  <ViewbasedAnimations /> */}
      <ScrollAnimation />
    </>
  );
}

export default App;
