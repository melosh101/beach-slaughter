import Image from "next/image";
import Link from "next/link";
import { Navbar } from "~/_components/nabar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-slate-900 text-white">
      <SpeedInsights/>
      <Navbar/>
      <div>
        <Image alt="fælles" src={"/fælles.jpg"} width={"10"} height={"10"} className="aspect-auto w-44"></Image>
      </div>
    </main>
  );
}
