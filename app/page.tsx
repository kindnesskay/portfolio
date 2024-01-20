import Lamp from "@/components/lamp";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="h-screen relative bg-black snap-y snap-mandatory overflow-y-scroll ">
      <div className="flex flex-col justify-center min-h-screen w-full snap-start bg-gradient-to-b from-blue-950 via-black to-black">
        <div>
          <h1 className="text-center text-white font-bold text-xl sm:text-xl md:text-3xl">
            Kay's
          </h1>
          <h2 className="text-center text-white font-bold text-3xl md:text-7xl sm:text-5xl">
            PORTFOLIO
          </h2>
        </div>
        <div className="text-white flex gap-4 justify-center font-semibold font-mono text-md md:text-lg">
          <Link href={"https://twitter.com/officialkay_ok"}>Twitter</Link>
          <Link href={"https://github.com/kindnesskay"}>Github</Link>
        </div>
      </div>
      <div className="min-h-screen snap-start flex flex-col items-center px-8">
        <h2 className="text-white font-bold text-lg p-4">Projects</h2>
        <Link href={"https://shop-bay-nine.vercel.app/"} target="_blank">
          <Image
            src={"/webcapture-shopbay.jpeg"}
            width={400}
            height={400}
            alt="shop bay"
            className="w-auto h-auto rounded-lg  hover:border-2 border-solid border-white hover:scale-105 transition-transform"
          />
        </Link>
        <p>Shop Bay</p>
        <p></p>
      </div>
    </section>
  );
}
