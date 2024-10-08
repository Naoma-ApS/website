import Image from "next/image";
import cover from "@assets/Management.png";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Management",

  description:
    "Hos NAOMA arbejder vi for vellykkede projekter, hvor analyser, vurderinger, projektering, rådgivning samt respekt for kvalitet, tid og økonomi kører tæt parløb med kundens vision.",
};

export default function management() {
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
            <h1 className="text-4xl font-bold text-white md:text-7xl ">
              Management
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <h1 className="mb-5 text-xl font-semibold text-black md:text-4xl">
          Management
        </h1>
        <p className="text-base md:text-lg">
          Hos NAOMA arbejder vi for vellykkede projekter, hvor analyser,
          vurderinger, projektering, rådgivning samt respekt for kvalitet, tid
          og økonomi kører tæt parløb med kundens vision.
          <br />
          <br />
          Vi håndterer projektledelse, risikoledelse, byggeledelse og
          bygherrerådgivning i alle design- og projekteringsfaser med klart
          fokus på at sikre et projekt med:
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Den bedste kvalitet
        </h1>
        <p className="text-base md:text-lg">
          Til både bygge- og anlægsprojekter samt tekniske løsninger. Det er
          vigtigt at forstå, at kvalitet ikke udelukkende kan gøres op i
          materialer og finish, men også skal findes i harmonien mellem
          holdbarhed, æstetisk, funktionalitet og overordnet ’value for money’.
        </p>

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Den rette tid:
        </h1>
        <p className="text-base md:text-lg">
          Særligt ved tværfagligt arbejde ligger det os højt på sinde at
          optimere projektforløbet på baggrund af tæt dialog, grundig
          koordinering og effektivitet.
        </p>

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Tryghed og sikkerhed:
        </h1>
        <p className="text-base md:text-lg">
          Jo før vi inddrages i processen, jo før kan vi udrede potentielle
          risici og faldgruber, for derpå at styre projektet inden for budget
          mod kundens succeskriterier og vellykket overdragelse. Vi leverer
          tryghed og sikkerhed i kraft af en høj grad af kompetencer og
          faglighed samt erfaring med store tværfaglige projekter. Det sikrer
          ikke bare et professionelt og pålideligt forløb, men også arbejdsmiljø
          og personsikkerhed.
          <br />
          <br />
          <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
            Læs mere:
          </h1>
          Vi hjælper blandt andet med: <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <Link
              href="Management/projectManagement"
              className="hover:underline"
            >
              <li>Projektledelse</li>
            </Link>
            <Link href="Management/riskManagement">
              <li className="hover:underline">Risikoledelse</li>
            </Link>
            <Link href="Management/construction">
              <li className="hover:underline">Byggeledelse</li>
            </Link>
            <Link href="Management/strategyDevelopment">
              <li className="hover:underline">Strategiudvikling</li>
            </Link>
            <Link href="Management/education">
              <li className="hover:underline">Undervisning</li>
            </Link>
          </ul>
        </p>
      </div>
    </>
  );
}
