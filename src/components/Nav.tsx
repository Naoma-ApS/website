'use client';

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
        <Link href={"/"}>
          <a className="text-3xl">
            <Image src={logo} alt="logo" width={100} height={80} />
          </a>
        </Link>
        <div className="flex gap-4">
          <div
            className="relative"
            onMouseEnter={handleYdelserMouseEnter}
            onMouseLeave={handleYdelserMouseLeave}
          >
            <Link href="/services">
              <a className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
                Ydelser
              </a>
            </Link>
            {ydelserDropdownVisible && (
              <div className="width-4 absolute left-0 top-full flex flex-col rounded-lg border border-gray-200 bg-white p-2">
                <Link href={"/services/Railway"}>
                  <a className="rounded-lg px-2 py-2 hover:bg-gray-200">
                    Jernbane
                  </a>
                </Link>
                {/* Add similar links for other services */}
              </div>
            )}
          </div>
          <Link href={"/insights"}>
            <a className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
              Insights
            </a>
          </Link>
          <div
            className="relative"
            onMouseEnter={handleOmNaomaMouseEnter}
            onMouseLeave={handleOmNaomaMouseLeave}
          >
            <Link href="/about">
              <a className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
                Om NAOMA
              </a>
            </Link>
            {omNaomaDropdownVisible && (
              <div className="absolute left-0 top-full flex w-36 flex-col rounded-lg border border-gray-200 bg-white p-2">
                <Link href={"/about"}>
                  <a className="rounded-lg px-2 py-2 hover:bg-gray-200">
                    Om NAOMA
                  </a>
                </Link>
                {/* Add similar links for other about pages */}
              </div>
            )}
          </div>

          <Link href={"/contact"}>
            <a className="px-2 py-2 duration-200 hover:rounded-lg hover:bg-gray-200">
              Kontakt os
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
