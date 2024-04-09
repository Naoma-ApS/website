import Image from "next/image";
import cover from "@assets/itsCover.jpeg";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Traffic System (ITS)",

  description:
    "Hos NAOMA specialiserer vi os i design, implementering og optimering af intelligente trafiksystemer (ITS). Vores team af erfarne ingeniører, transportplanlæggere og softwareudviklere benytter de nyeste teknologier til at forbedre effektiviteten, sikkerheden og bæredygtigheden i transportnetværkene for vores kunder i både den offentlige og private sektor.",
};

export default function ITS() {
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
            <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
              Intelligent Traffic System (ITS)
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-5 mt-10 text-3xl font-semibold text-black md:text-6xl">
          Revolutionerende trafikstyring
        </h1>

        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Datadrevne løsninger til sikrere, smartere og bæredygtig transport
        </h1>
        <p className="text-base md:text-lg">
          Hos NAOMA specialiserer vi os i design, implementering og optimering
          af intelligente trafiksystemer (ITS). Vores team af erfarne
          ingeniører, transportplanlæggere og softwareudviklere benytter de
          nyeste teknologier til at forbedre effektiviteten, sikkerheden og
          bæredygtigheden i transportnetværkene for vores kunder i både den
          offentlige og private sektor.
          <br />
          <br />
          Data, sensorer og computerteknologi er vejen frem, når den tætte
          trafik skal glide ubesværet, uden ulykker, uden unødvendigt store
          infrastrukturelle indgreb og med mindst mulig CO2-udledning.
          <br />
          <br />
          Brugen af ny teknologi som ITS minimerer rejsetid, øger trafikanternes
          mobilitet og udgør en innovativ løsning til tidens voksende trafikale
          udfordringer.
        </p>
        <hr className=" my-20" />
        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          ITS-løsninger til bæredygtig og effektiv transport
        </h1>
        <p className="text-base md:text-lg">
          Vi udvikler omfattende ITS-planer, der adresserer aktuelle og
          fremtidige transportudfordringer. Vores team designer og implementerer
          adaptive signalstyringssystemer og integrerer avancerede teknologier
          for at forbedre trafikstrøm, sikkerhed og kommunikation mellem
          vejbrugere og infrastruktur. Vi anvender også avancerede teknologier
          som computervision, videoanalyse og IoT-sensorer til at indsamle og
          analysere trafikdata for at identificere mønstre, tendenser og
          områder, der kan forbedres inden for vejdrift og multimodal transport.
        </p>
        <hr className=" my-20" />
        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Forbedring af vejbrugeroplevelse og sikkerhed
        </h1>
        <p className="text-base md:text-lg">
          Vi fokuserer på at forbedre vejbrugeroplevelsen ved at udvikle og
          implementere systemer til at indsamle, analysere og formidle realtids
          trafikinformation, hvilket muliggør bedre beslutningstagning og
          hændelsesrespons. Vores team designer og implementerer avancerede
          rejsende informationssystemer (ATIS) løsninger, der giver realtids,
          personaliserede rejseoplysninger til vejbrugere for informerede
          rutevalg, transportformer og rejsetider. Derudover designer og
          vurderer vi transportinfrastrukturen for at imødekomme integrationen
          af ​​tilsluttede og autonome køretøjer (CAVs), hvilket sikrer
          problemfri kommunikation mellem køretøjer og vejsideinfrastruktur for
          øget sikkerhed og effektivitet.
        </p>
        <hr className=" my-20" />
        <h1 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Kontinuerlig forbedring og præstationsovervågning
        </h1>
        <p className="text-base md:text-lg">
          Vores engagement i vej- og hændelsesstyring demonstreres gennem
          udvikling og implementering af avancerede sikkerhedssystemer. Disse
          systemer overvåger vejforhold, detekterer hændelser og iværksætter
          hurtige reaktionsforanstaltninger, hvilket reducerer risikoen for
          kollisioner og minimerer indvirkningen af hændelser på trafikstrømmen.
          Vi leverer også løbende præstationsovervågning og evaluering af
          ITS-implementeringer, hvilket sikrer optimal systemydelse og
          identificerer muligheder for systemforbedringer og opgraderinger,
          hvilket i sidste ende leverer skræddersyede ITS-løsninger, der
          adresserer specifikke transportudfordringer.
        </p>
      </div>
    </>
  );
}
