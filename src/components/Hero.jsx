import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:px-16">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Kush Goyal
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="w-full text-center">
              <a href="https://bit.ly/kushgoyalresume">
                <motion.button
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#6B46C1",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 rounded-xl p-5 text-xl font-semibold mb-5 hover:shadow-lg" 
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="rounded-2xl"
              src={profilePic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
