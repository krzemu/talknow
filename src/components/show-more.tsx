import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type ShowMoreProps = {
  className?: string;
  href: string;
};

export default function ShowMore({ className, href }: ShowMoreProps) {
  return (
    <Link
      href={href}
      className={cn(`flex items-center gap-2 group text-gray-50/70 hover:text-gray-50`, className)}>
      <span className="group-hover:-translate-x-1 transition ">Show More</span>
      <ArrowRightIcon className="group-hover:translate-x-1 transition" />
    </Link>
  );
}
