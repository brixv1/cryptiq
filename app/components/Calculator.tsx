"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const Calculator = () => {
  const [revenue, setRevenue] = useState(0);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const { hashrate, unit } = data;

    if (unit === "GH/s") {
      const result = parseFloat(hashrate) * 0.0084536;
      setRevenue(parseFloat(result.toFixed(2)));
    } else if (unit === "TH/s") {
      const result = parseFloat(hashrate) * 0.0456041;
      setRevenue(parseFloat(result.toFixed(2)));
    } else if (unit === "PH/s") {
      const result = parseFloat(hashrate) * 0.3435356;
      setRevenue(parseFloat(result.toFixed(2)));
    } else if (unit === "EH/s") {
      const result = parseFloat(hashrate) * 2.4093903;
      setRevenue(parseFloat(result.toFixed(2)));
    } else {
      setRevenue(0);
    }
  };

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      id="calculator"
      className="mx-auto my-32 w-[90%] items-center rounded-2xl bg-secondary bg-[url('/img/calc-ribbon.png')] bg-center p-12 text-primary md:w-fit "
    >
      <div className="mx-auto flex w-fit flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col items-start lg:flex-row lg:items-center lg:space-x-20 "
        >
          <input
            className="mb-2 rounded-md bg-primary py-2 pl-1 text-secondary placeholder:text-secondary focus:outline-accent lg:my-0"
            type="number"
            {...register("hashrate")}
            required
            min="0"
            max="100000"
            step="any"
            placeholder="Enter your hash rate"
          />
          <select
            {...register("unit")}
            className="rounded-md bg-primary px-2 py-1 text-secondary focus:outline-accent"
          >
            <option>GH/s</option>
            <option>TH/s</option>
            <option>PH/s</option>
            <option>EH/s</option>
          </select>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-3 rounded-full bg-accent px-8 py-2 font-bold focus:outline-primary md:px-10 md:py-3 md:text-lg lg:my-0"
            type="submit"
          >
            Calculate
          </motion.button>
        </form>

        <div className="w-fit">
          <h3 className="mb-2 mt-4 font-bold uppercase md:text-lg">
            Estimated 24 hour revenue:
          </h3>
          <h1 className="mb-2 w-fit text-3xl font-bold md:text-4xl">
            {revenue} BTC{" "}
            <span className=" text-accent">
              ({revenue > 0 ? (revenue * 27543).toFixed(0) : 0}$)
            </span>
          </h1>

          <p className="italic text-slate-400 md:text-lg">
            Revenue is based on mining difficulty and Bitcoin price.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Calculator;
