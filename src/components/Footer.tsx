import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer>
      <div className="z-40 flex w-full items-center justify-between border bg-white px-12 py-10">
        <div>
          <Link href={"/"} className="text-3xl">
            <Image src={logo} alt="logo" width={150} height={80} />
          </Link>
          <div className="ml-4 text-gray-400">
            <p>Innovative løsninger til en skiftende verden.</p>
            <p>Vi står klar med ekspertisen.</p>
            <hr className="my-4" />
          </div>
        </div>
        <div className="mr-4 text-xl text-gray-400">
          <h1 className="flex gap-4 text-2xl text-black ">
            {" "}
            <FaClock /> Åbningstider
          </h1>
          <p className="my-4"> Hverdage kl. 8:00 - kl. 16:30</p>

          <h1 className="mt-4 flex gap-4 text-2xl text-black">
            <FaPhone /> Kontakt
          </h1>
          <div className="my-4">
            <p>
              +45 31 62 76 61
              <br />
              +45 41 77 36 41
            </p>
          </div>
          <p className="mt-4">kontakt@naoma.dk</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-12 py-8 text-gray-400">
        <p>@naoma2023</p>
        <Link
          href={"https://dk.linkedin.com/company/naoma"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <RiLinkedinFill className=" mr-60 text-3xl text-black" />
        </Link>
      </div>
    </footer>
  );
}
