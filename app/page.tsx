/* eslint-disable react/no-unescaped-entities */
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/Carousel";
import Tag from "@/components/tag";

export default function Home() {
  return (
    <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <header className={` flex justify-center items-center flex-col gap-6 mb-0 `}>
        <h1 className={`${title({ size: "lg" })} text-center`}>
          👋 Hey, C'est Sofiane !{" "}
          <span className={`${title({ size: "lg" })} font-thin`}>
            Bienvenue sur mon projet de blog.
          </span>
        </h1>
        <h2 className={`${subtitle()} text-justify`}>
          <span className={`${title({ size: "sm" })} font-thin text-black dark:text-white`}>
            C'est un projet qui me permet de progresser toujours plus dans le développement web avec
            Next JS. <br /> Mais surtout, il me permet de parler du plus beau pays au monde : le
            Canada ! 🍁
          </span>
        </h2>
      </header>
      <h3 className={`${subtitle()} text-justify -mb-2`}>Les derniers articles :</h3>
      <Carousel />
      <section className={` w-full h-full flex gap-4 flex-col mt-2 `}>
        <h3 className={`${subtitle()} text-justify -mb-2`}>Catégories populaires :</h3>
        <div className={` w-full h-full flex gap-3 flex-wrap `}>
          <Tag tagName="Canada" />
          <Tag tagName="Québec" />
          <Tag tagName="Montréal" />
          <Tag tagName="Toronto" />
          <Tag tagName="Vancouver" />
          <Tag tagName="Calgary" />
          <Tag tagName="Charlottetown" />
        </div>
      </section>
    </section>
  );
}
