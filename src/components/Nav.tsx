"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logoNaoma.svg";

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-30 h-12 w-full px-10 py-2 backdrop-blur-[24px] md:h-16">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={80}
            className="max-w-[60%] md:max-w-[100%]"
          />
        </Link>
        <div className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <a className="cursor-pointer">Ydelser</a>
            </DropdownTrigger>
            <DropdownMenu className="rounded-lg bg-white ">
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/Railway"}>Jernbane</Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/TrafficSystem"}>Vej system</Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/Management"}>Management</Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/Energy"}>Energi</Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/ClientConsultancy"}>
                  Bygherrerådgivning
                </Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/services/Automation"}>Automation</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <a className="cursor-pointer">Om NAOMA</a>
            </DropdownTrigger>
            <DropdownMenu className="rounded-lg border-0 bg-white">
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/about"}>Om NAOMA</Link>
              </DropdownItem>
              <DropdownItem className="my-1 rounded-lg border-0 hover:bg-gray-200">
                <Link href={"/about/jobs"}>Jobs</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Link href={"/insights"}>Insights</Link>
          <Link href={"/contact"}>Kontakt os</Link>
        </div>
      </div>
    </nav>
  );
}
