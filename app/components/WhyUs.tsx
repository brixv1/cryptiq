"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

import { IoStatsChartSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

const WhyUs = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section
      id="why-us"
      className="flex flex-col items-center  justify-center bg-secondary py-10"
    >
      <div className="flex w-[90%] flex-col items-center justify-center md:w-[85%] lg:w-[80%] lg:flex-row-reverse lg:justify-between">
        <motion.div
          initial={{ x: 15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:max-w-[40%]"
        >
          <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Why you should choose Cryptiq
          </h1>
          <p className="my-3 text-stone-200 md:my-4 md:text-lg lg:my-5 lg:text-xl">
            Experience the fastest crypto exchange on the market, Buy and sell
            cryptocurrencies with ease and security. Join millions of users who
            have trusted Cryptiq for their digital currency transactions.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-4 rounded-full bg-accent px-6 py-2 text-lg font-bold text-primary shadow-black transition-shadow duration-150 focus:outline-primary md:px-8 md:py-3 md:text-xl lg:px-10 lg:py-4 lg:text-2xl lg:hover:shadow-md"
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/img/why-img.png" width={600} height={500} alt="hero" />
        </motion.div>
      </div>

      <div
        ref={ref}
        className="mt-10 w-[90%] md:w-[85%] lg:flex lg:w-[80%] lg:flex-row lg:justify-between"
      >
        <div className=" my-10 flex items-center ">
          <div className="mr-3 flex w-fit items-center  rounded-full bg-primary p-5 md:mr-5 md:p-6">
            <IoStatsChartSharp className="text-2xl text-accent md:text-3xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              ${inView ? <CountUp start={0} end={30} duration={5} /> : null}B
            </h2>
            <p className="text-xl text-stone-200 md:text-2xl">
              Digital Currency Exchanged
            </p>
          </div>
        </div>
        <div className=" my-10 flex items-center sm:justify-center">
          <div className="mr-3 flex w-fit items-center  rounded-full bg-primary p-5 md:mr-5 md:p-6">
            <FaUserAlt className="text-2xl text-accent md:text-3xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {inView ? <CountUp start={0} end={10} duration={6} /> : null}M+
            </h2>
            <p className="text-xl text-stone-200 md:text-2xl">
              Trusted Wallets Investors
            </p>
          </div>
        </div>
        <div className=" my-10 flex items-center sm:justify-end">
          <div className="mr-3 flex w-fit items-center  rounded-full bg-primary p-5 md:mr-5 md:p-6">
            <BsGlobeEuropeAfrica className="text-2xl text-accent md:text-3xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {inView ? <CountUp start={0} end={195} duration={4} /> : null}
            </h2>
            <p className="text-xl text-stone-200 md:text-2xl">
              Countries Supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
