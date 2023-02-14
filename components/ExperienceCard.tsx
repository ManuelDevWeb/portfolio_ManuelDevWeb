import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = ({}: Props) => {
  return (
    <article>
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
        src="/static/img/Cbw.png"
        className="w-32 h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]"
      ></motion.img>
    </article>
  );
};

export default ExperienceCard;
