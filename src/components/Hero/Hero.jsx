import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  sectionVariants,
  titleVariants,
  gradientVariants,
  buttonVariants,
} from "../../constant/Index";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const Hero = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center py-2">
        <motion.h1
          className="text-4xl lg:text-5xl text-center lg:leading-snug leading-normal tracking-wide"
          variants={titleVariants}
        >
          Step Into Elysium: Where{" "}
          <motion.span className="gradient" variants={gradientVariants}>
            Dreams <br /> Become Reality
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm lg:text-lg text-neutral-400 text-center my-5 lg:w-3/4 leading-relaxed"
          variants={buttonVariants}
        >
          Welcome to Elysium, where imagination comes alive! Immerse yourself in
          stunning virtual worlds, embark on thrilling adventures, and connect
          with fellow dreamers. Your journey starts here—step into Elysium and
          unlock endless possibilities!
        </motion.p>

        <motion.div
          className="flex items-center gap-2 mb-2"
          variants={buttonVariants}
        >
          <Button variant="gradient">Get Started</Button>
          <Button variant="border">Learn More</Button>
        </motion.div>

        <div className="flex lg:flex-row flex-col justify-center lg:gap-3">
          <motion.video
            autoPlay
            loop
            muted
            className="flex lg:w-[70vh] mt-3 lg:my-5 rounded-lg border-2 border-orange-500"
            variants={buttonVariants}
          >
            <source src={video1} type="video/mp4" />
          </motion.video>
          <motion.video
            autoPlay
            loop
            muted
            className="flex lg:w-[70vh] mt-3 lg:my-5 rounded-md border-2 border-orange-500"
            variants={buttonVariants}
          >
            <source src={video2} type="video/mp4" />
          </motion.video>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
