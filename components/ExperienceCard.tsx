import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          x: -100,
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
        src="/static/img/Cbw.png"
        className="w-32 h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front End Developer</h4>
        <p className="font-bold text-2x mt-1">SCRINIO</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 "
            src="/static/img/React.svg"
            alt="React Logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/static/img/Typescript.svg"
            alt="Typescript Logo"
          />
          <img
            className="h-10 w-10 "
            src="/static/img/Nextjs.svg"
            alt="Nextjs Logo"
          />
          <img
            className="h-10 w-10  "
            src="/static/img/Sass.svg"
            alt="Sass Logo"
          />
          <img
            className="h-10 w-10 "
            src="/static/img/Redux.svg"
            alt="Redux Logo"
          />
          <img
            className="h-10 w-10 "
            src="/static/img/Node.svg"
            alt="Nodejs Logo"
          />
          <img
            className="h-10 w-10 bg-white rounded-full"
            src="/static/img/Aws.svg"
            alt="Aws Logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">OCT 2021 - MAR 2022</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary points Summary points Summary points Summary points Summary
            points
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
