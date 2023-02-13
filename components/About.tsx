import { motion } from "framer-motion";

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="/static/img/Manuel-Valencia.jpg"
        className="mt-28 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
        xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am passionate about technology 💯, self-taught and pragmatic. I
          enjoy solving and analyzing problems through software solutions,
          applying algorithmic and logical knowledge. My approach is based on
          frontend and backend web development, applying good programming
          practices to provide the user with a pleasant experience.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
