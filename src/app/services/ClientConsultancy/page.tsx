import Image from "next/image";
import cover from "@assets/BYG.jpg";
import image3 from "@assets/value.jpg";
import image4 from "@assets/Erfaring.jpg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Bygherrerådgivning",

  description:
    "Hos NAOMA tilbyder vi specialiseret bygherrerådgivning til både det offentligt og private kunder. Som bygherrerådgiver og tæt sparringspartner sikrer vi, at det er dine interesser, der bliver varetaget igennem hele forløbet. Vi er med helt fra den indledende behovsafklaring til den endelige realisering og aflevering af projektet.",
};
export default function railway() {
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
              Bygherrerådgivning
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 ">
        <p className="text-base md:text-lg">
          Hos NAOMA tilbyder vi specialiseret bygherrerådgivning til både det
          offentligt og private kunder. Som bygherrerådgiver og tæt
          sparringspartner sikrer vi, at det er dine interesser, der bliver
          varetaget igennem hele forløbet. Vi er med helt fra den indledende
          behovsafklaring til den endelige realisering og aflevering af
          projektet.
          <br />
          <br />
        </p>
        <hr className=" my-20" />

        <p className="my-10 items-center justify-center gap-6 text-base md:flex md:text-lg">
          <div className="w-full">
            <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
              Helhedsorienterede og værdiskabende
            </h2>
            <div className="justify-flex flex w-full justify-center">
              <Image
                src={image3}
                alt="image3"
                quality={100}
                className="my-10 max-w-[350px] rounded-full  sm:min-w-[300px]"
              />
            </div>
          </div>
          Rammerne for et vellykket projekt formes allerede indledningsvis. Det
          er her, vi identificerer potentielle risici og faldgruber, eliminerer
          dem og fortsætter processen bedre rustet mod forsinkelser og
          uforudsete udgifter.
          <br />
          <br />
          Hos NAOMA er vi dybt involveret igennem vores ledelsesstil og tilgår
          projektet helhedsorienteret. Det gør vi for at sikre løbende
          optimering og konstant fremdrift i et gennemtænkt projekt.
          <br />
          <br />
        </p>

        <div className="hidden sm:block ">
          <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
            Som byggeherrerådgiver tilbyder NAOMA stærke kompetencer og erfaring
            fra store tværfaglige projekter. Erfaring og kompetencer sikrer den
            bedste rådgivning i de enkelte projektfaser, hvilket sætter jer i
            stand til at træffe beslutninger på et oplyst grundlag.
            <br />
            <br />
            Vi hjælper under hele processen bygherren med at holde fokus på den
            overordnede vision og nå projektets enkelte succeskriterier. Alt
            sammen med fokus på kvalitet, tidsplan og økonomi i hvert enkel
            fase.
            <br />
            <br />
            <div className="w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Erfaring og de rette kompetencer
              </h2>
              <Image
                src={image4}
                alt="image4"
                quality={100}
                className="my-10 max-w-[350px] rounded-full  sm:min-w-[300px]"
              ></Image>
            </div>
          </p>
        </div>

        <div className="block sm:hidden ">
          <p className="my-10 items-center justify-center gap-6 text-base md:text-lg">
            <div className="w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Erfaring og de rette kompetencer
              </h2>
              <div className="justify-flex flex w-full justify-center">
                <Image
                  src={image4}
                  alt="image4"
                  quality={100}
                  className="my-10 max-w-[350px] rounded-full  sm:min-w-[300px]"
                />
              </div>
            </div>
            Som byggeherrerådgiver tilbyder NAOMA stærke kompetencer og erfaring
            fra store tværfaglige projekter. Erfaring og kompetencer sikrer den
            bedste rådgivning i de enkelte projektfaser, hvilket sætter jer i
            stand til at træffe beslutninger på et oplyst grundlag.
            <br />
            <br />
            Vi hjælper under hele processen bygherren med at holde fokus på den
            overordnede vision og nå projektets enkelte succeskriterier. Alt
            sammen med fokus på kvalitet, tidsplan og økonomi i hvert enkel
            fase.
            <br />
            <br />
          </p>
        </div>
        <div>
          <h2 className="text-left text-xl font-semibold text-black md:text-3xl">
            Bygherrerådgivning fra start til slut
          </h2>
          <p className="my-5 text-base md:text-lg">
            NAOMA tilbyder bygherrerådgivning, der styrker dig i din rolle som
            bygherre. Med vores omfattende elektriske og tekniske ekspertise
            samt stærke ledelseskompetencer styrer vi bygge- og anlægsprocessen
            fra start til slut, altid med fokus på tid, pris og kvalitet. Vi
            lægger stor vægt på, at projekter leveres til aftalt tid, inden for
            budget og med den ønskede kvalitet. Vores tjenester dækker alle
            projektfaser fra de første afklaringer til idriftsættelsen af det
            færdige projekt.
            <br />
            <br />I de indledende faser fastlægges rammerne for projektets
            gennemførelse. Vi sikrer og definerer strategier, der understøtter
            en succesfuld projektgennemførelse. Når projektet skal
            konkretiseres, sørger vi for, at alle krav bliver integreret og
            opfyldt. Dette gælder både under projekteringen, udførelsen og
            idriftsættelsen, hvor vi tilbyder kontrol og projektstyring.
            <br />
            <br />
            Vi hjælper blandt andet med: <br />
            <br />
            <ul className="list-disc pl-8  text-base md:text-lg">
              <li>Strategisk rådgivning og planlægning</li>
              <li>Udarbejdelse af kravspecifikationer</li>
              <li>Koordination mellem alle involverede parter</li>
              <li>Risikovurderinger</li>
              <li>Slutinspektion og idriftsættelse</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
