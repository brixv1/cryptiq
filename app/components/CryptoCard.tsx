"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  name: string;
  shortName: string;
  description: string;
  symbol: string;
};

const CryptoCard = (props: Props) => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="group mx-auto my-10 flex items-center rounded-md  bg-primary px-4 py-6 transition-colors duration-150 ease-in-out md:max-w-md  lg:h-[25rem] lg:w-80  lg:hover:bg-accent"
    >
      <div className="flex flex-col items-center lg:w-fit ">
        <div className="relative h-14 w-14 transition-all duration-150 ease-in-out md:h-16 md:w-16 lg:group-hover:scale-110">
          <Image src={props.symbol} fill alt={props.name} />
        </div>
        <div className="mt-3 flex flex-col items-center md:text-lg">
          <h3 className="text-xl font-bold text-secondary transition-colors duration-150 ease-in-out md:text-2xl lg:group-hover:text-primary">
            {props.name}{" "}
            <span className="text-slate-400 md:text-lg">{props.shortName}</span>
          </h3>
          <p className="mt-2 text-center text-slate-600 transition-colors duration-150 ease-in-out md:text-lg lg:group-hover:text-slate-400">
            {props.description}
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-4 rounded-full border-2 border-slate-400 p-4 md:p-5"
        >
          <MdArrowForwardIos className="text-2xl text-accent transition-all duration-150 ease-in-out lg:group-hover:scale-150 lg:group-hover:text-primary" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CryptoCard;
