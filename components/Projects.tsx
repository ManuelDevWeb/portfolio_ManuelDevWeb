// Components
import Project from "@/components/Project";

type Props = {};

const Projects = ({}: Props) => {
  return (
    <div className="h-screen flex relative flex-col justify-evenly items-center text-left md:flex-row max-w-full mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Project
          name="Web Explora"
          picture="projectExplora.png"
          development="Front End"
        />
        <Project
          name="Access Control"
          picture="projectExplora.png"
          development="Back End"
        />
        <Project
          name="Sena Web"
          picture="projectExplora.png"
          development="Front End"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
