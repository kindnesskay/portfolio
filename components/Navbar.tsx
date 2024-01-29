"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetID = href.replace(/.*\#/, "");
    const element = document.getElementById(targetID);
    if (!element) return;
    window.scrollTo({
      top: element?.getBoundingClientRect().top - 80,
      behavior: "smooth",
    });
  };
  return (
    <nav className="h-16 backdrop-blur-md p-2 fixed z-20 w-full flex justify-center items-center">
      <div className="text-slate-500 font-bold max-w-5xl w-full">
        <Link href={"#projects"} onClick={handleScroll}>
          Projects
        </Link>
      </div>
    </nav>
  );
}
