import Lamp from "@/components/lamp";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col w-full h-screen justify-center items-center">
      <Lamp />
      <div  className="flex flex-col justify-center z-10">
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
    </section>
  );
}
