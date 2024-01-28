import Contact from "@/components/Contact";
import Lamp from "@/components/lamp";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className=" relative ">
      <div className="flex flex-col pt-20 min-h-screen w-full">
        <div className="w-full max-w-md  px-4 text-center">
          <h2 className=" text-white  font-bold text-3xl md:text-7xl sm:text-5xl">
            I am a Full stack Software Developer
          </h2>
        </div>
      </div>
      <div
        className="min-h-screen snap-start flex flex-col items-center px-8 pt-20"
        id="projects"
      >
        {/* <h2 className="text-white font-bold text-lg p-4 w-full">Projects</h2> */}
        <Link href={"https://shopbay.vercel.app/"} target="_blank">
          <Image
            src={"/webcapture-shopbay.jpeg"}
            width={400}
            height={400}
            alt="shop bay"
            className="w-auto h-auto rounded-lg  hover:border-2 border-solid border-white hover:scale-105 transition-transform"
          />
          Shop bay
        </Link>
      </div>
      <Contact />
    </section>
  );
}
