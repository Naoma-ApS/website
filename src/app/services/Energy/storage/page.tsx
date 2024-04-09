import Image from "next/image";
import cover from "@assets/bms.png";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Lagring & BMS",

  description:
    "Lagring og BMS (Battery Management System) giver nu endnu bedre forudsætninger for at maksimerer gevinsten fra den grønne energi. F.eks. producerer et solcelleanlæg mest energi omkring middagstid, hvorimod forbruget typisk er størst om aftenen. Det forhold står skævt, da energien sendes ud til en lav pris for blot at måtte tilbagekøbes senere til en højere afgiftsbelagt pris, når elnettet er belastet.",
};

export default function storage() {
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
              Lagring & BMS
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <p className="text-base md:text-lg">
          Lagring og BMS (Battery Management System) giver nu endnu bedre
          forudsætninger for at maksimerer gevinsten fra den grønne energi.
          <br />
          <br />
          F.eks. producerer et solcelleanlæg mest energi omkring middagstid,
          hvorimod forbruget typisk er størst om aftenen. Det forhold står
          skævt, da energien sendes ud til en lav pris for blot at måtte
          tilbagekøbes senere til en højere afgiftsbelagt pris, når elnettet er
          belastet.
          <br />
          <br />
          Energilagring giver mulighed for undgå unødvendige forbrugstariffer
          ved at lagre overskudsproduktion og anvende strømmen senere. Derved
          får man mest mulig effekt fra det enkelte anlæg.
          <br />
          <br />
        </p>
        <hr className=" my-20" />

        <h2 className="text-xl font-semibold text-black md:text-3xl">
          Grøn omstilling med stort samfundspotentiale
        </h2>
        <p className="text-base md:text-lg">
          Både batterilagre og brintanlæg gør det muligt at etablerer anlæg, der
          kan anvende overskudsstrøm fra f.eks. vindenergi og solenergi.
          <br /> <br />
          Særligt brint rummer et stort potentiale i forhold til omstilling af
          energisystemet, da det giver et mere fleksibel anlæg, som er lettere
          at tilpasse de varierende mængder strøm på markedet – som f.eks.
          vindmøllestrøm. Overskydende strøm herfra kan på den måde lagres og
          være med til at fremstille brint mere bæredygtigt.
          <br /> <br />
          NAOMA tilbyder ekspertrådgivning til energilagringssystemer, hvor vi
          lægger vægt på at opfylde kundens ønsker og behov i en holdbar og
          sikker løsning.
          <br /> <br />
          <h2 className="text-lg font-semibold text-black md:text-2xl">
            Vi hjælper blandt andet med:
          </h2>
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>BMS til LI-ion og LiPo4</li>
            <li>Brintanlæg</li>
          </ul>
        </p>
      </div>
    </>
  );
}
