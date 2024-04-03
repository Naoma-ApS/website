import Image from "next/image";
import cover from "@assets/BYG.jpg";
import image3 from "@assets/value.jpg";
import image4 from "@assets/Erfaring.jpg";
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
                className="my-10 w-3/4 rounded-full"
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
                className="my-10 rounded-full "
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
                  className="my-10 w-3/4 rounded-full"
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
      </div>
    </>
  );
}
