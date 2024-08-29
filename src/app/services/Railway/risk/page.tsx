import Image from "next/image";
import cover from "@assets/jernbanesikkerhed.jpg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Jernbanesikkerhed",

  description:
    "Et større fokus på sikkerhed giver færre ulykker. Sikkerhedsplanlægning for baneprojektet er essentielt præventivt arbejde, der skal forhindre personskader samt skader på materiel. Derfor bør sikkerhedsplaner indtænkes allerede fra projektstart, med henblik på at minimere risici samt leve op til krav for myndigheder og etablere et professionelt arbejdsmiljø.",
};

export default function highCurrent() {
  return (
    <>
      <div className="relative mt-14 h-96 w-full">
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
              Jernbanesikkerhed
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Jernbanesikkerhed
        </h1>
        <p className="text-base md:text-lg">
          Et større fokus på sikkerhed giver færre ulykker.
          Sikkerhedsplanlægning for baneprojektet er essentielt præventivt
          arbejde, der skal forhindre personskader samt skader på materiel.
          Derfor bør sikkerhedsplaner indtænkes allerede fra projektstart, med
          henblik på at minimere risici samt leve op til krav for myndigheder og
          etablere et professionelt arbejdsmiljø.
          <br />
          <br />
          Hos NAOMA anvender vi formel og metodisk struktureret risiko- og
          sikkerhedsstyring. Vi leverer risikoanalyser til alle typer
          jernbaneprojekter, hvor både ansatte såvel som passagerer omkring
          banen og tilstødende områder har vores fulde opmærksomhed for at
          maksimere personsikkerheden.
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Professionel konsulentbistand til Risk Management
        </h1>
        <p className="text-base md:text-lg">
          NAOMA leverer professionel konsulentbistand til Risk Management, altså
          sikkerheds- og risikorelaterede ydelser og analyser indenfor
          jernbanesektoren.
          <br />
          <br />
          I kraft af erfaring med denne type ydelser, kan vi løfte hele
          sikkerheden omkring dine projekter med analyser og vurderinger,
          styringsprocesser (inkl. krav fra myndigheder) samt RAM-analyser
          (Reliability, Avaliability og Maintainability) for at bestemme teknisk
          pålidelighed og meget mere.
          <br />
          <br />
          Vores sikkerhedsledelsessystemer lever naturligvis op til Banedanmarks
          regler, normer og krav.
          <br />
          <br />
          Vi hjælper blandt andet med: <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>CSM - Common Safety Method</li>
            <li>RAM - Reliability, Avaliability og Maintainability</li>
            <li>Udarbejdelse af systemdefinitioner</li>
            <li>Afholdelse af risikoworkshop og uddannelse</li>
            <li>Fareidentifikation og mitigerende / barriere handlinger</li>
          </ul>
        </p>
      </div>
    </>
  );
}
