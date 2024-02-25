import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import fullstack from "../assets/Full-stack.webp";
export default function page() {
  return (
    <section className=" relative text-slate-400 ">
      <div className="flex items-center pt-20 min-h-screen w-full gap-2  max-md:flex-col md:justify-around ">
        <div className="w-full max-md:max-w-xs md:max-w-sm px-4 mt-auto mb-auto">
          <h2 className=" font-bold text-3xl md:text-7xl sm:text-5xl mb-4">
            I am a Full stack Software Developer
          </h2>
          <Contact />
        </div>
        <div className="max-md:hidden">
          <Image
            placeholder="blur"
            src={fullstack}
            alt="full stack"
            className="w-auto h-auto rounded-lg"
          />
        </div>
      </div>
      <div
        className="min-h-screen justify-center flex flex-col items-center px-8 gap-4"
        id="projects"
      >
        {/* <h2 className="font-semibold text-3xl mb-12 text-white">Projects</h2> */}

        <div className="font-bold text-xl md:text-2xl sm:text-3xl md:flex py-4 px-4 w-full max-w-2xl">
          <div className="md:w-1/2 flex justify-center flex-col">
            <p className="text-md">E-commerce </p>
            <Link href={"https://shopbay.vercel.app/"} className="font-bold  mt-2 w-full text-white">Shopbay</Link>
          </div>
          <Link
            href={"https://shopbay.vercel.app/"}
            target="_blank"
            className="w-full max-w-96 "
          >
            <Image
              src={"/webcapture-shopbay.jpeg"}
              width={400}
              height={400}
              alt="shop bay"
              className="w-auto h-auto rounded-lg hover:border-2 border-solid border-white hover:scale-105 transition-transform"
            />
          </Link>
        </div>
        <div className="font-bold text-xl md:text-2xl sm:text-3xl md:flex py-4 px-4 w-full max-w-2xl">
          <div className="md:w-1/2 flex justify-center flex-col">
            <p className="text-md">Random project </p>
            <Link href={"https://random-project-generator.vercel.app"} className="font-bold mt-2 w-full text-white">R-P-G</Link>
          </div>
          <Link
            href={"https://random-project-generator.vercel.app"}
            target="_blank"
            className="w-full max-w-96"
          >
            <Image
              src={"/random-project.jpeg"}
              width={400}
              height={400}
              alt="Random project generator"
              className="w-auto h-auto  rounded-lg hover:border-2 border-solid border-white hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
