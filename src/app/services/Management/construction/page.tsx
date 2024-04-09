import Image from "next/image";
import cover from "@assets/coverBygge.jpeg";
import Image1 from "@assets/byggeledelse.jpeg";
import logo from "@assets/logoNaoma.svg";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Byggeledelse",

  description:
    "Professionel og effektiv byggeledelse er ikke bare essentielt for at realisere kundens vision, men altafgørende for tidsstyring, økonomi og kvalitet.",
};

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
              Byggeledelse
            </h1>
            <hr />
          </header>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5">
        <h1 className="mb-10 text-2xl font-extrabold md:text-5xl ">
          <span className="text-left text-black">
            Effektiv Byggeledelse: Fra Vision til Virkelighed
          </span>
        </h1>
        <Image
          src={Image1}
          alt="Image1"
          quality={100}
          className="my-10 rounded-lg"
        />
        <p className="text-base md:text-lg">
          Professionel og effektiv byggeledelse er ikke bare essentielt for at
          realisere kundens vision, men altafgørende for tidsstyring, økonomi og
          kvalitet.
          <br />
          <br />
          Hos NAOMA møder du kvalificerede byggeledere, der tager styring for
          projektet og håndterer pludselige udfordringer fra de mange
          faggrupper. Både til nyanlæg, modernisering og renoveringsprojekter
          tilbyder vi kyndigt tilsyn på alt fra mindre opgaver til komplicerede
          tværfaglige projekter.
          <br />
          <br />
          Som din repræsentant varetager vi dine interesser og sørger for
          kontrakter, tidsrammer, budgetter og kvalitet af byggeriet går op i en
          højere enhed.
        </p>
        <div className="hidden md:block">
          <p className="justify-flex my-8 flex items-center justify-center gap-5">
            <h1 className="text-xl font-semibold text-black md:text-3xl">
              Arbjedsprocesser
            </h1>
            <div className="text-2xl md:text-5xl">
              <FaArrowRightArrowLeft />
            </div>
            <div className="w-1/4">
              <Image
                src={logo as StaticImport}
                alt="logo"
                quality={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-2xl md:text-5xl">
              <FaArrowRightArrowLeft />
            </div>
            <h1 className="text-xl font-semibold text-black md:text-3xl">
              Entreprenører
            </h1>
          </p>
        </div>
        <hr className=" my-20" />

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Tidlig involvering skaber gode processer
        </h1>
        <p className="text-base md:text-lg">
          Hos NAOMA bidrager vi til både enkeltstående opgaver og store
          tværfaglige projekter. Ønsker I særligt god forståelse mellem
          entreprenører og det projekterede materiale - samt effektive
          arbejdsprocesser - kan I med fordel involvere os tidligt i projektet.
          <br />
          <br />
          Vores projekt- og byggeledere har stor erfaring i at anvende en
          pragmatisk tilgang, der skaber resultater og sikrer et godt
          tværfagligt samarbejde. Naturligvis i henhold til kvalitets-, miljø-
          og arbejdsmiljøledelsessystemer.
          <br />
          <br />
          Vi hjælper blandt andet med: <br />
          <br />
          <ul className="list-disc pl-8  text-base md:text-lg">
            <li>
              Styring af entreprenør (fra opstart til afslutning og aflevering)
            </li>
            <li>
              Løbene opfølgning af tilsynsnotater, som udarbejdes af
              tilsynsansvarlig
            </li>
            <li>
              Udarbejdelse af afleveringsprotokol fra projektet til
              idriftsættelse
            </li>
            <li>Opfølgning af diverse mangler</li>
            <li>Opfølgning at tidsplan og økonomi</li>
            <li>Styring af bygherreleverancer</li>
          </ul>
        </p>
      </div>
    </>
  );
}
