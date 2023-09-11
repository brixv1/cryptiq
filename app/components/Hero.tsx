"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center  lg:h-[calc(100vh-5rem)]"
    >
      <div className="flex w-[90%] flex-col items-center justify-center md:w-[85%] lg:w-[80%] lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:max-w-[40%] "
        >
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Fastest platform to get into crypto
          </h1>
          <p className="my-3 text-stone-800 md:my-4 md:text-lg lg:my-5 lg:text-xl">
            Buy and sell cryptocurrencies trusted by 10M wallets with over $30
            billion in transactions. Experience the power of decentralized
            finance with our secure and user-friendly platform. Join millions of
            users who have already taken control of their financial future and
            start investing in the future of money today.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center rounded-full bg-accent px-6 py-2 text-lg font-bold text-primary shadow-black transition-shadow duration-150 focus:outline-secondary md:px-8 md:py-3 md:text-xl lg:px-10 lg:py-4 lg:text-2xl lg:hover:shadow-md"
          >
            Try for FREE <FaArrowRight className="ml-3 md:ml-4 lg:ml-5" />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/img/hero-img.png" width={500} height={400} alt="hero" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
