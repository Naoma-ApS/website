import Image from "next/image";
import cover from "@assets/BlogImages/Skyrmbillede_2023-10-20_112142-transformed-700x538.png";

export default function intern() {
  return (
    <>
      <div className="mx-auto max-w-7xl gap-12 px-5 py-16">
        <h1 className="mb-5 text-2xl font-semibold md:mb-10 md:text-5xl">
          <span className="text-black">
            Praktikophold med mulighed for afgangsprojekt
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

        <p className="py-5 text-base md:text-lg">
          <p className="font-semibold">
            Brænder du for tekniske udfordringer? Er du nysgerrig på at lære nyt
            og udvikle dig hver dag? Så start din karriere og få din første
            erhvervserfaring indenfor jernbanen hos NAOMA.
            <br />
            <br />
          </p>

          <p>
            Det er en oplagt mulighed for at kommer i praktikophold og skrive
            din opgave i samarbejde med os. Som en mindre virksomhed i vækst med
            fokus på jernbanemæssige opgaver er vi din ideelle partner. Hos
            NAOMA er du med til at løse spændende samfundsmæssige opgaver til
            gavn for alle borgere i Danmark.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Praktikophold:</p>
            Du få et spændende og fagligt udfordrende praktikophold i et
            dynamisk arbejdsmiljø. Vi arbejder i åbne lokaler med direkte adgang
            til ledere og kolleger, med henblik på bedre faglig sparring. Du får
            et praktikophold med stor indflydelse på egne arbejdsopgave.
            Arbejdsopgaverne er varierede, blandt andet omfattet af:
            <br />
            <br />
            <ul className="list-disc pl-8 text-xl">
              <li>Forundersøgelser</li>

              <li>Fagtekniske bidrag</li>
              <li>Bygherrerådgivning</li>
              <li>Tilsyn under udførelsen</li>
            </ul>
            <br />
          </p>

          <p>
            Projektarbejdet: Du kan være med til at formulere
            problemformuleringen i samarbejde med vores eksperter, som vil
            assistere og sparre med dig både under praktikopholdet og
            udarbejdelsen af afgangsprojekt. Du får mulighed for at gøre brug af
            vores data, erfaringer og andre relevante kilder til, at udarbejder
            et professionelt afgangsprojekt. Ved at samarbejde med NAOMA – får
            du en unik mulighed for at opbygge relationer og få nye kontakter i
            dit netværk til gavn for din fremtidig karriere.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">
              Dine Kvalifikationer:
              <br />
            </p>
            <ul className="list-disc pl-8 text-xl">
              <li>
                Kommende stærkstrømsingeniør under uddannelse med behov for
                praktikophold
              </li>
              <li>Erfaring med MatLab og PowerFactory - DIgSILENT</li>
              <li>Udadvendt med gode kommunikationsevner</li>

              <li>
                Er ikke bange for at tage ejerskab og ansvar for egne opgaver
              </li>
            </ul>
            <br />
          </p>

          <p>
            <p className="font-semibold">Hvad kan vi tilbyde dig?</p>
            Hos os har du mulighed for at følge udviklingen hos en mindre
            virksomhed. Du får erfaringer indenfor forskellige kompetencer med
            mange forskelligartede opgaver, fleksible arbejdstider særligt under
            eksamensperioder og et godt arbejdsmiljø.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Ansøgningsproces</p>
            Send venligst din ansøgning og CV til job@naoma.dk. Du opfordres til
            at søge hurtigst muligt, da vi behandler ansøgningerne løbende. Vi
            glæder os til at høre fra dig.
            <br />
            Ønsker du yderligere oplysninger, er du velkommen til at kontakte
            NAOMA på kontakt@naoma.dk eller (+45 31 62 76 61/ +45 41 77 36 41)
          </p>
        </p>
      </div>
    </>
  );
}
