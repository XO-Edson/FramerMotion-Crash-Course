import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blue", "green", "yellow"]
  );

  return (
    <div className=" p-4">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "8px",
        }}
      ></motion.div>
      <div className=" max-w-3xl m-auto p-5">
        <p className=" pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a
          placeat modi minus fugiat sunt rerum blanditiis nesciunt expedita
          voluptatum similique veritatis eaque beatae enim quaerat amet
          officiis, quisquam ullam? Repellendus perferendis reiciendis, amet
          dolorum dolores odit saepe nam voluptate labore magnam corporis, nulla
          facere necessitatibus, quaerat rerum sit eos! Tempora a recusandae
          nobis nulla alias magni cum temporibus laudantium! Alias tenetur
          laudantium qui enim error eius, facilis at rem adipisci voluptatibus
          odit harum aspernatur totam, voluptas aut iure obcaecati quibusdam
          eveniet perferendis quasi. Inventore mollitia consequuntur illo
          voluptatum distinctio.
        </p>
        <p className=" pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a
          placeat modi minus fugiat sunt rerum blanditiis nesciunt expedita
          voluptatum similique veritatis eaque beatae enim quaerat amet
          officiis, quisquam ullam? Repellendus perferendis reiciendis, amet
          dolorum dolores odit saepe nam voluptate labore magnam corporis, nulla
          facere necessitatibus, quaerat rerum sit eos! Tempora a recusandae
          nobis nulla alias magni cum temporibus laudantium! Alias tenetur
          laudantium qui enim error eius, facilis at rem adipisci voluptatibus
          odit harum aspernatur totam, voluptas aut iure obcaecati quibusdam
          eveniet perferendis quasi. Inventore mollitia consequuntur illo
          voluptatum distinctio.
        </p>
        <p className=" pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a
          placeat modi minus fugiat sunt rerum blanditiis nesciunt expedita
          voluptatum similique veritatis eaque beatae enim quaerat amet
          officiis, quisquam ullam? Repellendus perferendis reiciendis, amet
          dolorum dolores odit saepe nam voluptate labore magnam corporis, nulla
          facere necessitatibus, quaerat rerum sit eos! Tempora a recusandae
          nobis nulla alias magni cum temporibus laudantium! Alias tenetur
          laudantium qui enim error eius, facilis at rem adipisci voluptatibus
          odit harum aspernatur totam, voluptas aut iure obcaecati quibusdam
          eveniet perferendis quasi. Inventore mollitia consequuntur illo
          voluptatum distinctio.
        </p>
        <p className=" pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a
          placeat modi minus fugiat sunt rerum blanditiis nesciunt expedita
          voluptatum similique veritatis eaque beatae enim quaerat amet
          officiis, quisquam ullam? Repellendus perferendis reiciendis, amet
          dolorum dolores odit saepe nam voluptate labore magnam corporis, nulla
          facere necessitatibus, quaerat rerum sit eos! Tempora a recusandae
          nobis nulla alias magni cum temporibus laudantium! Alias tenetur
          laudantium qui enim error eius, facilis at rem adipisci voluptatibus
          odit harum aspernatur totam, voluptas aut iure obcaecati quibusdam
          eveniet perferendis quasi. Inventore mollitia consequuntur illo
          voluptatum distinctio.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
