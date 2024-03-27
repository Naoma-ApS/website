import Image from "next/image";
import cover from "@assets/projektledelse.jpg";

export default function riskManagement() {
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
              Risikoledelse
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <p className="mt-10 text-base md:text-lg">
          God risikoledelse minimerer risici og optimerer sikkerheden i de
          sektorer, der arbejdes inden for. Hos NAOMA tager vi sikkerheden meget
          alvorligt – både i forhold til det personale, der arbejder på
          projektet, men også for de almene brugere, som f.eks. passagerer ved
          jernbanen, trafikanter etc.
          <br />
          <br />
          Vi anvender formel og metodisk struktureret risiko- og
          sikkerhedsstyring, hvor erfarne rådgivere vurderer arbejdsmiljø,
          udfører due diligence på områder og i miljøer, gransker og validerer
          tekniske systemer og deres pålidelighed samt meget mere.
          <br />
          <br />
          Vi er særligt specialiserede inden for jernbanesektoren, ved
          anlægsarbejde og infrastruktur, ved energiprojekter samt inden for
          overordnet management.
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          I tråd med normer og standarder
        </h1>
        <p className="text-base md:text-lg">
          Ofte stiller myndighederne krav om, at etableringer, tekniske
          systemer, styringsprocesser m.m. følger bestemte normer og standarder.
          Disse krav kan komplicere de enkelte risikostyringsprocesser og stille
          store krav til teknisk viden.
          <br />
          <br />
          Hos NAOMA samarbejder du altid med en specialrådgiver, der har
          overblik og kender de enkelte krav til dokumentationen. Vi tilbyder
          risikoanalyser- og vurderinger på både tekniske, menneskelige og
          organisatoriske niveauer – fra mere simple analyser til det meget
          komplekse.
          <br />
          <br />
          Vi hjælper blandt andet med:
          <br />
          <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Afholdelse af risikoworkshops</li>
            <li>Identificering af risici</li>
            <li>Oprettelse af risikoregister</li>
            <li>Tildeling af risici til risikoejer</li>
          </ul>
        </p>
      </div>
    </>
  );
}
