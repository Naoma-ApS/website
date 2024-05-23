import Image from "next/image";
import image from "@assets/railway.jpg";
import image2 from "@assets/railway2.jpg";
import image3 from "@assets/projektstyring.jpg";
import image4 from "@assets/korestrom.jpeg";
import image5 from "@assets/starkstrom.jpg";
import image6 from "@assets/sikkerhed.jpeg";
import { frontPageBlogs } from "@components/Blog/blogs/frontpage";
import { BlogCard } from "@components/Blog/BlogCard";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Jernbane",

  description:
    "Som ingeniører er vi hver dag med til at realisere nutidens og fremtidens baneprojekter. Vores kernefokus er skabe de bedste miljøvenlige transportmuligheder i et moderne samfund.",
};

export default function railway() {
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center drop-shadow-2xl">
          <header>
            <h1 className="text-center text-3xl font-bold text-white md:text-7xl">
              Jernbane
            </h1>
            <hr />
            <div className="text-center text-lg text-white md:text-2xl">
              Ekspertiser og områder
            </div>
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Vi sporer frem mod fremtidens <br /> transport - skinnerne fører vejen
        </h1>
        <p className="text-base md:text-lg">
          Som ingeniører er vi hver dag med til at realisere nutidens og
          fremtidens baneprojekter. Vores kernefokus er skabe de bedste
          miljøvenlige transportmuligheder i et moderne samfund.
          <br />
          <br />
          I kraft af vores specialviden og erfaring løser vi baneprojekter fra
          traditionelle jernbaner til metrosystemer, letbaner og
          højhastighedsbaner.
          <br />
          <br />
          Vi vil bygge et bedre, sikkert og forbundet Danmark - hvor vores
          arbejde reflekteres i de fremtidige klimamål. Det er nu, vi skifter
          spor og sørger for, fremtidens jernbaneprojekter kører på skinner mod
          sikker, effektiv og miljørigtig transport
        </p>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Vores ekspertise og erfaring
        </h1>
        <p className="flex flex-col items-center justify-center gap-6 text-base md:flex md:text-lg">
          Hos NAOMA er vi baneeksperter med blik for trygge, grønne og
          langsigtede løsninger. I ethvert projekt skaber vi en tydelig køreplan
          fra design til implementeringsfaser, hvor der naturligvis tages hensyn
          til risikovurderinger, godkendelser, omkostningseffektivitet etc.
          <br /> <br />
          Vi er dybt dedikerede til at forme morgendagens jernbaner på en
          bæredygtig måde, som giver pålidelige løsninger og gør ambitiøse mål
          til virkelighed.
          <Image
            src={image2}
            alt="image2"
            quality={100}
            className="rounded-lg sm:min-w-[300px] sm:max-w-[800px]"
          />
        </p>

        <hr className=" my-20" />

        <h1 className=" mb-5 text-center text-3xl font-semibold text-black md:text-5xl">
          Hvad laver vi?
        </h1>

        <p className=" my-10 items-center justify-center gap-6 text-base md:flex md:text-lg">
          <div className="w-full">
            <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
              Projektstyring
            </h2>
            <div className="justify-flex flex min-w-full justify-center">
              <Image
                src={image3}
                alt="image3"
                quality={100}
                className="my-10 max-w-[350px] rounded-full sm:min-w-[300px]"
              />
            </div>
          </div>
          Levering af succesfulde projekter til tiden og inden for budgettet hos
          NAOMA.
          <br />
          <br />
          Vi forstår, at en succesfuld projektstyring er afgørende for at levere
          kvalitetsprojekter inden for transportsektoren til tiden og inden for
          budgettet. Vores projektstyringstjenester omfatter alt fra planlægning
          og tidsplanlægning til omkostningsstyring og risikovurdering.
          <br />
          <br />
          Vores erfarne projektledere arbejder tæt sammen med vores kunder for
          at sikre, at deres projekter bliver færdiggjort til tiden, inden for
          budgettet og til de højeste kvalitetsstandarder.
        </p>

        <div className="hidden sm:block ">
          <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
            Kørestrøm er en afgørende faktor inden for jernbanetransport, da den
            leverer strøm til togene og muliggør bevægelse af lokomotiver og
            vogne på sporene. Kørestrømssystemet består af en række teknologier
            og udstyr, der skal fungere sammen for at opretholde et stabilt og
            pålideligt strømforsyningssystem.
            <br />
            <br />
            Hos NAOMA er vi eksperter i kørestrømsteknik og kan levere
            skræddersyede løsninger til at imødekomme dine unikke behov. Vi kan
            designe systemer som tage højde for alle dele såsom strømledninger,
            skinner, kabler, transformerstationer og fordelingsanlæg, der sikrer
            en stabil og pålidelig strømforsyning til jernbanen.
            <br />
            <br />
            Vores team af specialister har ekspertise inden for kørestrømsdesign
            og kan hjælpe med at optimere strømforsyningssystemet og forbedre
            effektiviteten og pålideligheden i jernbanetransporten. Vi arbejder
            med den nyeste teknologi og udstyr for at sikre, at vores
            kørestrømsløsninger er fremtidssikrede og kan tilpasses fremtidige
            behov og krav.
            <div className="w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Kørestrøm
              </h2>
              <Image
                src={image4}
                alt="image4"
                quality={100}
                className="my-10 max-w-[350px] rounded-full  sm:min-w-[300px] "
              ></Image>
            </div>
          </p>
        </div>

        <div className="block sm:hidden ">
          <p className="my-10 items-center justify-center gap-6 text-base md:text-lg">
            <div className="w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Kørestrøm
              </h2>
              <div className="justify-flex flex w-full justify-center">
                <Image
                  src={image4}
                  alt="image4"
                  quality={100}
                  className="my-10 max-w-[350px] rounded-full"
                ></Image>
              </div>
            </div>
            Kørestrøm er en afgørende faktor inden for jernbanetransport, da den
            leverer strøm til togene og muliggør bevægelse af lokomotiver og
            vogne på sporene. Kørestrømssystemet består af en række teknologier
            og udstyr, der skal fungere sammen for at opretholde et stabilt og
            pålideligt strømforsyningssystem.
            <br />
            <br />
            Hos NAOMA er vi eksperter i kørestrømsteknik og kan levere
            skræddersyede løsninger til at imødekomme dine unikke behov. Vi kan
            designe systemer som tage højde for alle dele såsom strømledninger,
            skinner, kabler, transformerstationer og fordelingsanlæg, der sikrer
            en stabil og pålidelig strømforsyning til jernbanen.
            <br />
            <br />
            Vores team af specialister har ekspertise inden for kørestrømsdesign
            og kan hjælpe med at optimere strømforsyningssystemet og forbedre
            effektiviteten og pålideligheden i jernbanetransporten. Vi arbejder
            med den nyeste teknologi og udstyr for at sikre, at vores
            kørestrømsløsninger er fremtidssikrede og kan tilpasses fremtidige
            behov og krav.
          </p>
        </div>

        <p className="my-10 items-center justify-center gap-6 text-base sm:flex md:text-lg">
          <div className=" w-full">
            <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
              Stærkstrøm
            </h2>
            <div className="justify-flex flex w-full justify-center">
              <Image
                src={image5}
                alt="image5"
                quality={100}
                className="my-10  max-w-[350px] rounded-full sm:min-w-[300px] "
              />
            </div>
          </div>
          Stærkstrøm er en vigtig komponent i jernbanetransport, da det sikrer
          en stabil og pålidelig strømforsyning til jernbanesystemet. For at
          sikre en optimal strømforsyning er det afgørende at have de rette
          stærkstrømsløsninger på plads.
          <br />
          <br />
          Vi har ekspertise inden for design, installation og vedligeholdelse af
          stærkstrømsudstyr, såsom transformere, kabler og fordelingsanlæg, der
          sikrer en stabil og pålidelig strømforsyning til dit jernbanesystem.
          <br />
          <br />
          Vores erfarne team af specialister kan hjælpe med at optimere
          strømforsyningssystemet og forbedre effektiviteten og pålideligheden i
          din jernbanetransport.
        </p>

        <div className="hidden sm:block ">
          <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
            Jernbanesikkerhed er afgørende for en sikker og pålidelig drift af
            jernbanesystemet. Det omfatter beskyttelse og potentialeudligning
            (BPU), CE-certificering, risikovurdering og sikkerhedsledelse.
            <br />
            <br />
            BPU inkluderer installation af jordingsanlæg og lynafledere for at
            minimere risikoen for skader på udstyr og mennesker samt forhindre
            farlige situationer forårsaget af spændingsforskelle.
            <br />
            <br />
            CE-certificering garanterer, at jernbaneprodukter og -udstyr
            opfylder de nødvendige sikkerhedsstandarder i EU.
            <br />
            <br />
            Risikovurdering identificerer potentielle farer og risici i
            jernbanesystemet, og sikkerhedsledelse involverer udvikling af
            sikkerhedsplaner og -procedurer, træning af personale og overvågning
            af sikkerhedspræstationer.
            <br />
            <br />
            Vi har eksperter inden for BPU og CSM, og vi tilbyder professionel
            rådgivning og service i forbindelse med jernbanesikkerhed. Kontakt
            os for at høre mere om, hvordan vi kan hjælpe med at sikre en
            pålidelig og sikker drift af dit jernbanesystem.
            <div className=" w-2/5 md:w-3/4">
              <h2 className="text-left text-xl font-semibold text-black md:text-3xl">
                Jernbanesikkerhed
              </h2>
              <Image
                src={image6}
                alt="image6"
                quality={100}
                className="my-10 max-w-[350px] rounded-full  sm:min-w-[300px]"
              ></Image>
            </div>
          </p>
        </div>

        <div className="block sm:hidden ">
          <p className="my-10 items-center justify-center gap-6 text-base md:text-lg">
            <div className=" w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Jernbanesikkerhed
              </h2>
              <div className="justify-flex flex w-full justify-center">
                <Image
                  src={image6}
                  alt="image6"
                  quality={100}
                  className="my-10 max-w-[350px] rounded-full"
                />
              </div>
            </div>
            Jernbanesikkerhed er afgørende for en sikker og pålidelig drift af
            jernbanesystemet. Det omfatter beskyttelse og potentialeudligning
            (BPU), CE-certificering, risikovurdering og sikkerhedsledelse.
            <br />
            <br />
            BPU inkluderer installation af jordingsanlæg og lynafledere for at
            minimere risikoen for skader på udstyr og mennesker samt forhindre
            farlige situationer forårsaget af spændingsforskelle.
            <br />
            <br />
            CE-certificering garanterer, at jernbaneprodukter og -udstyr
            opfylder de nødvendige sikkerhedsstandarder i EU.
            <br />
            <br />
            Risikovurdering identificerer potentielle farer og risici i
            jernbanesystemet, og sikkerhedsledelse involverer udvikling af
            sikkerhedsplaner og -procedurer, træning af personale og overvågning
            af sikkerhedspræstationer.
            <br />
            <br />
            Vi har eksperter inden for BPU og CSM, og vi tilbyder professionel
            rådgivning og service i forbindelse med jernbanesikkerhed. Kontakt
            os for at høre mere om, hvordan vi kan hjælpe med at sikre en
            pålidelig og sikker drift af dit jernbanesystem.
          </p>
        </div>

        <hr className=" my-20" />

        <div>
          <h1 className="mb-10 text-center text-2xl font-semibold text-black md:text-4xl">
            Relevante projekter
          </h1>
        </div>
        <div className="grid-cols-4 gap-6 px-5 text-center md:grid md:px-0">
          {frontPageBlogs.map((blog, index) => (
            <div key={index} className="col-span-1">
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                alt={blog.alt}
                title={blog.title}
                href={blog.href}
              />
            </div>
          ))}
        </div>
        <h1 className="my-5 text-3xl font-semibold text-black md:text-5xl">
          Skab effektive og sikre jerbanesystemer
        </h1>
        <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
          Vi hos NAOMA er dedikerede til at hjælpe vores kunder med at skabe
          effektive, sikre og bæredygtige jernbanesystemer. Med vores ekspertise
          og erfaring er vi i stand til at levere kvalitetstjenester, der
          opfylder dine unikke behov inden for jernbanetransport. Kontakt os i
          dag for at lære mere om, hvordan vi kan hjælpe dig med at nå dine
          transportmål på skinner.
        </p>
      </div>
    </>
  );
}
