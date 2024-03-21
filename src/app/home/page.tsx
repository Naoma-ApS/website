import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

import Aarsleff from "@assets/LOGOer/Aarsleff_Rail_Primaer_tofarver-removebg-preview-300x300.png";
import midtjyske from "@assets/LOGOer/Logo_midtjyske_jernbaner-removebg-preview-300x168.png";
import bdk from "@assets/LOGOer/Logo-CMYK-2-dark-300x161.png";
import bhf from "@assets/LOGOer/logo-removebg-preview.png";
import Rina from "@assets/LOGOer/RINA_rgb_nopayoff-removebg-preview-300x231.png";
import wsp from "@assets/LOGOer/wsp_RGB-300x143.png";
import image7 from "@assets/HomePage/IMG_2145-circle.jpg";
import image8 from "@assets/link read more/1697022731568-1400x1076.jpg";
import image9 from "@assets/link read more/mjba_siteinspection-1400x1076.jpeg";
import image10 from "@assets/link read more/Skyrmbillede_2023-10-20_112142-transformed-700x538.png";
import image11 from "@assets/link read more/stroem-1400x1076.jpg";

import { MdOutlineHandshake, MdPeopleAlt, MdTrain } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export default function HomePage() {
  return (
    <>
      <iframe
        className="relative top-0 z-0 -mt-32 min-h-full w-auto min-w-full max-w-none grayscale"
        src="https://player.vimeo.com/video/819043327?autoplay=1&loop=1&background=1"
        width="100%"
        height="1090"
      />
      <div className="absolute bottom-0 left-0 mx-24 mb-10 ">
        <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
          Innovative løsninger <br /> til en skiftende verden
        </h1>
      </div>

      <div className="mx-52">
        <div className="mt-8 flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold text-black">
            Udvalgte kunder, samarbejdspartnere <br /> og leverandører hos NAOMA
          </h1>
        </div>

        {/* Logo grid */}
        <div className="mx-32 my-5 grid grid-cols-6 items-center justify-center grayscale-[50%]">
          {/* Column 1 */}
          <div className="col-span-1">
            <Image src={Aarsleff} alt="Image 1" width={100} height={200} />
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <Image src={midtjyske} alt="Image 2" width={120} height={200} />
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <Image src={bdk} alt="Image 3" width={180} height={200} />
          </div>

          {/* Column 4 */}
          <div className="col-span-1">
            <Image src={bhf} alt="Image 4" width={150} height={200} />
          </div>

          {/* Column 5 */}
          <div className="col-span-1">
            <Image src={Rina} alt="Image 5" width={100} height={200} />
          </div>

          {/* Column 6 */}
          <div className="col-span-1">
            <Image src={wsp} alt="Image 6" width={120} height={200} />
          </div>
        </div>
        <hr className=" my-20" />

        <div className="flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold text-black">
            Løsninger til en verden i forandring
          </h1>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center md:flex-row">
          <div className="md:w-5/5 w-full ">
            <p className="py-5 text-2xl">
              NAOMA er drevet af et team af erfarne og dygtige talenter, der
              leverer innovative løsninger til vores kunder. Kvalitet,
              samarbejde og løbende udvikling gennem dialog med kunder og
              leverandører, er vores primære fokus i et hvert projekt. NAOMA har
              en bred portefølje af ydelser, der omfatter jernbane, el,
              bygherrerådgivning, ledelse, automatisering, undervisning og
              energi.
            </p>
            <p className="text-2xl"></p>
          </div>
          <div className="w-full items-center md:w-2/5">
            <Image
              src={image7}
              alt="Image"
              width={400}
              height={300}
              quality={100}
              className="rounded-full"
            />
          </div>
        </div>
        <hr className=" my-20" />

        {/* // news */}
        <div className=" grid grid-cols-4 gap-6 text-center">
          {/* Column 1 */}
          <div className="col-span-1 transform rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl ">
            <Link href="/about">
              <Image
                src={image8}
                alt="Image 1"
                width={300}
                height={200}
                className="w-full rounded-lg "
              />
              <p className="mx-4 my-4 text-left hover:underline">
                Praktikophold med mulighed <br /> for afgangsprojekt
              </p>
              <p className="mx-4 mb-4 text-left text-gray-400">26. maj 2023</p>
              <p className="mx-4 mb-4 text-left underline">Læs mere</p>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 transform rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl ">
            <Link href="/your-url-for-image-2">
              <Image
                src={image9}
                alt="Image 2"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="mx-4 my-4 text-left hover:underline ">
                Stærkstrømsingeniør til <br /> Jernbanen
              </p>
              <p className="mx-4 mb-4 text-left text-gray-400">
                20. april 2023
              </p>

              <p className="mx-4 mb-4 text-left underline">Læs mere</p>
            </Link>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 transform rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl ">
            <Link href="/your-url-for-image-3">
              <Image
                src={image10}
                alt="Image 3"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="mx-4 my-4 text-left hover:underline">
                Ingeniør til Kørestrøm
              </p>
              <p className="mx-4 mb-4 text-left text-gray-400">26. maj 2023</p>

              <p className="mx-4 mb-4 text-left underline">Læs mere</p>
            </Link>
          </div>

          {/* Column 4 */}
          <div className="col-span-1 transform rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl ">
            <Link href="/your-url-for-image-4">
              <Image
                src={image11}
                alt="Image 4"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="mx-4 my-4 text-left hover:underline">
                NAOMA hjælper med at byde <br /> velkommen til <br /> Danmarks
                første batteritog
              </p>
              <p className="mx-4 mb-4 text-left text-gray-400">26. maj 2023</p>
              <p className="mx-4 mb-4 text-left underline">Læs mere</p>
            </Link>
          </div>
        </div>

        <hr className=" my-20" />

        {/* // ekspertise section */}
        <div className=" my-8 grid grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="col-span-1">
            <Link href="/railway">
              <h1 className="flex items-center gap-2 text-2xl font-semibold hover:underline">
                <MdTrain className="text-4xl" /> Jernbane
              </h1>
            </Link>
            <p>
              Løsninger til at klare de stigende offentlige togrejser for at
              levere hurtigere og mere pålidelige løsninger
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <Link href="/roadSystem">
              <h1 className="mb-4 flex items-center gap-2 text-2xl font-semibold hover:underline">
                <FaRoad className="text-4xl" /> Vej system
              </h1>
            </Link>
            <p>
              Transportsystemer der hjælper med at løse nogle af de trafikale
              udfordringer, offentligt står overfor i disse år.
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <Link href="/Management">
              <h1 className="mb-4 flex items-center gap-2 text-2xl font-semibold hover:underline">
                <LiaSearchDollarSolid className="text-4xl" />
                Management
              </h1>
            </Link>
            <p>
              Skab den ændring der betyder noget. Identificere og sætte retning
              mod de vigtigste mål. Arbejde sammen om at gøre ambitiøse mål til
              virkelighed.
            </p>
          </div>
        </div>

        {/* // ekspertise section */}
        <div className=" my-8 grid grid-cols-3 gap-12">
          {/* Column 4 */}
          <div className="col-span-1">
            <Link href="/Energy">
              <h1 className="mb-4 flex items-center gap-2 text-2xl font-semibold hover:underline">
                <SlEnergy className="text-4xl" /> Energi
              </h1>
            </Link>
            <p>
              Forkusere på energieffektivering, energiplanlægning, produtkion og
              distribution inden for bæredygtighed.
            </p>
          </div>

          {/* Column 5 */}
          <div className="col-span-1 ">
            <Link href="/Bygherrerådgivning">
              <h1 className="mb-4 flex items-center gap-2 text-2xl font-semibold hover:underline">
                <BsBuildings className="text-4xl" />
                Bygherrerådgivning
              </h1>
            </Link>
            <p>
              Helhedsorienteret bygherrerådgivning på en bredvifte af
              kompetencer og erfaringer der sætter indi dine behov og værdier.
            </p>
          </div>

          {/* Column 6 */}
          <div className="col-span-1">
            <Link href="/Automation">
              <h1 className="mb-4 flex items-center gap-2 text-2xl font-semibold hover:underline">
                <LuCode2 className="text-4xl" /> Automation
              </h1>
            </Link>
            <p>
              Optimere og effektivisere processer gennem avanceret automation,
              der fremmer digitalisering og øger produktivitet
            </p>
          </div>
        </div>

        <hr className=" my-20" />

        {/* // why choose naoma section */}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-4/5 ">
            <h1 className="text-4xl font-semibold text-black">
              Hvorfor vælge NAOMA?
            </h1>
            <p className="py-5 text-2xl">
              Vi er en virksomhed, hvor energi, dynamik og innovation mødes for
              at skabe banebrydende løsninger for vores kunder.
              <br />
              <br /> Vi er stolte af at være et hold af talentfulde fagfolk, der
              bringer passion, kreativitet og ekspertise med til hvert projekt,
              vi påtager os.
              <br />
              <br /> Vores innovative tilgang til projektløsning er kombineret
              med vores dedikation til at levere kvalitetsresultater og sikre
              kundetilfredshed.
              <br />
              <br /> Når du vælger os, kan du stole på, at du vælger en partner,
              der er dedikeret til din succes og forpligtet til at hjælpe dig
              med at nå dine mål.
            </p>
            <Link href="/about">
              <button className="rounded-full border border-black bg-black px-4 py-2 text-white duration-100 hover:scale-105 hover:shadow-xl">
                om NAOMA
              </button>
            </Link>
          </div>
        </div>
        <hr className=" my-20" />

        {/* // Stats section */}
        <div className="flex justify-center gap-20 text-center text-3xl">
          <div className="flex flex-col items-center border-r pr-10">
            <GrMapLocation className="mx-auto mb-4 rounded-full border bg-blue-100 text-7xl" />
            <p>
              Vi har
              <br /> kunder i <br /> <span className="text-6xl">5</span> <br />
              lande
            </p>
          </div>
          <div className="flex flex-col items-center border-r pr-10">
            <MdOutlineHandshake className="mx-auto mb-4 rounded-full border bg-blue-100 text-7xl" />
            <p>
              Succesfuldt
              <br /> arbejdet med
              <br /> <span className="text-6xl">17</span> <br />
              kunder
            </p>
          </div>
          <div className="flex flex-col items-center border-r pr-10">
            <HiOutlinePresentationChartBar className="mx-auto mb-4 rounded-full border bg-blue-100 text-7xl" />
            <p>
              Succesfuldt
              <br /> afsluttet
              <br /> <span className="text-6xl">53</span> <br />
              projekter
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdPeopleAlt className="mx-auto mb-4 rounded-full border bg-blue-100 text-7xl" />
            <p>
              Vi har <br />
              mere end
              <br /> <span className="text-6xl">11</span> <br />
              specialister
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
