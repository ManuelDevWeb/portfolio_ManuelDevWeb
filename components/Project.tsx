import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name?: string;
  picture?: string;
  development?: string;
  description?: string;
};

const Project = ({ picture, name, development }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-14 md:p-40 h-screen"
    >
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={`/static/img/${picture}`}
        width={500}
        height={500}
        alt={`Img ${picture}`}
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            {development}
          </span>
          : {name}
        </h4>

        <p className="text-sm md:text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus
          necessitatibus harum ipsa ipsam eligendi ea molestias, rem recusandae,
          numquam sed tenetur rerum illum aperiam officia corporis ut quo amet.
          amet consectetur adipisicing elit. Est cumque sunt voluptatum
          inventore vel veritatis eum architecto.
        </p>
      </div>
    </motion.div>
  );
};

export { Project };
