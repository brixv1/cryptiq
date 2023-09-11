"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Statistics = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-secondary text-primary lg:min-h-[75vh]">
      <div className="flex w-[90%] flex-col items-start md:w-[85%] lg:w-[80%] lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:mr-5 lg:max-w-[40%]"
        >
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Detailed Statistics
          </h1>
          <p className="my-3 text-stone-200 md:my-4 md:text-lg lg:my-5 lg:text-xl">
            Discover the latest crypto statistics and stay informed about market
            trends and performance. Gain valuable insights to make informed
            investment decisions.
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
            src="/img/feature-3-img.png"
            width={600}
            height={500}
            alt="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Statistics;
