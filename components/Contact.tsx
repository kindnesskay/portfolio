import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-black w-full min-h-20">
      <div className="text-white flex gap-4 justify-center font-semibold font-mono text-md md:text-lg">
        <Link href={"https://twitter.com/officialkay_ok"}>Twitter</Link>
        <Link href={"https://github.com/kindnesskay"}>Github</Link>
      </div>
    </div>
  );
}
