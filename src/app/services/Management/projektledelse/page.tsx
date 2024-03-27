import Image from "next/image";
import cover from "@assets/projektledelse.jpg";

export default function projectManagement() {
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
              Projektledelse
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Projektledelse
        </h1>
        <p className="text-base md:text-lg">
          God og kompetent projektledelse er en forudsætning for et vellykket
          resultat – uanset opgavetypen. Hos NAOMA forstår vi, at energi-,
          infrastruktur-, bygge- og anlægsprojekter er omkostningstunge og
          kræver professionel projektledelse, hvis kundens ønsker og ambitioner
          skal realiseres.
          <br />
          <br />
          Derfor er vi med i alle projektets faser for at sikre optimale forhold
          omkring tidsstyring, økonomi og ikke mindst kvalitet.
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Få opfyldt alle succeskriterier
        </h1>
        <p className="text-base md:text-lg">
          Det kan være svært at styre forretningens kerneområder og sideløbende
          både starte og lede større projekter. Heldigvis har I mulighed for at
          tilknytte vores ekspertrådgivere, der besidder stor erfaring inden for
          ledelse af alle projekttyper.
          <br />
          <br />
          Vi opfylder jeres succeskriterier på baggrund af stærkt lederskab,
          effektiv kommunikation og de rette faglige kompetencer.
          <br />
          <br />
          Da vi samtidig gør op med kassetænkning, og finder de bedste rammer
          til netop jeres projekt, er vejen banet for at bygge bro mellem vision
          og et vellykket slutresultat.
          <br />
          <br />
          Som erfarent rådgivningshus kan vi naturligvis hjælpe med både dele
          eller hele projektledelsesprocesser, hvor vi varetager jeres interesse
          allerede fra idéfasen og videre til planlægning, design,
          implementering, drift og vedligeholdelse.
          <br />
          <br />
          Vi hjælper blandt andet med: <br />
          <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Udarbejdelse af Projekt Initierings Dokument (PID)</li>
            <li>Interessentanalyse</li>
            <li>Fasemodellen</li>
            <li>Kommunikationsplaner</li>
            <li>Rollefordeling</li>
            <li>Risikostyring</li>
            <li>Udarbejdelse af tidsplaner i Microsoft Project</li>
          </ul>
        </p>
      </div>
    </>
  );
}
