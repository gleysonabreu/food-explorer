import { Button, Input } from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import logoSVG from "../../../public/logo.svg";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-row w-full items-center justify-center gap-52">
      <Image src={logoSVG.src} width={324} height={48} alt="Food Explorer" />
      <div className="w-full max-w-lg p-16 flex flex-col justify-center items-center bg-food-dark-700 rounded-2xl gap-8">
        <h1 className="text-food-light-100 leading-[140%] font-poppins font-medium text-2xl">
          Sign In
        </h1>
        <form className="flex flex-col gap-8 w-full">
          <fieldset className="flex flex-col gap-2">
            <label className="font-normal text-base leading-[100%] text-food-light-400">
              Email
            </label>
            <Input
              type="text"
              placeholder="Example: johndoe@johndoe.com"
              className="bg-food-dark-900 rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 outline-none text-food-light-100"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="font-normal text-base leading-[100%] text-food-light-400">
              Password
            </label>
            <Input
              type="password"
              placeholder="Min 6 characters"
              className="bg-food-dark-900 rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 outline-none text-food-light-100"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <Button>Go</Button>
          </fieldset>
          <Link
            href="/signup"
            className="text-food-light-100 text-center font-poppins font-normal text-sm"
          >
            Create your account
          </Link>
        </form>
      </div>
    </div>
  );
}
