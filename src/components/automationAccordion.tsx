"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
export function AutomationAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Kravindsamling og analyse</AccordionTrigger>
        <AccordionContent>
          <p>
            Når projektplanen er godkendt, går vi videre til design- og
            implementeringsfasen. Vores team af automatiseringsingeniører bruger
            deres erfaring og ekspertise til at designe en tilpasset
            automatiseringsløsning, der opfylder vores kunders unikke behov.
            <br /> <br />
            Vi bruger alle de nødvendige og tilpassende teknologier og
            værktøjer, såsom low level coding, script programmering til
            Programmerbare Logik Controllere PLC&apos;er, Human-Machine
            Interfaces (HMI&apos;er) og Supervisory Control and Data Acquisition
            (SCADA) systemer, for at sikre, at vores design er effektive,
            effektive og pålidelige. Vi arbejder tæt sammen med vores kunder for
            at sikre, at designet opfylder deres behov og overstiger deres
            forventninger.
            <br /> <br />
            Under implementeringsfasen arbejder vores team af
            automatiseringsingeniører hårdt på at installere og konfigurere
            automatiseringssystemet. Vi følger bedste praksis og
            branchestandarder for at sikre, at systemet er installeret korrekt
            og fungerer som til hensigt.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Design og implementering</AccordionTrigger>
        <AccordionContent>
          <p>
            Når projektplanen er godkendt, går vi videre til design- og
            implementeringsfasen. Vores team af automatiseringsingeniører bruger
            deres erfaring og ekspertise til at designe en tilpasset
            automatiseringsløsning, der opfylder vores kunders unikke behov.{" "}
            <br />
            <br /> Vi bruger alle de nødvendige og tilpassense teknologier og
            værktøjer, såsom low level coding, script programmering til
            Programmerbare Logik Controllere (PLC&apos;er), Human-Machine
            Interfaces (HMI&apos;er) og Supervisory Control and Data Acquisition
            (SCADA) systemer, for at sikre, at vores design er effektive,
            effektive og pålidelige. Vi arbejder tæt sammen med vores kunder for
            at sikre, at designet opfylder deres behov og overstiger deres
            forventninger. <br />
            <br /> Under implementeringsfasen arbejder vores team af
            automatiseringsingeniører hårdt på at installere og konfigurere
            automatiseringssystemet. Vi følger bedste praksis og
            branchestandarder for at sikre, at systemet er installeret korrekt
            og fungerer som til hensigt.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Testning og idriftsættelse</AccordionTrigger>
        <AccordionContent>
          <p>
            Det sidste trin i vores proces er testning og idriftsættelse. Vi
            udfører en række strenge tests for at sikre, at
            automatiseringssystemet fungerer som til hensigt og opfylder vores
            kunders behov. Vi samarbejder med vores kunder for at identificere
            eventuelle problemer, der opstår under testningen, og tager
            øjeblikkeligt handling for at løse dem. <br />
            <br /> Når testfasen er afsluttet, går vi videre til idriftsættelse.
            Vores team af automatiseringsingeniører arbejder tæt sammen med
            vores kunder for at sikre, at systemet er fuldt funktionsdygtigt, og
            at alle interessenter er trænet i at bruge det effektivt. Vi yder
            løbende support og vedligeholdelse for at sikre, at
            automatiseringssystemet fortsat opfylder vores kunders behov.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
