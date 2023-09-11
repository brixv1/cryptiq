"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast, useToasterStore } from "react-hot-toast";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [variant, setVariant] = useState<"LOGIN" | "REGISTER">("REGISTER");
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  const toggleVariant = () => {
    if (variant === "REGISTER") {
      setVariant("LOGIN");
    } else {
      setVariant("REGISTER");
    }
  };

  //limit to 1 toast at a time, so it doesnt look weird when spam
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then((res) => {
          toast.success(res.data);

          const { email, password } = data;
          const loginData = { email, password };

          signIn("credentials", {
            ...loginData,
            redirect: false,
          });
        })
        .catch((err) => {
          toast.error(err.response.data);
        })
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      const { email, password } = data;
      const loginData = { email, password };

      signIn("credentials", {
        ...loginData,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok && !callback?.error) {
            router.push("/");
            toast.success("Signed in succesfully");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="flex flex-col lg:mx-auto lg:w-1/4 ">
      <h2 className="mb-4 text-center text-lg italic md:text-xl">
        {variant === "REGISTER" ? "Register" : "Login"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        {variant === "REGISTER" && (
          <>
            <label htmlFor="username" className="font-bold md:text-lg">
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              name="username"
              className="mb-3 rounded border-2 py-1 pl-1 focus:outline-accent md:text-lg"
            />
          </>
        )}
        <label htmlFor="email" className="font-bold md:text-lg">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className="mb-3 rounded border-2 py-1 pl-1 focus:outline-accent md:text-lg"
        />
        <label htmlFor="password" className="font-bold md:text-lg">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          name="password"
          className="mb-3 rounded border-2 py-1 pl-1 focus:outline-accent md:text-lg"
        />
        {variant === "REGISTER" && (
          <>
            <label htmlFor="confirmpassword" className="font-bold md:text-lg">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              className="mb-3 rounded border-2 py-1 pl-1 focus:outline-accent md:text-lg"
            />
          </>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading}
          className="mx-auto mb-1 mt-2 w-[65%] rounded-full bg-accent px-6 py-2 font-bold text-primary shadow-md disabled:cursor-not-allowed disabled:opacity-50 md:px-9 md:py-3 md:text-lg lg:w-[45%]"
        >
          {variant === "REGISTER" ? "Register" : "Login"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          disabled={isLoading}
          className="mx-auto mb-1 mt-2 w-[65%] rounded-full bg-accent px-6 py-2 font-bold text-primary shadow-md disabled:cursor-not-allowed disabled:opacity-50 md:px-9 md:py-3 md:text-lg lg:w-[45%]"
          onClick={() => {
            setIsLoading(true);
            signIn("credentials", {
              email: "12345@gmail.com",
              password: "12345678",
              redirect: false,
            })
              .then((callback) => {
                if (callback?.error) {
                  toast.error("Invalid credentials!");
                }

                if (callback?.ok && !callback?.error) {
                  router.push("/");
                  toast.success("Signed in succesfully");
                }
              })
              .finally(() => setIsLoading(false));
          }}
        >
          Demo
        </motion.button>
      </form>
      <p
        className="cursor-pointer text-center text-stone-600 active:underline lg:hover:underline"
        onClick={toggleVariant}
      >
        {variant === "REGISTER"
          ? "Already have an account ?"
          : "Sign up for an account ?"}
      </p>
    </div>
  );
};
export default AuthForm;
