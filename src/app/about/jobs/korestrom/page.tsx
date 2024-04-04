import Image from "next/image";
import cover from "@assets/BlogImages/1697022731568-1400x1076.jpg";

export default function intern() {
  return (
    <>
      <div className="mx-auto max-w-7xl gap-12 px-5 py-16">
        <h1 className="mb-5 text-center text-2xl font-semibold md:mb-10 md:text-5xl">
          <span className="text-black">Ingeniør til Kørestrøm</span>
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
            Er du NAOMA’s næste kørestrømsingeniør indenfor jernbanen?
            <br />
            <br />
          </p>

          <p>
            Vi er i rivende udvikling, og håber at du vil følge med på vores
            spændende rejse inden for jernbanen, hvorfor vi netop søger
            medarbejder med erfaring indenfor kørestrøm.
            <br />
            <br />
            Vi har kontor i indre København, hvor du kommer til at have din
            daglige gang. Da vi tror på at medarbejderen er vejen frem til en
            sund virksomhed, vil vi i samarbejde med dig sørge for, at opgaverne
            kommer til at passe netop dine kompetencer og dine fremtidige mål.
            <br />
            <br />
            Som rådgiver er NOAMA med til at præge markante jernbaneprojekter
            for at skabe effektiv, sammenhængende og bæredygtig mobilitet. Der
            arbejdes i øjeblikket med bygherrerådgivning og fagtilsyn hos
            forskellige bygherreorganisationer.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Om stillingen:</p>
            Teamet består af både unge og erfarne medarbejdere, der samarbejder
            på tværs af de forskellige projekter – på denne måde skaber vi den
            bedste løsning i forhold til vore kunders behov og ønsker.
            <br />
            <br />
            Hos NOAMA vil du få et spændende og fagligt udfordrende job i et
            dynamisk arbejdsmiljø. Vi arbejder i åbne lokaler med direkte adgang
            til ledere og kolleger, med henblik på bedre faglig sparring.
            <br />
            <br />
            Du får et job med ansvar og stor indflydelse på egne arbejdsopgave.
            Arbejdsopgaverne er varierede, blandt andet omfattet af:
            <ul className="text-md list-disc pl-8 md:text-xl">
              <li>Forundersøgelser</li>

              <li>Fagtekniske bidrag</li>
              <li>Bygherrerådgivning</li>
              <li>Tilsyn under udførelsen</li>
            </ul>
            <br />
          </p>

          <p className="font-semibold">Dine faglige kvalifikationer:</p>

          <p>
            <ul className="text-md list-disc pl-8 md:text-xl">
              <li>
                Du er uddannet ingeniør og har erfaring med kørestrømsanlæg &
                potentialudligning Du er bekendt med gældende standarder og
                normer inden for køreledningsanlæg.
              </li>
              <li>
                Du har erfaring med grænsefladehåndtering mellem kørestrøm og
                andre fagdiscipliner.
              </li>
              <li>
                Du er bekendt med anlægsaktiviteter knyttet til
                kørestrømsentrepriser.
              </li>

              <li>
                Du er bekendt med de forskellige køreledningsanlæg: 1,65 kV DC,
                25 kV AC og 2x25 kV AC.
              </li>
            </ul>
            <br />
          </p>

          <p>
            <p className="font-semibold">
              Dine personlige kvalifikationer:
              <br />
            </p>
            <ul className="text-md list-disc pl-8 md:text-xl">
              <li>
                Du er initiativrig og har lyst til at udvikle dig med øje for
                resultatet
              </li>
              <li>
                Er ikke bange for at tage ejerskab og ansvar for egne opgaver
              </li>
              <li>
                God personlig gennemslagskraft med evne i at bevare overblikket
              </li>

              <li>Du har fokus på kvalitetssikring og leverancer til tiden</li>
              <li>
                Du sætter pris på gensidig faglig sparring med dine kolleger
              </li>
            </ul>
            <br />
          </p>

          <p>
            <p className="font-semibold">Hvad kan NOAMA tilbyde dig?</p>
            Hos os har du mulighed for at følge den rivende udviklingen hos en
            næsten ny opstartet virksomhed. Du får erfaringer indenfor
            forskellige kompetencer med mange forskelligartede opgaver, vi
            tilbyder attraktive løn‐ og ansættelsesvilkår med fokus på en god
            balance mellem arbejde og fritid og et godt og sundt arbejdsmiljø.
            <br />
            <br />
          </p>

          <p>
            <p className="font-semibold">Ansøgningsproces</p>
            Vil du vide mere om jobbet, er du velkommen til at kontakte NAOMA,
            Amel Hadzisakovic på telefon: 31 62 76 61/ Nabil på telefon: 41 77
            36 41 eller kontakt@naoma.dk.
            <br />
            <br />
            Vi ser frem til at modtage din ansøgning og CV til job@naoma.dk. Du
            opfordres til at søge hurtigst muligt, da vi behandler ansøgningerne
            løbende. Vi glæder os til at høre fra dig.
          </p>
        </p>
      </div>
    </>
  );
}
