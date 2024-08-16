"use client"
import Image from "next/image";
import { Navbar } from "~/_components/nabar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { doc } from "prettier";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-slate-900 text-white">
      <SpeedInsights />
      <Navbar />
      <div className="mt-20 flex min-h-[80%] justify-center">
        <div className="flex flex-col">
          <li className="ml-8 list-none text-7xl font-bold text-red-600">
            NYT ALBUM
          </li>
          <div className="contianer w-fit rounded-xl bg-blue-500 p-2">
            <div id="album" onClick={handleShowVideo} className="cursor-pointer">
              <Image
                alt="blood stains sand"
                src={"/albums/blood-stained-sand.png"}
                width={"500"}
                height={"500"}
                className="aspect-square size-[30rem]"
              ></Image>
            </div>
            <iframe
              className="hidden"
              id="video"
              src="https://roskildetekniskeskole-my.sharepoint.com/personal/u2475617_rts-365_dk/_layouts/15/embed.aspx?UniqueId=f3c24543-272e-4152-9c7d-0fbeb09588bf&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
              width="640"
              height="360"
              scrolling="no"
              title="Beach_slaughter_finalmovie.mp4"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        id="disc"
        className="mb-20 ml-16 mt-36 h-1 w-[90%] bg-slate-800 drop-shadow-xl"
      ></div>

      <li className="mb-4 ml-80 w-80 list-none text-4xl font-bold underline underline-offset-8">
        Discography
      </li>
      <div className="flex min-h-screen flex-row justify-center gap-36">
        <div>
          <li className="list-none font-bold">beached scallop</li>
          <Image
            alt="blood stains sand"
            src={"/albums/blood-stained-sand.png"}
            width={"500"}
            height={"500"}
            className="aspect-square size-60"
          />
        </div>
        <div>
          <li className="list-none font-bold">call of tide</li>
          <Image
            alt="call of tide"
            src={"/albums/call-of-tide.png"}
            width={"500"}
            height={"500"}
            className="aspect-square size-60"
          />
        </div>
        <div>
          <li className="list-none font-bold">the surfers death</li>

          <Image
            alt="blood stains sand"
            src={"/albums/the-surfers-death.png"}
            width={"500"}
            height={"500"}
            className="aspect-square size-60"
          />
        </div>
      </div>
      <div
        id="disc"
        className="mb-20 ml-16 mt-36 h-1 w-[90%] bg-slate-800 drop-shadow-xl"
      ></div>
      <div className=""></div>
    </main>
  );
}

function handleShowVideo() {
  const image = document.getElementById("album");
  const video = document.getElementById("video");
  image!.style.display = "none"
  video!.style.display = "block"
}