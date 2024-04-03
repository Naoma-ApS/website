import Image from "next/image";
import image from "@assets/Services.jpg";
import { MdTrain } from "react-icons/md";
import { FaRoad } from "react-icons/fa6";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import Link from "next/link";

export default function services() {
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
              Ydelser
            </h1>
            <hr />
            <div className="text-center text-lg text-white md:text-2xl">
              Ekspertiser og områder
            </div>
          </header>
        </div>
      </div>

      {/* // ekspertise section */}
      <div className="mx-auto max-w-7xl px-5">
        <div className="my-8 grid gap-12 md:grid-cols-3">
          {/* Column 1 */}
          <div className="col-span-1">
            <Link href="/services/Railway">
              <h2 className="flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <MdTrain className="text-xl md:text-4xl" /> Jernbane
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                <Link
                  href="/services/Railway/starkstrom"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Stærkstrøm</li>
                </Link>
                <Link
                  href="/services/Railway/sikkerhed"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Jernbanesikkerhed</li>
                </Link>
              </ul>
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <Link href="/services/TrafficSystem">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <FaRoad className="text-xl md:text-4xl" /> Vej system
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                <Link
                  href="/services/TrafficSystem/ITS"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">
                    Intelligent traffik System (ITS)
                  </li>
                </Link>
                <Link
                  href="/services/TrafficSystem/trafikAnalyse"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Trafik Analyse</li>
                </Link>
              </ul>
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <Link href="/services/Management">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <LiaSearchDollarSolid className="text-xl md:text-4xl" />
                Management
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                <Link
                  href="/services/Management/byggeledelse"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Byggeledelse</li>
                </Link>
                <Link
                  href="/services/Management/projektledelse"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Projektledelse</li>
                </Link>
                <Link
                  href="/services/Management/risikoledelse"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Risikoledelse</li>
                </Link>
                <Link
                  href="/services/Management/strategiudvikling"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Strategiudvikling</li>
                </Link>
                <Link
                  href="/services/Management/undervisning"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Undervisning</li>
                </Link>
              </ul>
            </p>
          </div>

          {/* // ekspertise section */}
          {/* Column 4 */}
          <div className="col-span-1">
            <Link href="/services/Energy">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <SlEnergy className="text-xl md:text-4xl" /> Energi
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                <Link
                  href="/services/Energy/solarPower"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Solernergi</li>
                </Link>
                <Link
                  href="/services/Energy/windPower"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Vindenergi</li>
                </Link>
                <Link href="/services/Energy/elnet" className="hover:underline">
                  <li className=" hover:scale-105">Elnet</li>
                </Link>
                <Link
                  href="/services/Energy/storage"
                  className="hover:underline"
                >
                  <li className=" hover:scale-105">Lagring & BMS</li>
                </Link>
              </ul>
            </p>
          </div>

          {/* Column 5 */}
          <div className="col-span-1 ">
            <Link href="/services/ClientConsultancy">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <BsBuildings className="text-xl md:text-4xl" />
                Bygherrerådgivning
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                {/* <Link
                  href="/services/ClientConsultancy"
                  className="hover:underline"
                > */}
                <li>Opdateres...</li>
                {/* </Link> */}
              </ul>
            </p>
          </div>

          {/* Column 6 */}
          <div className="col-span-1">
            <Link href="/services/Automation">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-normal hover:scale-105 hover:underline md:text-2xl">
                <LuCode2 className="text-xl md:text-4xl" /> Automation
              </h2>
            </Link>
            <p className="text-md text-left ">
              <ul className="list-disc pl-8 text-base md:text-lg">
                {/* <Link href="/services/Automation" className="hover:underline"> */}
                <li>Opdateres...</li>
                {/* </Link> */}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
