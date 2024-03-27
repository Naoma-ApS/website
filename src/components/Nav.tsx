"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logoNaoma.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-30 h-12 w-full px-10 py-2 backdrop-blur-[24px] md:h-16">
      <div className="flex items-center justify-between ">
        <Link href={"/"} className="text-3xl">
          <Image
            src={logo as StaticImport}
            alt="logo"
            width={100}
            height={80}
            className="min-w-[40%] max-w-[60%] md:max-w-[100%]"
          />
        </Link>
        <div className="flex gap-4">
          <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button className="cursor-pointer bg-transparent duration-200 hover:text-gray-400">
                Ydelser
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="flex rounded-lg bg-white">
              <DropdownSection showDivider className="w-1/2">
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/railway"
                  key="railway"
                >
                  <p className="font-bold underline">Jernbane</p>
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/railway/starkstrom"
                  key="starkstrom"
                >
                  Stærkstrøm
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/railway/sikkerhed"
                  key="sikkerhed"
                >
                  Jernbane sikkerhed
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/trafficSystem"
                  key="trafficSystem"
                >
                  <p className="font-bold underline">Vej system</p>
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/trafficSystem/ITS"
                  key="ITS"
                >
                  Intelligent Traffic System (ITS)
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/trafficSystem/trafikAnalyse"
                  key="trafikAnalyse"
                >
                  Trafik Analyse
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management"
                  key="management"
                >
                  <p className="font-bold underline">Management</p>
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management/byggeledelse"
                  key="Byggeledelse"
                >
                  Byggeledelse
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management/projektledelse"
                  key="Byggeledelse"
                >
                  Projektledelse
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management/risikoledelse"
                  key="Byggeledelse"
                >
                  Risikoledelse
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management/strategiudvikling"
                  key="Byggeledelse"
                >
                  Strategiudvikling
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/management/undervisning"
                  key="Byggeledelse"
                >
                  Undervisning
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/energy"
                  key="energy"
                >
                  <p className="font-bold underline">Energi</p>
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/energy/solarPower"
                  key="solarPower"
                >
                  Solenergi
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/energy/windPower"
                  key="solarPower"
                >
                  Vindenergi
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/energy/elnet"
                  key="elnet"
                >
                  Elnet
                </DropdownItem>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/energy/storage"
                  key="storage"
                >
                  Lagring & BMS
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/clientConsultancy"
                  key="clientConsultancy"
                >
                  <p className="font-bold underline">Bygherrerådgivning</p>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem
                  className="my-1 rounded-lg border-0 hover:bg-gray-100"
                  href="/services/automation"
                  key="automation"
                >
                  <p className="font-bold underline">Automation</p>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button className="cursor-pointer bg-transparent duration-200 hover:text-gray-400">
                Om NAOMA
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="rounded-lg border-0 bg-white">
              <DropdownItem
                className="my-1 rounded-lg border-0 hover:bg-gray-100"
                href="/about"
                key="about"
              >
                Om NAOMA
              </DropdownItem>
              <DropdownItem
                className="my-1 rounded-lg border-0 hover:bg-gray-100"
                href="/about/jobs"
                key="jobs"
              >
                Jobs
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Link href={"/insights"}>
            <Button className="bg-transparent duration-200 hover:text-gray-400">
              Insights
            </Button>
          </Link>

          <Link href={"/contact"}>
            <Button className="bg-transparent duration-200 hover:text-gray-400">
              Kontakt os
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
