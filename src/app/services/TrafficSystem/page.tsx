import Image from "next/image";
import cover from "@assets/vejsikkerhed.jpeg";
import image2 from "@assets/vejebelysning.jpeg";
import image3 from "@assets/projektstyring.jpg";
import image4 from "@assets/ITS.png";
import image5 from "@assets/trafik.jpeg";
import { frontPageBlogs } from "@components/Blog/blogs/frontpage";
import { BlogCard } from "@components/Blog/BlogCard";

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
            <h1 className="text-center text-7xl font-bold text-white">Veje</h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Vi designer fremtidens transport - én vej ad gangen
        </h1>
        <p className="text-base md:text-lg">
          Et moderne vejdesign er et komplekst fagområde, hvor trafikale behov,
          fremkommelighed, sikkerhed og tilpasning til omgivelserne alt sammen
          bør være en del af helhedstænkningen.
          <br />
          <br />
          Hos NAOMA forener vi trafikal, miljømæssig og socioøkonomisk indsigt
          med professionel projektering og styring, når der skal anlægges nye
          veje, motorveje, stisystemer etc.
          <br />
          <br />
          Vi hjælper med både nyanlæg, udvidelse af vejnettet samt
          vedligeholdelsesopgaver, og vi yder rådgivning til alt fra
          komplicerede anlæg af kryds, rundkørsel og motorveje til avanceret
          trafik analyse.
          <br />
          <br />
          Under hele forløbet lægger vi vægt på kvalitet og tæt dialog med vores
          samarbejdspartnere.
        </p>

        <Image
          src={image2}
          alt="image2"
          quality={100}
          className="my-10 rounded-lg"
        />
        <hr className=" my-20" />

        <h1 className=" mb-5 text-center text-3xl font-semibold text-black md:text-5xl">
          Hvad laver vi?
        </h1>

        <p className="my-10 items-center justify-center gap-6 text-base sm:flex md:text-lg">
          <div className="w-full">
            <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
              Projektstyring
            </h2>
            <div className="justify-flex flex w-full justify-center">
              <Image
                src={image3}
                alt="image3"
                quality={100}
                className="my-10 rounded-full"
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
          og tidsplanlægning til omkostningsstyring og risikovurdering. Vores
          erfarne projektledere arbejder tæt sammen med vores kunder for at
          sikre, at deres projekter bliver færdiggjort til tiden, inden for
          budgettet og til de højeste kvalitetsstandarder.
        </p>

        <div className="hidden sm:block ">
          <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
            ITS bliver stadig vigtigere for at skabe effektive og sikre
            transportsystemer. Hos NAOMA er vi specialiserede i at designe og
            implementere ITS-løsninger, der anvender de nyeste teknologier til
            at optimere trafikflowet, mindske trafikpropper og forbedre
            sikkerheden. Vores ITS-løsninger er skræddersyede til at opfylde
            vores kunders og deres samfunds unikke behov og er designet til at
            være skalerbare og fremtidssikrede.
            <div className="w-full">
              <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
                Intelligent Traffic System (ITS)
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
                Intelligent Traffic System (ITS)
              </h2>
              <div className="justify-flex flex w-full justify-center">
                <Image
                  src={image4}
                  alt="image4"
                  quality={100}
                  className="my-10 w-3/4 rounded-full "
                />
              </div>
            </div>
            ITS bliver stadig vigtigere for at skabe effektive og sikre
            transportsystemer. Hos NAOMA er vi specialiserede i at designe og
            implementere ITS-løsninger, der anvender de nyeste teknologier til
            at optimere trafikflowet, mindske trafikpropper og forbedre
            sikkerheden. Vores ITS-løsninger er skræddersyede til at opfylde
            vores kunders og deres samfunds unikke behov og er designet til at
            være skalerbare og fremtidssikrede.
          </p>
        </div>

        <p className="my-10 items-center justify-center gap-6 text-base sm:flex md:text-lg">
          <div className=" w-full">
            <h2 className="text-center text-xl font-semibold text-black md:text-3xl">
              Trafik Analyse
            </h2>
            <div className="justify-flex flex w-full justify-center">
              <Image
                src={image5}
                alt="image5"
                quality={100}
                className="my-10 w-3/4 rounded-full"
              />
            </div>
          </div>
          Vi forstår, at effektive transportsystemer starter med en grundig
          forståelse af trafikmønstre og -flow. Derfor tilbyder vi ekspertise
          inden for trafikanalyse, hvor vi anvender de nyeste teknologier,
          herunder AI og ML, til at indsamle, analysere og tolke trafikdata.
          Vores team af erfarne fagfolk anvender en række statistiske og
          matematiske modeller, såsom regression analysis og time series
          analysis, til at udtrække værdifulde indsigter fra trafikdataene. Med
          disse indsigter kan vi hjælpe vores kunder med at optimere deres
          transportsystemer, mindske trafikpropper og forbedre sikkerheden.
        </p>

        <hr className=" my-20" />

        <div>
          <h1 className="mb-10 text-center text-2xl font-semibold text-black md:text-4xl">
            Seneste nyheder fra NAOMA
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
          Skab effektive og sikre transportsystemer sammen med NAOMA
        </h1>
        <p className="my-10 flex items-center justify-center gap-6 text-base md:text-lg">
          Hos NAOMA er vi dedikerede til at hjælpe vores kunder med at skabe
          effektive, sikre og bæredygtige transportsystemer. Alt, der har med
          veje og trafiksystemer at gøre, har vi ekspertise og erfaring til at
          levere kvalitetstjenester, der opfylder dine unikke behov. Kontakt os
          i dag for at lære mere om, hvordan vi kan hjælpe dig med at nå dine
          transportmål.
        </p>
      </div>
    </>
  );
}
