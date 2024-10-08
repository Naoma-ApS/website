import Image from "next/image";
import image1 from "@assets/om_os_stock-scaled.jpg";
import image2 from "@assets//Per&jonas.jpg";
import image3 from "@assets/Nabil&amel.jpg";
import image4 from "@assets/TableFromTop.jpg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Om NAOMA",

  description:
    "I 2019 blev NAOMA ApS (benævnt som Naoma), oprettet af ingeniørerne Nabil og Amel. De drømte om at skabe en virksomhed, hvor de kunne hjælpe andre virksomheder og enkelte kunder med at styre deres projekter på en optimerbar og tidsbesparende måde. Grundlæggerne bag NAOMA har en solid profil med sammenlagt 70+ års erfaring som projektledere på bred vifte af tekniske fag. De har således taget del i udviklingen på jernbaneområdet og inden for byggebranchen. ",
};

export default function AboutUsPage() {
  return (
    <>
      <div className="relative mt-14 h-96 w-full">
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
              Om NAOMA
            </h1>
            <hr />
            <div className="text-center text-lg text-white md:text-2xl">
              Stiftet i København - 2019
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-7xl gap-12 px-5 py-16">
        <h1 className="text-2xl font-extrabold md:text-5xl  ">
          <span className="text-left text-black">Historien om NAOMA</span>
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="w-full pr-8 md:w-3/5 ">
            <p className="pt-5 text-base md:text-xl">
              I 2019 blev NAOMA ApS (benævnt som Naoma), oprettet af
              ingeniørerne Nabil og Amel.
              <br />
              <br />
              <p>
                NAOMA
                {/* <span className="ml-24 md:ml-72">ɛn-eɪ-əʊ-ɛm-eɪ</span> */}
                <span className="ml-24 md:ml-72">[na-o-ma]</span>
              </p>
              <hr className="my-5" />
              NA(bil) O(g) (le)MA
            </p>
            <p className="text-base md:text-xl">
              <br />
              De drømte om at skabe en virksomhed, hvor de kunne hjælpe andre
              virksomheder og enkelte kunder med at styre deres projekter på en
              optimerbar og tidsbesparende måde. Grundlæggerne bag NAOMA har en
              solid profil med sammenlagt 70+ års erfaring som projektledere på
              bred vifte af tekniske fag. De har således taget del i udviklingen
              på jernbaneområdet og inden for byggebranchen.
              <br /> <br />
              NAOMA har gennem perioden været dynamoen for talrige projekter, og
              de er fortsat stærkt repræsenteret.
              <br />
              <br />I dag har NAOMA en bred portefølje af ydelser, der omfatter
              jernbane, el, bygherrerådgivning,
            </p>
          </div>
          <div className="w-full py-5 md:w-2/5 md:py-0">
            <Image
              src={image3}
              alt="Image"
              width={600}
              height={600}
              quality={100}
              className="rounded-lg "
            />
          </div>
        </div>
        <hr className="my-16 border-gray-400" />

        <h1 className="pb-8 text-2xl font-extrabold md:text-5xl ">
          <span className="text-left text-black">Kvalitet er i vores DNA</span>
        </h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full py-5 md:w-2/5 md:py-0">
            <Image
              src={image2}
              alt="Image"
              width={750}
              height={750}
              quality={100}
              className="rounded-lg "
            />
          </div>
          <div className="w-full  md:w-3/5 ">
            <p className="text-base md:text-xl">
              Samarbejde med kunder, leverandører og andre interessenter sikrer,
              at vores ydelser opnår høj kvalitet, der overholder gældende lov-
              og myndighedskrav.
              <br />
              <br />
              Vi vil til stadighed udvikle os og være innovative gennem dialog
              med kunder, og den erfaring vi erhverver os.
              <br />
              <br />
              Vi er åbne og modtagelige for feedback fra vores kunder og
              samarbejdspartnere for at sikre en løbende forbedring af
              kvaliteten.
              <br />
              <br />
              Sammen med vores leverandører vil vi løbende optimere kvaliteten
              på vores udførelse af metoder, og herigennem forbedre den samlede
              kvalitet på vores ydelser. Vi vil inddrage vores kunders behov og
              forventninger til kvalitet og pris, for at sikre høj
              kundetilfredshed og langvarige relationer.
              <br />
              <br />
              Ved at sikre personlig og faglig udvikling af vores medarbejdere
              vil vi fremme en kvalitetsbevidst og resultatorienteret
              virksomhedskultur.
              <br />
              <br />
              Nye medarbejdere skal introduceres grundigt i denne
              virksomhedskultur foruden virksomhedens strategier, målsætninger
              samt kvalitets- og miljøledelsessystem. Planlægning og optimering
              af interne og eksterne ressourcer, samt optimering af vores
              processer, skal bidrage til øget kvalitet af vores produkter og
              ydelser, og samtidigt reducere omkostninger og tidsforbrug.
            </p>
          </div>
        </div>
        <hr className="my-16 border-gray-400" />

        <h1 className="pb-8 text-2xl font-extrabold md:text-5xl ">
          <span className="text-left text-black">Vores værdier</span>
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full pr-8 md:w-3/5 ">
            <ul className="list-disc pl-8 text-base md:text-xl">
              <li>
                Vi drives af en resultatorienteret og kvalitetsbevidst kultur -
                derfor er det en naturlig del af NAOMA at sikre personlig og
                faglig udvikling af medarbejdere.
                <br />
                <br />
              </li>
              <li>
                Hos os er feedback en rutine. Vi er åbne for feedback fra alle
                for at sikre en løbende optimering af kvaliteten på vores
                udførelse af metoder og ydelser, høj kundetilfredshed og
                langvarige relationer.
                <br />
                <br />
              </li>
              <li>
                Vi leverer innovative løsninger med fokus på løbende udvikling
                gennem dialog med kunder og den erfaring vi erhverver os.
                <br />
                <br />
              </li>
              <li>
                Når vi laver fejl, erkender vi dem og lærer af dem internt såvel
                som overfor vores kunder.
                <br />
                <br />
              </li>
              <li>
                Vi arbejder sammen og tager ejerskab i fællesskab - på den måde
                sikrer vi, at alle bevæger sig i samme retning.
                <br />
                <br />
              </li>
            </ul>
          </div>

          <div className="w-full py-5 md:w-2/5 md:py-0 ">
            <Image
              src={image4}
              alt="Image"
              width={750}
              height={750}
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
