import Image from "next/image";
import cover from "@assets/automation.jpg";
import image3 from "@assets/komplet.jpg";
import image4 from "@assets/automation2.jpg";
import { type Metadata } from "next";
import { AutomationAccordion } from "@components/automationAccordion";

export const metadata: Metadata = {
  title: "Automation",

  description:
    "Vi er stolte af at kunne præsentere vores Automatiseringsdivision, der tilbyder state-of-the-art-løsninger til industriautomation.",
};

export default function automation() {
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
              Automation
            </h1>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 ">
        <h1 className="mb-5 mt-10 text-3xl font-semibold  md:text-6xl">
          Innovative Automationsløsninger
        </h1>
        <p className="text-base md:text-lg">
          Vi er stolte af at kunne præsentere vores automatiseringsdivision, der
          tilbyder state-of-the-art løsninger til industriautomation. Vores team
          af eksperter har omfattende erfaring inden for projektledelse og
          -design og arbejder med en bred vifte af brancher, herunder jernbaner,
          privat transport, fremstilling, energi og mange andre, for at levere
          tilpassede løsninger, der opfylder hver kundes behov.
          <br />
          <br />
        </p>
        <p className="my-10 justify-center gap-6 text-base md:flex md:text-lg">
          <div className="w-full">
            <Image
              src={image3}
              alt="image3"
              quality={100}
              className=" rounded-lg  sm:min-w-[300px] sm:max-w-[350px]"
            />
          </div>
          <div className="my-5 md:my-0">
            <h2 className=" text-xl font-semibold  md:text-3xl">
              Komplette løsninger til dine automatiseringsbehov
            </h2>
            Vores team er udstyret med de færdigheder og den viden, der er
            nødvendig for at designe og håndtere automatiseringsprojekter i
            enhver størrelse og kompleksitet, fra koncept til levering. Uanset
            om du har brug for en komplet løsning eller en tilpasset løsning til
            dine specifikke krav, kan vi levere.
            <br />
            <br />
          </div>
        </p>
        <hr className="my-20" />
        <h2 className=" text-xl font-semibold  md:text-3xl">
          Erfaring inden for flere industrier
        </h2>
        <p className="text-base md:text-lg">
          Vi har arbejdet med en række forskellige brancher, herunder jernbaner,
          privat transport, fremstilling, energi og mange andre. Vi har den
          erfaring og ekspertise, der er nødvendig for at imødekomme de unikke
          behov i hver enkelt branche og leverer tilpassede løsninger, der
          optimerer din drift.
          <br />
          <br />
        </p>
        <div className="justify-center gap-5 bg-[#f5f9fd] px-5 py-5 md:flex md:flex-wrap">
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">Produktion:</h2>
            <p className="text-base md:text-lg">
              Projekter for produktionsvirksomheder, der hjælper dem med at
              optimere produktionsprocesser og sikre det højeste niveau af
              produktkvalitet.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">Energi:</h2>
            <p className="text-base md:text-lg">
              Automatiserede systemer til kraftværker, der sikrer pålidelig og
              effektiv drift samtidig med, at nedetiden minimeres og
              vedligeholdelsesomkostningerne reduceres.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">
              Transportation:
            </h2>
            <p className="text-base md:text-lg">
              Løsninger til trafikstyringssystemer og jernbanetransport, der er
              med til at sikre sikker og effektiv drift.
            </p>
          </div>
        </div>
        <div className="my-5 justify-center gap-5 bg-[#f5f9fd] px-5 py-5 md:flex md:flex-wrap">
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">
              Affald & Vand:
            </h2>
            <p className="text-base md:text-lg">
              Design og implementering af automatiserede kontrolsystemer, der er
              med til at sikre vandforsyningens sikkerhed og beskytte miljøet.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">Bygning:</h2>
            <p className="text-base md:text-lg">
              System design for styring af varme-, ventilations- og klimaanlæg
              (HVAC), belysning og sikkerhed.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="my-5  text-xl md:mb-0 md:text-3xl">Pharmaci:</h2>
            <p className="text-base md:text-lg">
              Udnytter teknologi til automatisering af produktions- og
              testlinjer med håndtering og distribution af medicin.
            </p>
          </div>
        </div>

        <hr className=" my-20" />
        <div className="my-10 justify-center gap-6 text-base md:flex md:text-lg">
          <div>
            <h2 className=" text-xl font-semibold  md:text-3xl">
              Komplette løsninger til dine automatiseringsbehov
            </h2>
            Vores team er udstyret med de færdigheder og den viden, der er
            nødvendig for at designe og håndtere automatiseringsprojekter i
            enhver størrelse og kompleksitet, fra koncept til levering. Uanset
            om du har brug for en komplet løsning eller en tilpasset løsning til
            dine specifikke krav, kan vi levere.
            <br />
            <br />
          </div>
          <div className="w-full">
            <Image
              src={image4}
              alt="image4"
              quality={100}
              className=" rounded-lg sm:min-w-[300px] sm:max-w-[350px]"
            ></Image>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-semibold  md:text-3xl">
            Trin til en Turnkey-løsning
          </h2>
          <AutomationAccordion />
        </div>
      </div>
    </>
  );
}
