import Image from "next/image";
import {
  FaSquareXTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex min-h-screen items-center bg-secondary py-10 text-primary">
      <div className="mx-auto grid w-[90%] grid-cols-1  text-center md:w-[85%] lg:w-[80%] lg:grid-cols-2 lg:items-center ">
        <div>
          <h1 className="mb-2 select-none text-4xl uppercase md:mb-5 md:text-5xl lg:text-left lg:text-6xl">
            Cryptiq
          </h1>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="space-y-2 text-slate-200 md:text-lg lg:mr-12 lg:text-xl">
            <h1 className="mb-1 text-xl text-primary underline md:text-2xl lg:text-3xl">
              Page Links
            </h1>
            <h2 className="mx-auto w-fit cursor-pointer">Products</h2>
            <h2 className="mx-auto w-fit cursor-pointer">Features</h2>
            <h2 className="mx-auto w-fit cursor-pointer">About</h2>
            <h2 className="mx-auto w-fit cursor-pointer">Contact</h2>
          </div>
          <div className="  space-y-2 text-slate-200 md:text-lg lg:text-xl">
            <h1 className="mb-1 text-xl text-primary underline md:text-2xl lg:text-3xl">
              Resources Links
            </h1>
            <h2 className="mx-auto w-fit cursor-pointer">Blog</h2>
            <h2 className="mx-auto w-fit cursor-pointer">FAQ</h2>
            <h2 className="mx-auto w-fit cursor-pointer">Support</h2>
            <h2 className="mx-auto w-fit cursor-pointer">Blockchain</h2>
          </div>
        </div>
        <div className="mt-5">
          <h1 className=" text-2xl font-bold md:text-3xl lg:text-left lg:text-4xl">
            We accept the following payment systems:
          </h1>
          <div className="my-3 flex justify-center space-x-5 md:my-5 lg:justify-start">
            <div className="relative h-11 w-16 md:h-14 md:w-20 lg:h-16 lg:w-24">
              <Image src="/img/bitcoin-dark.png" fill alt="bitcoin" />
            </div>
            <div className="relative h-11 w-16 md:h-14 md:w-20 lg:h-16 lg:w-24">
              <Image src="/img/mastercard.png" fill alt="mastercard" />
            </div>
            <div className="relative h-11 w-16 md:h-14 md:w-20 lg:h-16 lg:w-24">
              <Image src="/img/visa.png" fill alt="visa" />
            </div>
          </div>
        </div>

        <div className="mb-6 mt-4 flex justify-center space-x-4 lg:justify-end">
          <FaSquareXTwitter className="cursor-pointer text-4xl md:text-5xl lg:text-6xl" />
          <FaYoutube className="cursor-pointer text-4xl md:text-5xl lg:text-6xl" />
          <FaLinkedin className="cursor-pointer text-4xl md:text-5xl lg:text-6xl" />
          <FaInstagram className="cursor-pointer text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div className="lg:col-span-2">
          <p className="mt-1 md:mt-3 md:text-lg lg:mt-8 lg:text-xl">
            © 2023 CRYPTIQ. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
