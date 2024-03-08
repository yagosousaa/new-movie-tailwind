import "./index.css";
import { Search, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Carrosel } from "./components/Carrosel";

export function App() {
  return (
    <div className="relative bg-zinc-950 text-white/80">
      <div className="absolute flex h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute h-full w-full bg-gradient-to-r from-black via-transparent to-black" />
        <div className="static h-full w-full bg-[url('src/assets/images/invert-image.png')] bg-right bg-no-repeat" />
        <div className="static h-full w-full bg-[url('src/assets/images/bg-image.png')] bg-left bg-no-repeat pr-[30rem]" />
      </div>

      <div className="relative">
        <header className="flex select-none justify-between px-20 py-10">
          <div className="cursor-pointer select-none text-xl font-bold text-yellow-400">
            <strong className=" rounded bg-yellow-400 p-1 font-bold text-black">
              NEW
            </strong>{" "}
            MOVIE
          </div>

          <nav>
            <ol className="flex items-start gap-16 text-lg">
              <li className="cursor-pointer border-b-4 border-white/40 pb-2 transition delay-75 hover:border-white/80 hover:text-white">
                New Movie
              </li>
              <li className="cursor-pointer transition delay-75 hover:text-white">
                Genre
              </li>
              <li className="cursor-pointer transition delay-75 hover:text-white">
                Country
              </li>
              <li className="cursor-pointer transition delay-75 hover:text-white">
                Movie
              </li>
              <li className="cursor-pointer transition delay-75 hover:text-white">
                TV Series
              </li>
              <li className="flex items-center gap-6">
                <Separator orientation="vertical" className="h-5 bg-white/80" />
                <Search className="size-6 cursor-pointer transition delay-75 hover:text-white" />
              </li>
            </ol>
          </nav>
        </header>

        <main className="px-20 py-10">
          <div className="w-6/12 cursor-default select-none space-y-6">
            <h1 className="text-7xl font-semibold text-white">
              Spider man <br /> No Way Home
            </h1>
            <div className="flex gap-2 text-white/70">
              <img src="src/assets/images/imdb logo.svg" alt="IMDb Logo" />
              8.2{" "}
              <strong className="font-normal text-white/40">(12.882)</strong>
              <p className="flex items-center gap-3">
                <strong className="font-normal">⦁</strong>
                <strong className="font-normal">2021</strong>
                <strong className="text-xs font-normal">|</strong>
                <strong className="font-normal">1 hour 55 minutes</strong>
                <strong className="text-xs font-normal">|</strong>
                <strong className="font-normal">Sci-fi</strong>
              </p>
            </div>
            <p className="w-5/6 text-balance text-base text-white">
              Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius
              eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna
              tempor imperdiet eu scelerisque egestas. Interdum mi orci
              suspendisse in s...
              <strong className="cursor-pointer text-yellow-400">
                See more
              </strong>
            </p>
            <div className="flex items-center gap-4">
              <button className="font-white rounded-lg border-2 px-6 py-3 font-semibold transition delay-75 hover:scale-105 hover:bg-white/10">
                Watch trailer
              </button>

              <button className="flex items-center gap-2 rounded-lg border-2 border-yellow-500 bg-yellow-500 px-6 py-3 font-semibold text-black transition delay-75 hover:scale-105 hover:border-yellow-400 hover:bg-yellow-400">
                <Play className="size-5 font-bold" /> Watch now
              </button>
            </div>
          </div>
        </main>

        <footer className="select-none py-10">
          <Carrosel />
        </footer>
      </div>
    </div>
  );
}
