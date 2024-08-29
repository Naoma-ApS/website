"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logoNaoma.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@lib/utils";

const components: { title: string; href: string }[] = [
  { title: "Ydelser", href: "/services" },
  { title: "Om NAOMA", href: "/about" },
  { title: "Jobs", href: "/about/jobs" },
  { title: "Insights", href: "/insights" },
  { title: "Kontakt os", href: "/contact" },
];

export function Navigation() {
  return (
    <NavigationMenu className="fixed left-0 right-0 top-0 z-50 h-14 backdrop-blur-md">
      <NavigationMenuList className="flex w-screen gap-3">
        <div className="flex w-full justify-between gap-4">
          <NavigationMenuItem className="p-1 md:p-[7px]">
            <Link href={"/"}>
              <Image
                src={logo as StaticImport}
                alt="logo"
                width={100}
                height={80}
                className="min-w-[40%] max-w-[60%] md:max-w-[100%]"
              />
            </Link>
          </NavigationMenuItem>
          {/* Mobile Menu */}
          <NavigationMenuItem className="sm:hidden">
            <NavigationMenuTrigger />
            <NavigationMenuContent>
              <ul className="grid  md:grid-cols-2 ">
                {components.map((component, index) => (
                  <ListItem
                    className="hover:underline"
                    key={index}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <div className="hidden gap-5 p-4 sm:flex">
            {/* Desktop Menu */}
            {components.map((component, index) => (
              <NavigationMenuItem key={index}>
                <Link href={component.href} passHref legacyBehavior>
                  <NavigationMenuLink className="text-sm  font-light duration-200 hover:scale-110 hover:underline md:text-lg">
                    {component.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
