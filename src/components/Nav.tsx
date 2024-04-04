"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logoNaoma.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuLinks = [
    { title: "Ydelser", href: "/services" },
    { title: "Om NAOMA", href: "/about" },
    { title: "Jobs", href: "/about/jobs" },
    { title: "Insights", href: "/insights" },
    { title: "Kontakt os", href: "/contact" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-10 w-full bg-transparent backdrop-blur-md md:h-16"
      classNames={{
        wrapper: "max-w-[2024px]",
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href={"/"} className="text-3xl">
            <Image
              src={logo as StaticImport}
              alt="logo"
              width={100}
              height={80}
              className="min-w-[40%] max-w-[60%] md:max-w-[100%]"
            />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu className="top-[36px] bg-transparent backdrop-blur-none ">
          {menuLinks.map((link, index) => (
            <NavbarMenuItem
              className=" -mx-6 -my-[4px] bg-white/90 px-1 py-1 font-normal"
              key={index}
            >
              <Link href={link.href}>
                <p onClick={() => setIsMenuOpen(!isMenuOpen)}>{link.title}</p>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}

      <NavbarContent
        className="hidden gap-4 text-sm sm:flex md:text-lg"
        justify="center"
      >
        {menuLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link href={link.href}>
              <p>{link.title}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
