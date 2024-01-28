'use client'
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetID = href.replace(/.*\#/, "");
    const element = document.getElementById(targetID);
    if(!element)return
    window.scrollTo({
      top: element?.getBoundingClientRect().top-80,
      behavior: "smooth",
    });
  };
  return (
    <nav className="h-16 bg-blue-950 p-2 fixed z-20 w-full flex items-center lg:justify-center gap-4">
      <div className="h-full w-fit flex items-center lg:hidden">
        <Image height={40} width={40} alt="menu" src={"/assets/menu.svg"} />
      </div>
      <div className="text-white font-bold max-lg:hidden">
        <Link href={"#projects"} onClick={handleScroll}>Projects</Link>
      </div>
    </nav>
  );
}
