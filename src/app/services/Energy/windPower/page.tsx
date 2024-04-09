import Image from "next/image";
import cover from "@assets/windenergy.jpg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Vindenergi",

  description:
    "Danmark hører til de førende lande inden for udnyttelse og udvikling af vindenergi. De store fordele er, at vindenergi er en vedvarende energikilde, der tilmed er tæt på CO2-neutral.",
};

export default function windPower() {
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={cover}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center drop-shadow-2xl">
          <header>
            <h1 className="text-4xl font-bold text-white md:text-7xl">
              Vindenergi
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <p className="text-base md:text-lg">
          Danmark hører til de førende lande inden for udnyttelse og udvikling
          af vindenergi. De store fordele er, at vindenergi er en vedvarende
          energikilde, der tilmed er tæt på CO2-neutral.
          <br />
          <br />
          NOAMA er din leverandør inden for planlægning og installation til alle
          faser af onshore og offshore vindenergiprojekter. Vi er dybt engageret
          i bæredygtig energiomstilling, hvor vi yder totalløsninger og support
          i hele processen.
          <br />
          <br />
          Som samarbejdspartner kan du forvente et projekt med udgangspunkt i
          dine ønsker og behov, hvortil vi garanterer ekspertrådgivning fra
          første idé til det færdige anlæg står klar.
        </p>
        <hr className=" my-20" />

        <h2 className="text-xl font-semibold text-black md:text-3xl">
          Med i alle faser
        </h2>
        <p className="text-base md:text-lg">
          Hos NAOMA fokuserer vi på kundens behov i alle faser af vindprojektet.
          Vi hjælper med planlægning og forundersøgelser, projektudvikling,
          design, udbud og kontraktforhandlinger, byggeledelse, tilsyn og
          risikostyring ved installation samt drift og vedligeholdelse. Alt
          sammen med henblik på af minimere risici, maksimere udbyttet og sikre
          den bedste levetid på vindmølleparken.
          <br /> <br />
          Vores omfattende erfaring gør, at vi både kan håndtere hele projekter
          eller agere ekspertkonsulent på delprojekter.
          <br /> <br />
          <h2 className="text-lg font-semibold text-black md:text-2xl">
            Vi hjælper blandt andet med:
          </h2>
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Operation management</li>
            <li>
              Dimensionering og installation af større vindmølleparker - både
              onshore og offshore
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
