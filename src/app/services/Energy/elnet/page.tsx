import Image from "next/image";
import cover from "@assets/coverElnet.jpg";

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
              EL-net
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <p className="text-base md:text-lg">
          Hos NAOMA rådgiver vi inden for kendte tekniske løsninger til
          elnettet. Det er afgørende, at brugerne har adgang til et pålideligt
          transmissions- og distributionsnet, hvorfor vi fokuserer på holdbare
          og langsigtede løsninger med høj forsyningskvalitet.
          <br />
          <br />
          Samtidig stiller fremtidens elnet krav til at kunne fungere med den
          stigende mængde af vedvarende energiformer og sikre stabil
          distribution fra produktion til forbruger.
          <br />
          <br />
        </p>
        <hr className=" my-20" />

        <h2 className="text-xl font-semibold text-black md:text-3xl">
          Vi dækker elforsyningens vigtigste discipliner
        </h2>
        <p className="text-base md:text-lg">
          NAOMA er din ekspert inden for elforsyningens vigtigste discipliner og
          fagområder. Vi analyserer, rådgiver, planlægger og etablerer løsninger
          til ethvert behov.
          <br /> <br />
          Fra stationsanlæg som afgørende knudepunkter for elnettet til
          ledningsanlæg for energi- og internetselskaber, relæbeskyttelser for
          at forhindre skader på personer og anlæg, net- og systemplanlægning
          som sikkerhed for at kunne levere el i en ordentlig kvalitet samt
          meget mere.
          <br /> <br />
          Uanset opgaven, er god energirådgivning essentiel for
          leveringssikkerhed og kvalitet samt de nationale og internationale
          klimamål, der skal sikres ved blandt andet øget energieffektivitet og
          flere energibesparelser.
          <br /> <br />
          <h2 className="text-lg font-semibold text-black md:text-2xl">
            Vi hjælper blandt andet med:
          </h2>
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Stationsanlæg</li>
            <li>Ledningsanlæg</li>
            <li>Relæbeskyttelse</li>
            <li>Lokal- og fjernkontrol</li>
            <li>Net- og systemplanlægning</li>
            <li>Energirådgivning</li>
            <li>SRO (Styring, Regulering og Overvågning)</li>
          </ul>
        </p>
      </div>
    </>
  );
}
