import AuthForm from "@/app/components/AuthForm";
import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <Link
        href="/"
        className="absolute left-5 top-5 rounded-full bg-accent p-4"
      >
        <BsArrowLeftCircleFill className="text-2xl text-primary" />
      </Link>
      <Link href="/" className="text-3xl md:text-4xl lg:text-5xl">
        CRYPTIQ
      </Link>
      <AuthForm />
    </div>
  );
};
export default LoginPage;
