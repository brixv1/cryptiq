"use client";
import { FieldValues, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

import { toast, useToasterStore } from "react-hot-toast";

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  //limit to 1 toast at a time, so it doesnt look weird when spam
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  //on Form Submit
  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    axios
      .post("/api/newsletter", data)
      .then(() => {
        toast.success("Successfully signed up for newsletter", {
          position: "bottom-center",
        });
      })
      .catch(() =>
        toast.error("Something went wrong", {
          position: "bottom-center",
        }),
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      id="newsletter"
      className="mx-auto flex h-[75vh] w-[90%] items-center justify-center  text-primary md:w-fit "
    >
      <div className="mx-auto flex w-fit flex-col rounded-2xl bg-accent bg-[url('/img/features-circle-1.png')] bg-no-repeat  p-12">
        <div className="w-fit">
          <h1 className="mb-2 w-fit text-3xl font-bold md:text-4xl">
            Start Cryptiq now
          </h1>

          <p className=" text-slate-400 md:text-lg">
            Join now with Cryptiq to get the latest news and get into crypto.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col items-start "
        >
          <input
            {...register("email")}
            className="mt-2 rounded-md bg-secondary py-2 pl-1 pr-10 text-primary placeholder:text-slate-200 focus:outline-secondary "
            type="email"
            required
            placeholder="Enter your email"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-3 rounded-full bg-secondary px-8 py-2 font-bold focus:outline-secondary disabled:cursor-pointer disabled:opacity-50 md:px-10 md:py-3 md:text-lg"
            disabled={isLoading}
            type="submit"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};
export default Newsletter;
