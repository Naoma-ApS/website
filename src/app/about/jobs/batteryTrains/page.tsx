import Image from "next/image";
import cover from "@assets/BlogImages/mjba_siteinspection-1400x1076.jpeg";

export default function korestrom() {
  return (
    <>
      <div className="mx-auto max-w-7xl gap-12 px-5 py-16">
        <h1 className="mb-5 text-center text-2xl font-semibold md:mb-10 md:text-5xl">
          <span className="text-black">
            NAOMA hjælper med at byde velkommen til Danmarks første batteritog
          </span>
        </h1>

        <div className=" flex items-center justify-center">
          <Image
            src={cover}
            alt="Image"
            width={900}
            height={900}
            quality={100}
            className="rounded-lg"
          />
        </div>
        <p className="my-4 text-center">
          NAOMA på site inspection hos Midtjyske Jernbaner i Lemvig den 18.
          april 2023.
        </p>

        <p className="text-base md:text-lg">
          <p>
            Midtjyske Jernbaner, der i dag betjener togstrækningerne
            Holstebro-Skjern og Vemb-Lemvig-Thyborøn, har netop afsluttet sit
            EU-udbud om indkøb af syv batteritog. Batteritogene bliver de første
            af slagsen i Danmark og skal erstatte Midtjyske Jernbaners nuværende
            dieseltogsæt fra ultimo 2024. Indkøbet, der er forhåndsgodkendt af
            Region Midtjylland og den danske stat, skal danne grundlag for
            udrulningen af batteritogsdrift på andre regionale strækninger og er
            dermed et vigtigt skridt på vejen frem mod målet om CO2-neutral
            togtrafik i hele Danmark.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Samarbejde sikrer succes</p>
            NAOMA hjælper Midtjyske Jernbaner med at træffe informerede
            beslutninger og sikrer, at projektet når sine mål. Med vores
            specialiserede støtte klæder vi Midtjyske Jernbaner bedst muligt på,
            ti at være i stand til at udvælge den bedste entreprenør til at
            designe og bygge den nye lade-infrastruktur. Vores samarbejde er med
            til at sikre, at virksomhedens overgang til CO2-neutral togtrafik,
            bliver en succes.
            <br />
            <br />
            Dette projekt er et glimrende eksempel på, hvordan virksomheder kan
            samarbejde for at nå miljømål. Ved at udnytte NAOMAs ekspertise i
            udbudsprocessen tager Midtjyske Jernbaner et væsentligt skridt i
            retning mod at reducere CO2-udledningen i Danmarks transportsektor.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Sikring af standarder og -normer</p>
            Mens Midtjyske Jernbaner går videre med deres udbud for design og
            bygning af ny ladningsinfrastruktur til deres togflåde, spiller
            NAOMA en vigtig rolle i at sikre, at projektet lever op til de
            højeste standarder for sikkerhed og design.
            <br />
            <br />
            NAOMA udnytter sin ekspertise i design og bygning af elektrisk
            infrastruktur til at sikre, at opladningsinfrastrukturen kan
            imødekomme de specifikke behov for batteritogdrift og er i
            overensstemmelse med TSI-standarderne. NAOMA samarbejder tæt med
            Midtjyske Jernbaner og deres partnere for at sikre, at
            opladningsinfrastrukturen er designet til at imødekomme de
            specifikke behov for batteritogdrift.
            <br />
            <br />
            Tekniske specifikationer for interoperabilitet (TSI) er en række
            europæiske standarder, der definerer de tekniske og operationelle
            krav til interoperabiliteten i det europæiske jernbanesystem.
            Overholdelse af TSI-standarder er obligatorisk for alle nye tog, der
            opererer i Den Europæiske Union.
          </p>
        </p>
      </div>
    </>
  );
}
