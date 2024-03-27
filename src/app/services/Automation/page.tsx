"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import cover from "@assets/automation.jpg";
import image3 from "@assets/komplet.jpg";
import image4 from "@assets/automation2.jpg";

export default function railway() {
  const testningOgidriftsættelse = "";
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
          Innovative Automation Løsninger
        </h1>
        <p className="text-base md:text-lg">
          Vi er stolte af at kunne præsentere vores Automatiseringsdivision, der
          tilbyder state-of-the-art-løsninger til industriautomation. Vores team
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
              className=" rounded-lg"
            />
          </div>
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
        </p>
        <hr className="my-20" />
        <h2 className=" text-xl font-semibold  md:text-3xl">
          Erfaring inden for flere industrier
        </h2>
        <p className="text-base md:text-lg">
          Vi har arbejdet med en række forskellige brancher, herunder jernbaner,
          privat transport, fremstilling, energi og mange andre. Vi har den
          erfaring og ekspertise, der er nødvendig for at imødekomme de unikke
          behov i hver enkelt branche og levere tilpassede løsninger, der
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
              className=" rounded-lg"
            ></Image>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-semibold  md:text-3xl">
            Trin til en Turnkey-løsning
          </h2>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Kravindsamling og analyse"
              title="Kravindsamling og analyse"
            >
              <p>
                Det første trin i vores proces er kravindsamling og analyse.
                Vores team af automatiseringseksperter arbejder tæt sammen med
                vores kunder for at forstå deres behov og krav til projektet. Vi
                udfører en grundig analyse af det eksisterende system eller
                processer for at identificere områder, der kan forbedres, og
                muligheder for automatisering. <br />
                <br /> Baseret på vores analyse udarbejder vi en detaljeret
                projektplan, der beskriver omfanget af arbejdet, tidsplanen og
                budgettet for automatiseringsprojektet. Vi samarbejder med vores
                kunder for at sikre, at projektplanen opfylder deres
                forventninger og giver en klar forståelse af
                automatiseringsmålene og leverancerne.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Design og implementering"
              title="Design og implementering"
            >
              <p>
                Når projektplanen er godkendt, går vi videre til design- og
                implementeringsfasen. Vores team af automatiseringsingeniører
                bruger deres erfaring og ekspertise til at designe en tilpasset
                automatiseringsløsning, der opfylder vores kunders unikke behov.
                <br />
                <br /> Vi bruger alle de nødvendige og tilpassense teknologier
                og værktøjer, såsom low level coding, script programmering til
                Programmerbare Logik Controllere (PLC'er), Human-Machine
                Interfaces (HMI'er) og Supervisory Control and Data Acquisition
                (SCADA) systemer, for at sikre, at vores design er effektive,
                effektive og pålidelige. Vi arbejder tæt sammen med vores kunder
                for at sikre, at designet opfylder deres behov og overstiger
                deres forventninger. <br />
                <br /> Under implementeringsfasen arbejder vores team af
                automatiseringsingeniører hårdt på at installere og konfigurere
                automatiseringssystemet. Vi følger bedste praksis og
                branchestandarder for at sikre, at systemet er installeret
                korrekt og fungerer som til hensigt.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Testning og idriftsættelse"
              title="Testning og idriftsættelse"
            >
              <p>
                Det sidste trin i vores proces er testning og idriftsættelse. Vi
                udfører en række strenge tests for at sikre, at
                automatiseringssystemet fungerer som til hensigt og opfylder
                vores kunders behov. Vi samarbejder med vores kunder for at
                identificere eventuelle problemer, der opstår under testningen,
                og tager øjeblikkeligt handling for at løse dem. <br />
                <br /> Når testfasen er afsluttet, går vi videre til
                idriftsættelse. Vores team af automatiseringsingeniører arbejder
                tæt sammen med vores kunder for at sikre, at systemet er fuldt
                funktionsdygtigt, og at alle interessenter er trænet i at bruge
                det effektivt. Vi yder løbende support og vedligeholdelse for at
                sikre, at automatiseringssystemet fortsat opfylder vores kunders
                behov.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
