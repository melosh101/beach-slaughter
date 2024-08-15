import Image from "next/image";
import { Navbar } from "~/_components/nabar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-slate-900 text-white">
      <SpeedInsights />
      <Navbar />
      <div className="flex justify-center mt-20 min-h-screen">
        <div className="flex flex-col">
          <li className="font-bold list-none text-7xl ml-8 text-red-600">NYT ALBUM</li>
          <div className="contianer w-fit rounded-xl p-2 bg-blue-500">
            <div>
              <Image
                alt="blood stains sand"
                src={"/albums/blood-stained-sand.png"}
                width={"500"} height={"500"}
                className="aspect-square size-[30rem]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div id="disc"  className="w-[90%] h-1 bg-slate-800 -mt-48 mb-48 ml-16 drop-shadow-xl"></div>

      <li  className="text-4xl list-none font-bold ml-80 mb-4 underline-offset-8 underline w-80">Discography</li>
      <div className="flex flex-row justify-center gap-36 min-h-screen">
            <div>
              <li className="list-none font-bold">beached scallop</li>
              <Image
                alt="blood stains sand"
                src={"/albums/blood-stained-sand.png"}
                width={"500"} height={"500"}
                className="aspect-square size-60"
              />
            </div>
            <div>
            <li className="list-none font-bold">beached scallop</li>
              <Image
                alt="blood stains sand"
                src={"/albums/blood-stained-sand.png"}
                width={"500"} height={"500"}
                className="aspect-square size-60"
              />
            </div>
            <div>
            <li className="list-none font-bold">beached scallop</li>

              <Image
                alt="blood stains sand"
                src={"/albums/blood-stained-sand.png"}
                width={"500"} height={"500"}
                className="aspect-square size-60"
              />
            </div>
          </div>
    </main>
  );
}
