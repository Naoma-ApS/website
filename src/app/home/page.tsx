"use client";

import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import UpCounter from "src/components/UpCounter";
import React, { useEffect } from "react";

import Aarsleff from "@assets/LOGOer/Aarsleff_Rail_Primaer_tofarver-removebg-preview-300x300.png";
import midtjyske from "@assets/LOGOer/Logo_midtjyske_jernbaner-removebg-preview-300x168.png";
import bdk from "@assets/LOGOer/Logo-CMYK-2-dark-300x161.png";
import bhf from "@assets/LOGOer/logo-removebg-preview.png";
import Rina from "@assets/LOGOer/RINA_rgb_nopayoff-removebg-preview-300x231.png";
import wsp from "@assets/LOGOer/wsp_RGB-300x143.png";
import image7 from "@assets/Homepage/IMG_2145-circle.jpg";

import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { MdOutlineHandshake, MdTrain } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { frontPageBlogs } from "@components/Blog/blogs/frontpage";
import { BlogCard } from "@components/Blog/BlogCard";

export default function HomePage() {
  return (
    <>
      <div className="pt-5/100 relative hidden h-0 pb-[56.25%] sm:block">
        <iframe
          className="absolute left-0 top-0 -mt-16 h-full w-full object-cover grayscale"
          src="https://player.vimeo.com/video/819043327?autoplay=1&loop=1&background=1"
          allowFullScreen
          width="100%"
          height="100%"
        />
        <h1 className="absolute bottom-24 left-10 text-2xl font-semibold text-white drop-shadow-2xl md:text-6xl lg:bottom-72">
          Innovative løsninger til <br /> en skiftende verden
        </h1>
      </div>

      {/* Mobile video */}
      <div className="relative -mt-10">
        <div className=" relative overflow-hidden bg-black">
          <iframe
            className="items-center justify-center grayscale"
            width="1405"
            height="790"
            src="https://player.vimeo.com/video/819043327?autoplay=1&loop=1&background=1"
          ></iframe>
          <h1 className="absolute bottom-24 left-10 text-3xl font-semibold text-white drop-shadow-2xl sm:hidden ">
            Innovative løsninger til en skiftende verden
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-8 flex items-center justify-center">
          <h2 className="text-center text-2xl font-semibold text-black md:text-4xl">
            Udvalgte kunder, samarbejdspartnere og leverandører hos NAOMA
          </h2>
        </div>

        {/* Logo grid */}
        <div className="my-5 grid max-w-7xl grid-cols-6 items-center justify-center gap-2 grayscale-[50%]">
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

        {/* Løsninger til en verden i forandring */}
        <div className="flex items-center justify-center">
          <h2 className="text-center text-2xl font-semibold text-black md:text-4xl">
            Løsninger til en verden i forandring
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center md:mt-16 md:flex-row">
          <p className="w-full py-5 text-base md:text-xl">
            NAOMA er drevet af et team af erfarne og dygtige talenter, der
            leverer innovative løsninger til vores kunder. Kvalitet, samarbejde
            og løbende udvikling gennem dialog med kunder og leverandører, er
            vores primære fokus i et hvert projekt. NAOMA har en bred portefølje
            af ydelser, der omfatter jernbane, el, bygherrerådgivning, ledelse,
            automatisering, undervisning og energi.
          </p>
          <div className="w-4/5 items-center px-10 md:w-2/5 md:px-0">
            <Image
              src={image7}
              alt="Image"
              quality={100}
              className="rounded-full"
            />
          </div>
        </div>
        <hr className=" my-20" />

        {/* blog section */}
        <div>
          <h2 className="mb-10 text-center text-2xl font-semibold text-black md:text-4xl">
            Seneste nyheder fra NAOMA
          </h2>
        </div>
        <div className="grid-cols-4 gap-6 px-5 text-center md:grid md:px-0">
          {frontPageBlogs.map((blog, index) => (
            <div key={index} className="col-span-1">
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                alt={blog.alt}
                title={blog.title}
                href={blog.href}
              />
            </div>
          ))}
        </div>

        <hr className=" my-20" />

        {/* // ekspertise section */}
        <div className="my-8 grid gap-12 md:grid-cols-3">
          {/* Column 1 */}
          <div className="col-span-1">
            <Link href="/services/Railway">
              <h2 className="flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <MdTrain className="text-xl md:text-4xl" /> Jernbane
              </h2>
            </Link>
            <p className="md:text-base">
              Løsninger til at klare de stigende offentlige togrejser for at
              levere hurtigere og mere pålidelige løsninger
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <Link href="/services/TrafficSystem">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <FaRoad className="text-xl md:text-4xl" /> Vej system
              </h2>
            </Link>
            <p className="md:text-base">
              Transportsystemer der hjælper med at løse nogle af de trafikale
              udfordringer, offentligt står overfor i disse år.
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <Link href="/services/Management">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <LiaSearchDollarSolid className="text-xl md:text-4xl" />
                Management
              </h2>
            </Link>
            <p className="md:text-base">
              Skab den ændring der betyder noget. Identificere og sætte retning
              mod de vigtigste mål. Arbejde sammen om at gøre ambitiøse mål til
              virkelighed.
            </p>
          </div>

          {/* // ekspertise section */}
          {/* Column 4 */}
          <div className="col-span-1">
            <Link href="/services/Energy">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <SlEnergy className="text-xl md:text-4xl" /> Energi
              </h2>
            </Link>
            <p className="md:text-base">
              Forkusere på energieffektivering, energiplanlægning, produtkion og
              distribution inden for bæredygtighed.
            </p>
          </div>

          {/* Column 5 */}
          <div className="col-span-1 ">
            <Link href="/services/ClientConsultancy">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <BsBuildings className="text-xl md:text-4xl" />
                Bygherrerådgivning
              </h2>
            </Link>
            <p className="md:text-base">
              Helhedsorienteret bygherrerådgivning på en bredvifte af
              kompetencer og erfaringer der sætter indi dine behov og værdier.
            </p>
          </div>

          {/* Column 6 */}
          <div className="col-span-1">
            <Link href="/services/Automation">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold hover:underline md:text-2xl">
                <LuCode2 className="text-xl md:text-4xl" /> Automation
              </h2>
            </Link>
            <p className="md:text-base">
              Optimere og effektivisere processer gennem avanceret automation,
              der fremmer digitalisering og øger produktivitet
            </p>
          </div>
        </div>

        <hr className=" my-20" />

        {/* // why choose naoma section */}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-4/5 ">
            <h2 className="text-2xl font-semibold text-black md:text-4xl">
              Hvorfor vælge NAOMA?
            </h2>
            <p className="py-5 text-base md:text-lg">
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
        <hr className=" my-20 border-0" />

        {/* // Stats section */}
        <div className="justify-center gap-20 text-center text-lg md:flex md:text-2xl">
          <UpCounter
            icon={<GrMapLocation className="text-3xl md:text-7xl" />}
            label="Vi har kunder i"
            label2="lande"
            finalCount={5}
          />
          <UpCounter
            icon={<MdOutlineHandshake className="text-3xl md:text-7xl" />}
            label="Vi har succesfuldt arbejdet med"
            label2="kunder"
            finalCount={17}
          />
          <UpCounter
            icon={
              <HiOutlinePresentationChartBar className="text-3xl md:text-7xl" />
            }
            label="Vi har succesfuldt afsluttet"
            label2="projekter"
            finalCount={53}
          />
          <UpCounter
            icon={<LuCode2 className="text-3xl md:text-7xl" />}
            label="Vi har mere end"
            label2="specialister"
            finalCount={11}
          />
        </div>
      </div>
    </>
  );
}
