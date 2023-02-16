import { motion } from "framer-motion";

// Components
import ExperienceCard from "@/components/ExperienceCard";

type Props = {};

const WorkExperience = ({}: Props) => {
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
      className="h-screen flex flex-col relative overflow-hidden items-center justify-evenly text-left md:flex-row max-w-full px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll lg:overflow-x-hidden p-10 snap-x snap-mandatory mt-24 md:mt-20">
        <ExperienceCard
          company={"CBW Agencia"}
          position={"Front End Developer"}
          logo={"Cbw.png"}
          technologies={["React", "Typescript", "Nextjs", "Sass", "Redux"]}
          startDate={"Oct 2021"}
          endDate={"Mar 2022"}
          description={[
            "Creacion de modulos y componentes a partir de los diseños UX/UI",
            "Manejo de estados globales con Redux y useContext",
            "Trabajo bajo la metodologia agil SCRUM",
            "Manejo de Git y Github",
          ]}
        />
        <ExperienceCard
          company={"Mango Soft"}
          position={"Back End Developer"}
          logo={"Mango.png"}
          technologies={["Node", "Typescript", "Neo4j", "Aws"]}
          startDate={"Mar 2022"}
          endDate={"Current"}
          description={[
            "Creacion de modulos y componentes a partir de los diseños UX/UI",
            "Manejo de estados globales con Redux y useContext",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
