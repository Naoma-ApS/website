import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logoNaoma.svg";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export function Footer() {
  return (
    <footer>
      <div className="z-40 w-full items-center justify-between border bg-white px-12 py-10 md:flex">
        <div>
          <div className="mb-4 md:mb-0">
            <Link href={"/"} className="text-3xl">
              <Image
                src={logo as StaticImport}
                alt="logo"
                width={150}
                height={80}
              />
            </Link>
          </div>
          <div className="ml-4 text-gray-400">
            <p>Innovative løsninger til en skiftende verden.</p>
            <p>Vi står klar med ekspertisen.</p>
            <hr className="my-4" />
          </div>
        </div>
        <div className="mr-4 mt-12 text-gray-400 md:mt-0 md:text-xl">
          <Link href={"/contact"}>
            <h1 className="mt-4 flex gap-4 text-lg text-black hover:scale-105 hover:underline  md:text-2xl">
              <FaPhone /> Kontakt
            </h1>
          </Link>
          <div className="my-4">
            <p>
              +45 41 77 36 41
              <br />
              +45 31 62 76 61
            </p>
          </div>
          <p className="mt-4">kontakt@naoma.dk</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-48 px-12 py-8 text-gray-400 md:gap-0">
        <p>© {new Date().getFullYear()} Naoma. All rights reserved</p>
        <Link
          href={"https://dk.linkedin.com/company/naoma"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <RiLinkedinFill className=" text-3xl text-black md:mr-60" />
        </Link>
      </div>
    </footer>
  );
}
