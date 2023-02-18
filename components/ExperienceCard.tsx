import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  company?: string;
  position?: string;
  logo?: string;
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  description?: string[];
};

const ExperienceCard = ({
  company,
  position,
  logo,
  technologies,
  startDate,
  endDate,
  description,
}: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 lg:flex-shrink w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] py-10 px-4 md:px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        src={`/static/img/${logo}`}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{position}</h4>
        <p className="font-bold text-2x mt-1">{company}</p>
        <div className="flex space-x-2 my-1 md:my-2">
          {technologies?.map((technology, index) => (
            <Image
              key={`${technology}-${index}`}
              width={40}
              height={40}
              className={`${technology === "Typescript" && "rounded-full"}`}
              src={`/static/img/${technology}.svg`}
              alt={`${technology} Logo`}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-5 md:text-lg">
          {description?.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
