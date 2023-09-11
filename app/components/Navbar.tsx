"use client";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import * as Scroll from "react-scroll";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dynamicNav, setDynamicNav] = useState(false);

  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setDynamicNav(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={clsx(
          " sticky top-0 z-50 select-none bg-primary transition-shadow duration-150",
          dynamicNav && "shadow-md shadow-black",
          menuOpen && "shadow-none",
        )}
      >
        <div className="mx-auto flex h-20 w-[90%] items-center justify-between md:w-[85%] lg:w-[80%]">
          <Scroll.Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-3xl uppercase md:text-4xl "
          >
            Cryptiq
          </Scroll.Link>
          {menuOpen ? (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-accent p-2 md:p-3 lg:hidden "
            >
              <AiOutlineClose
                className="text-3xl text-primary md:text-4xl "
                onClick={() => setMenuOpen(false)}
              />
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-accent p-2 md:p-3 lg:hidden "
            >
              <BiMenuAltRight
                className="text-3xl text-primary md:text-4xl "
                onClick={() => setMenuOpen(true)}
              />
            </motion.div>
          )}
          <ul className="hidden items-center text-xl lg:flex xl:text-2xl ">
            <Scroll.Link
              smooth={true}
              duration={500}
              to="why-us"
              offset={-80}
              className="mx-4 cursor-pointer hover:underline"
            >
              About
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              to="calculator"
              offset={-90}
              className="mx-4 cursor-pointer hover:underline"
            >
              Products
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              to="invest"
              className="mx-4 cursor-pointer hover:underline"
            >
              Features
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              to="newsletter"
              offset={-80}
              className="mx-4 cursor-pointer hover:underline"
            >
              Contact
            </Scroll.Link>
            {session?.status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="mx-4 cursor-pointer rounded-full bg-accent px-8 py-3 text-primary shadow-black transition-shadow duration-150 hover:shadow-lg xl:px-12"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="mx-4 cursor-pointer rounded-full bg-accent px-8 py-3 text-primary shadow-black transition-shadow duration-150 hover:shadow-lg xl:px-12"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </nav>
      {/* dropdown menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="fixed top-[5rem] z-40 flex h-[calc(100dvh-5rem)] w-screen flex-col items-center justify-center overflow-hidden bg-primary lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.15 }}
          >
            <Scroll.Link
              smooth={true}
              duration={500}
              to="why-us"
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-3xl md:py-6 md:text-4xl"
            >
              About
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              offset={-90}
              to="calculator"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-3xl md:py-6 md:text-4xl"
            >
              Products
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              to="invest"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-3xl md:py-6 md:text-4xl"
            >
              Features
            </Scroll.Link>
            <Scroll.Link
              smooth={true}
              duration={500}
              to="newsletter"
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-3xl md:py-6 md:text-4xl"
            >
              Contact
            </Scroll.Link>
            {session?.status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="mt-4 rounded-full bg-accent px-12 py-4 text-3xl text-primary md:mt-6 md:px-14 md:py-5 md:text-4xl"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full bg-accent px-12 py-4 text-3xl text-primary md:mt-6 md:px-14 md:py-5 md:text-4xl"
              >
                Login
              </Link>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
