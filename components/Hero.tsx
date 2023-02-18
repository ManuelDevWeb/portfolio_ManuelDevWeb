import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { BsArrowDownCircle } from "react-icons/bs";

// Components
import BackgroundCircles from "@/components/BackgroundCircles";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Manuel", "Do you want some coffee?", "<CodeWithLove />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={100}
        height={100}
        className="rounded-full mx-auto object-cover"
        src="/static/img/Avatar.png"
        alt="Avatar Manuel"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[7px]">
          Software Engineer &<br /> Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
      <motion.button
        animate={{
          y: [0, 10],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex gap-1 items-center justify-center space-y-2 "
      >
        <Link href="#about">
          <BsArrowDownCircle
            // Friendlier hover effect
            className="hover:text-[#F7AB0A] h-6 w-6"
          />
        </Link>
      </motion.button>
    </div>
  );
};

export default Hero;
