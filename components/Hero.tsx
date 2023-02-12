import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// Components
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Manuel", "Computer Engineering", "Full Stack Developer"],
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
          Computer Engineering &<br /> Full Stack Developer
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
    </div>
  );
};

export default Hero;
