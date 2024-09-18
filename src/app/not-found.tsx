import Main from "@/components/main";
import { WrapperBox } from "@/components/wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <Main className="flex-1 h-full flex justify-center items-center ">
      <WrapperBox className="text-xl text-center mb-24">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-5 hover:underline underline-offset-2  text-gray-50/60 hover:text-gray-50 transition">
          Go back to Home
        </Link>
      </WrapperBox>
    </Main>
  );
}
