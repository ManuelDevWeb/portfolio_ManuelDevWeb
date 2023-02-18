import { motion } from "framer-motion";

// Components
import Skill from "@/components/Skill";

type Props = {};

const Skills = ({}: Props) => {
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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-a items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill logo={"React.svg"} level={"100%"} />
        <Skill logo={"Node.svg"} level={"100%"} />
        <Skill logo={"Typescript.svg"} level={"100%"} />
        <Skill logo={"Redux.svg"} level={"100%"} />
        <Skill logo={"Sass.svg"} level={"100%"} />
        <Skill logo={"Nextjs.svg"} level={"100%"} />
        <Skill logo={"Aws.svg"} level={"100%"} />
        <Skill logo={"Neo4j.svg"} level={"100%"} />
        <Skill logo={"Typescript.svg"} level={"100%"} />
        <Skill logo={"Redux.svg"} level={"100%"} />
        <Skill logo={"Sass.svg"} level={"100%"} />
        <Skill logo={"Nextjs.svg"} level={"100%"} />
      </div>
    </motion.div>
  );
};

export default Skills;
