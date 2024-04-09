import Image from "next/image";
import cover from "@assets/coverSol.jpg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Solenergi",

  description:
    "Solen udgør den største energikilde på jorden og er en af de mest kendte bæredygtige energityper. Solenergi repræsenterer – på samme måde som vindenergi – en af de største vedvarende energiformer, vi har til rådighed, og er derfor en vigtig kilde i fremtidens grønne energiforsyning.",
};

export default function solarPower() {
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
              Solenergi
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <p className="text-base md:text-lg">
          Solen udgør den største energikilde på jorden og er en af de mest
          kendte bæredygtige energityper. Solenergi repræsenterer – på samme
          måde som vindenergi – en af de største vedvarende energiformer, vi har
          til rådighed, og er derfor en vigtig kilde i fremtidens grønne
          energiforsyning.
          <br />
          <br />
          Hos NAOMA tilbyder vi helhedsorienteret ekspertrådgivning i
          anvendelsen af solenergi og opbygning af solcelleparker. Vi arbejder
          for bæredygtige løsninger, der udtænkes i forhold til både miljø og
          økonomi, samtidig med at vores specialister sikrer en tryg proces,
          hvor nøjagtig afsætning af anlægget sikrer optimal udnyttelse af
          solens kraft.
        </p>
        <hr className=" my-20" />

        <h2 className="text-xl font-semibold text-black md:text-3xl">
          NAOMA er dine specialister i grøn energi
        </h2>
        <p className="text-base md:text-lg">
          Med tanke på at solen hver dag forsyner jorden med energi svarende til
          flere tusinde gange vores daglige forbrug, er det langt fra
          tilfældigt, solenergi globalt set er en af de hurtigst voksende
          alternative energiformer.
          <br /> <br />
          HOS NAOMA står vi klar til at hjælpe dig med succesfuld planlægning,
          dimensionering og installation af solvarmeanlæg og underjordiske
          sæsonlagre. Med både faldende priser på solceller samt en højere
          efterspørgsel på bæredygtig energi, er tiden moden til at sætte endnu
          flere anlæg i drift. Vi rådgiver inden for både tekniske og økonomiske
          forundersøgelser, projektering, udbud, entreprise, anlæg samt drift og
          vedligeholdelse
          <br />
          <br />
          <h2 className="text-lg font-semibold text-black md:text-2xl">
            Vi hjælper blandt andet med:
          </h2>
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Operation management</li>
            <li>Dimensionering og installation af større solcelleparker</li>
          </ul>
        </p>
      </div>
    </>
  );
}
