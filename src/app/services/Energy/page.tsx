import Image from "next/image";
import cover from "@assets/Energy.jpg";
import El from "@assets/elnet.jpg";
import vind from "@assets/Wind_power.jpg";
import sol from "@assets/solar-panel.jpg";
import battery from "@assets/battery.jpg";
import Link from "next/link";

export default function Energy() {
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
            <h2 className="text-4xl font-bold text-white md:text-7xl">
              Energi
            </h2>
            <hr />
          </header>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5">
        <h2 className="mb-5 text-3xl font-semibold text-black md:text-6xl">
          NAOMA: Pionerer inden for Grøn Energi med Bæredygtige Løsninger for
          Fremtiden
        </h2>
        <p className="text-base md:text-lg">
          Nye energikoncepter og grøn omstilling står højt på den danske såvel
          som internationale politiske dagsorden. Hos NAOMA er vi specialister i
          effektive og bæredygtige løsninger inden for både vindenergi,
          solenergi, elnettet samt lagring og BMS.
          <br />
          <br />
          Vi bruger energien på en grønnere fremtid.
          <br />
          <br />
        </p>
        <hr className=" my-20" />

        <h2 className="my-5 text-xl font-semibold text-black md:text-3xl">
          Træf beslutninger på et kvalificeret grundlag
        </h2>
        <p className="text-base md:text-lg">
          Energiprojekter er ikke uden faldgruber. Risikoen er, at forkerte
          beslutninger giver færre besparelser eller gør projektet dyrere end
          budgetteret.
          <br />
          <br />
          Hos NAOMA tilbyder vi ekspertrådgivning baseret på erfaring med både
          private og offentlige kunder. Målet er ikke blot at tilføre værdi til
          vores kunder, men at bruge vores knowhow til at skabe fremtidssikrede
          løsninger til glæde for nutidens samfund.
          <br />
          <br />
          Kontakt NOAMA, hvis I ønsker sparring med et kompetent energiteam, der
          tilbyder planlægning, projektering og implementering af moderne
          energiløsninger.
          <br />
          <br />
          Vi samler de eksperter, der bedst løser jeres opgave, hvad end den er
          relateret til sol, vind eller el. Energiløsningen afleveres
          naturligvis rettidigt og med en faglig dybde, som gør det muligt at
          træffe de bedste beslutninger på et kvalificeret grundlag.
          <br />
          <br />
          <h3 className="text-xl font-semibold text-black md:text-3xl">
            Læs mere om:
          </h3>
          <br />
          <br />
        </p>
        <div className="mb-16 flex items-center text-center">
          <div className="w-full rounded-full px-5 py-5 duration-300 hover:-translate-y-5 hover:scale-105 ">
            <Link href={"Energy/solarPower"} className="text-3xl ">
              <h2 className="mb-5 text-xl font-semibold hover:underline md:text-3xl ">
                Solenergi
              </h2>
              <div className="flex w-full justify-center">
                <Image
                  src={vind}
                  alt="vind"
                  quality={100}
                  className="sm:w-1/2 rounded-full "
                />
              </div>
            </Link>
          </div>
          <div className="w-full gap-8 rounded-full px-5 py-5 text-center duration-300 hover:-translate-y-5 hover:scale-105 ">
            <Link href={"Energy/windPower"} className="text-3xl ">
              <h2 className="mb-5 items-center text-center text-xl font-semibold hover:underline md:text-3xl">
                Vindenergi
              </h2>
              <div className="flex w-full justify-center">
                <Image
                  src={sol}
                  alt="sol"
                  quality={100}
                  className="sm:w-1/2 rounded-full"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center text-center">
          <div className="w-full rounded-full px-5 py-5 duration-300 hover:-translate-y-5 hover:scale-105 ">
            <Link href={"Energy/elnet"} className="text-3xl">
              <h2 className="mb-5 text-xl font-semibold hover:underline md:text-3xl">
                Elnet
              </h2>
              <div className="flex w-full justify-center">
                <Image
                  src={El}
                  alt="El"
                  quality={100}
                  className="sm:w-1/2 rounded-full"
                />
              </div>
            </Link>
          </div>

          <div className="w-full gap-8 rounded-full px-5 py-5 text-center duration-300 hover:-translate-y-5 hover:scale-105 ">
            <Link href={"Energy/storage"} className="text-3xl">
              <h2 className="mb-5 items-center text-center text-xl font-semibold hover:underline md:text-3xl">
                Lagring & BMS
              </h2>
              <div className="flex w-full justify-center">
                <Image
                  src={battery}
                  alt="battery"
                  quality={100}
                  className="sm:w-1/2 rounded-full grayscale"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
