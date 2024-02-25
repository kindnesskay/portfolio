"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [project,setProject]=useState('Projects')
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetID = href.replace(/.*\#/, "");
    const element = document.getElementById(targetID);
    if (!element) return;
    if(element?.getBoundingClientRect().top ==0){
      setProject("Projects")
    }else{
      setProject("Hero")
    }
    
    window.scrollTo({
      top: element?.getBoundingClientRect().top ,
      behavior: "smooth",
    });
  };
  return (
    <nav className="h-16 backdrop-blur-md p-2 fixed z-20 w-full flex justify-center items-center">
      <div className="text-slate-500 font-bold max-w-5xl w-full">
        <Link href={"#projects"} onClick={handleScroll}>
          {project}
        </Link>
      </div>
    </nav>
  );
}
