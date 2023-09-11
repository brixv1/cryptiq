"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Invest = () => {
  return (
    <section
      id="invest"
      className="flex min-h-screen flex-col items-center justify-center border-b-[1px] border-slate-100 bg-secondary text-primary lg:min-h-[75vh]"
    >
      <div className="flex w-[90%] flex-col items-center md:w-[85%] lg:w-[80%] lg:flex-row-reverse lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:mr-5 lg:max-w-[40%]"
        >
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Invest Smart
          </h1>
          <p className="my-3 text-stone-200 md:my-4 md:text-lg lg:my-5 lg:text-xl">
            Discover the fascinating world of crypto statistics and unlock
            valuable insights into market trends and performance. Dive deep into
            the data and make informed investment decisions based on
            comprehensive analysis.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mb-10 mt-4 rounded-full bg-accent px-6 py-2 text-lg font-bold text-primary shadow-black transition-shadow duration-150 focus:outline-primary md:px-8 md:py-3 md:text-xl lg:px-10 lg:py-4 lg:text-2xl lg:hover:shadow-md"
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/img/feature-1-img.png"
            width={500}
            height={400}
            alt="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Invest;
