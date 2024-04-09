import Image from "next/image";
import cover from "@assets/coverStarkstrom.jpg";

export default function highCurrent() {
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
              Stærkstrøm
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Stærkstrøm
        </h1>
        <p className="text-base md:text-lg">
          Sikkerhed og effektivitet er mærkesager hos NAOMA. Som rådgivende
          ingeniører tager vi vores arbejde med el-anlæg meget alvorligt,
          særligt da sikrings- og stærkstrømsarbejde har stor relation til de
          tilstødende områder, der ofte er fyldt med personer.
          <br />
          <br />
          Vi leverer gennemtænkte løsninger til alt fra perronens mange
          funktioner som elevatorer, belysning af spor og terræn, monitorering,
          højtaleranlæg m.m. til tavleanlæg, sporskiftevarme, togforvarme og
          fremmedstik (240 V, 400 V, 1000 V og 1500-V-anlæg) etc.
          <br />
          <br />
          Vi både analyserer, planlægger, implementerer, tester og indtænker
          sikkerhed i ethvert aspekt af stærkstrømsopgaverne.
          <br />
          <br />
          Samtidig dyrker vi klimatilpasning med henblik på at levere de bedste
          energiløsninger i hvert enkelt projekttilfælde – til glæde for samfund
          og miljø
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Sikkerhed frem for alt
        </h1>
        <p className="text-base md:text-lg">
          Det kræver helt særlige kompetencer at arbejde med stærkstrøm, både
          fra de enkelte opgavetyper og i kraft af krav om uddannelse i arbejde
          ved sporområder. Hos NAOMA råder vi over de rette kompetencer og
          følger naturligvis Stærkstrømsbekendtgørelsen som
          beskyttelsesforanstaltning i arbejdet med strøm og energiforsyning.
          <br />
          <br />
          Vi stiller vores ekspertise til rådighed og garanterer vellykkede
          resultater inden for etablering og opgraderinger af
          stærkstrømsanlægstyper.
          <br />
          <br />
          Vi hjælper blandt andet med: <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>Perron- og pladsbelysning</li>
            <li>Ombygning af tavler</li>
            <li>Sporskiftevarme</li>
            <li>Fremmednetstik og togforvarme</li>
            <li>Elevatorer</li>
          </ul>
        </p>
      </div>
    </>
  );
}
