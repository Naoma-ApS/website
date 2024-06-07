import Image from "next/image";
import cover from "@assets/trafikAnalyse.jpg";
import { FaArrowRight } from "react-icons/fa";
import image2 from "@assets/regression-analysis-veje-630x624.png";
import image3 from "@assets/normal-disti-veje.png";
import image4 from "@assets/AI-veje.png";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Trafik Analyse",

  description:
    "Mens byerne fortsætter med at vokse, og antallet af køretøjer på vejene stiger, bliver behovet for effektive transportsystemer mere presserende. Det er her, trafikanalyse kommer ind i billedet. Ved at analysere data fra forskellige kilder og anvende statistiske og matematiske modeller kan vi opnå værdifulde indsigter, der hjælper os med at optimere transportsystemer, reducere trafikpropper og forbedre sikkerheden.",
};

export default function ITS() {
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
              Trafik Analyse
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Navigér fremtiden for transport med data-drevne indsigter
        </h1>

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Udforsk potentialet i trafikanalyse og optimer dit transportsystem
        </h1>
        <p className="text-base md:text-lg">
          Mens byerne fortsætter med at vokse, og antallet af køretøjer på
          vejene stiger, bliver behovet for effektive transportsystemer mere
          presserende. Det er her, trafikanalyse kommer ind i billedet. Ved at
          analysere data fra forskellige kilder og anvende statistiske og
          matematiske modeller kan vi opnå værdifulde indsigter, der hjælper os
          med at optimere transportsystemer, reducere trafikpropper og forbedre
          sikkerheden.
          <br />
          <br />
          På NAOMA specialiserer vi os i trafikanalyse og anvender de nyeste
          teknologier, herunder AI og ML, for at give vores kunder datadrevne
          løsninger, der virker.
        </p>
        <hr className=" my-20" />
        <h1 className="mb-5 text-xl font-semibold text-black md:text-3xl">
          Her er hvordan vi gør det:
        </h1>
        <p className="flex  gap-5 text-base md:items-center md:justify-center md:text-lg">
          <p className="w-full">
            <h1 className="mb-5 text-lg font-semibold text-black md:text-2xl">
              1. Indsamling af Data
            </h1>
            Det første skridt i trafikanalyse er indsamling af data. Vi bruger
            en række metoder til at indsamle information, herunder
            trafiktællinger, GPS-sporing og videoovervågning. Vi inkluderer også
            datasæt leveret af vores kunder i forskellige formater. Ved at
            indsamle data fra flere kilder kan vi få et mere fuldstændigt
            billede af trafikmønstre og identificere områder til forbedring.
          </p>
          <p className="hidden md:block">
            <FaArrowRight className="text-3xl md:text-7xl" />
          </p>
          <p className="w-full">
            <h1 className="mb-5 text-lg font-semibold text-black md:text-2xl">
              2. Statistiske og Matematiske Modeller
            </h1>
            Analyse af Data for Indsigter: <br /> Når vi har data, bruger vi
            statistiske og matematiske modeller til at analysere det. Disse
            modeller giver os mulighed for at identificere mønstre og tendenser
            i trafikflow, forudsige fremtidige trafikvolumener og identificere
            potentielle flaskerhalser. Vi bruger en række teknikker, herunder
            regressionsanalyse, tidsrækkeanalyse, Gaussian mixture modeller
            (GMM) og Monte Carlo-simulering for at udtrække indsigter fra data.
          </p>
        </p>
        {/* <p className="justify-flex flex flex-wrap items-center justify-center gap-20 text-base md:text-lg">
          <Image
            src={image2}
            alt="image2"
            quality={100}
            className="my-10 w-1/4 rounded-lg"
          />
          <Image
            src={image3}
            alt="image3"
            quality={100}
            className="my-10 w-1/4 rounded-lg"
          />
        </p> */}
        <p className="mt-10 flex gap-5 text-base md:items-center md:justify-center md:text-lg">
          <p className="w-full">
            <h1 className="mb-5 text-lg font-semibold text-black md:text-2xl">
              3. Programmeringssprog og nyeste teknologier
            </h1>
            Bygning af Datadrevne Løsninger: <br /> For at bygge datadrevne
            løsninger bruger vi en række programmeringssprog og de nyeste
            teknologier. Vi arbejder med Python, R og MATLAB til at bygge
            statistiske modeller og analysere data. Vi bruger også de nyeste AI-
            og ML-modeller til at automatisere dataanalyse og foretage
            forudsigelser baseret på data.
          </p>
          <p className="hidden md:block">
            <FaArrowRight className="text-3xl md:text-7xl" />
          </p>
          <p className="w-full">
            <h1 className="mb-5 text-lg font-semibold text-black md:text-2xl">
              4. Infusion af nyeste AI & ML tech / modeller
            </h1>
            Strømlining af Trafikanalyse: <br /> I NAOMA søger vi altid efter
            måder at strømline trafikanalyse på. Derfor forsker og tester vi
            konstant de nyeste AI- og ML-teknologier. Vi bruger disse
            teknologier til at automatisere dataindsamling og -analyse, så vi
            kan give vores kunder hurtigere og mere præcise indsigter.
          </p>
        </p>

        <div className="flex items-center justify-center ">
          <Image
            src={image4}
            alt="image4"
            quality={100}
            className="my-10 w-3/4 rounded-lg"
          />
        </div>
        <p className="text-base md:text-lg">
          <h1 className="my-5 text-lg font-semibold text-black md:text-2xl">
            5. Plug and Play & Ease of use
          </h1>
          Vores virksomhed har en stærk forståelse for vigtigheden af nem
          integration og brugervenlighed, når det kommer til at implementere nye
          softwareløsninger. Vi ved, at vores kunder har deres eget unikke behov
          og allerede har eksisterende systemer på plads. Derfor tilbyder vi
          plug and play-software, der let kan integreres med eksisterende
          systemer og infrastruktur.
          <br /> <br />
          Vi designer plug and play-software, som er specielt designet til at
          være intuitiv og brugervenlig, således at vores kunder kan få mest
          muligt ud af vores løsninger uden at skulle lære en masse nye
          systemer. Vores software fungerer problemfrit med forskellige systemer
          og infrastrukturer, herunder DOS, og kan implementeres med minimal
          indsats fra kundens side.
          <br /> <br />
          Vi præsenterer vores data og analyser på en klar og simpel måde, der
          gør det let at trække meningsfulde konklusioner og handle på dem.
          Vores rapporter er udarbejdet med henblik på at give vores kunder den
          information, de har brug for, uden at det bliver for kompliceret eller
          overvældende. Vi tror på, at klare og forståelige rapporter er nøglen
          til at skabe en succesfuld og givende samarbejdsoplevelse.
          <br /> <br />
          Vi mener, at enkelhed og brugervenlighed er nøglen til at skabe en
          succesfuld og langvarig samarbejdsoplevelse med vores kunder. Derfor
          er vores software både let at integrere og bruge, hvilket giver vores
          kunder mulighed for at fokusere på deres kernevirksomhed uden at
          skulle bekymre sig om tekniske detaljer.
        </p>
      </div>
    </>
  );
}
