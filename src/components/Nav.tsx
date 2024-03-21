"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@assets/logoNaoma.svg";

export function Nav() {
  const [ydelserDropdownVisible, setYdelserDropdownVisible] = useState(false);
  const [omNaomaDropdownVisible, setOmNaomaDropdownVisible] = useState(false);

  const handleYdelserMouseEnter = () => {
    setYdelserDropdownVisible(true);
  };

  const handleYdelserMouseLeave = () => {
    setYdelserDropdownVisible(false);
  };

  const handleOmNaomaMouseEnter = () => {
    setOmNaomaDropdownVisible(true);
  };

  const handleOmNaomaMouseLeave = () => {
    setOmNaomaDropdownVisible(false);
  };

  return (
    <nav className="h-18 fixed left-0 top-0 z-30 w-full border px-10 py-2 backdrop-blur">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl">
          <Image src={logo} alt="logo" width={100} height={80} />
        </Link>
        <div className="flex gap-4">
          <div
            className="relative"
            onMouseEnter={handleYdelserMouseEnter}
            onMouseLeave={handleYdelserMouseLeave}
          >
            <Link href="/services">
              <button className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
                Ydelser
              </button>
            </Link>
            {ydelserDropdownVisible && (
              <div className="width-4 absolute left-0 top-full flex flex-col rounded-lg border border-gray-200 bg-white p-2">
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/Railway"}
                >
                  Jernbane
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/TrafficSystem"}
                >
                  Vej system
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/Management"}
                >
                  Management
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/Energy"}
                >
                  Energi
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/ClientConsultancy"}
                >
                  Bygherrerådgivning
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/services/Automation"}
                >
                  Automation
                </Link>
              </div>
            )}
          </div>
          <Link
            className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/insights"}
          >
            Insights
          </Link>
          <div
            className="relative"
            onMouseEnter={handleOmNaomaMouseEnter}
            onMouseLeave={handleOmNaomaMouseLeave}
          >
            <Link href="/about">
              <button className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
                Om NAOMA
              </button>
            </Link>
            {omNaomaDropdownVisible && (
              <div className="absolute left-0 top-full flex w-36 flex-col rounded-lg border border-gray-200 bg-white p-2">
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/about"}
                >
                  Om NAOMA
                </Link>
                <Link
                  className="rounded-lg px-2 py-2 hover:bg-gray-200"
                  href={"/about/jobs"}
                >
                  Jobs
                </Link>
              </div>
            )}
          </div>

          <Link
            className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/contact"}
          >
            Kontakt os
          </Link>
        </div>
      </div>
    </nav>
  );
}
