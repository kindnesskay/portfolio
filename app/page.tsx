import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col w-full h-screen bg-black items-center justify-center">
      <div>
        <h1 className="text-center text-white font-bold text-xl md:text-3xl">Kay's</h1>
        <h2 className="text-center text-white font-bold text-3xl md:text-7xl">PORTFOLIO</h2>
      </div>
      <div className="text-white flex gap-4 font-semibold font-mono text-md md:text-lg">
        <Link href={'https://twitter.com/officialkay_ok'}>Twitter</Link>
        <Link href={'https://github.com/kindnesskay'}>Github</Link>
      </div>
    </section>
  );
}
