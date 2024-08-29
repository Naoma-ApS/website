// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@assets/logoNaoma.svg";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import type { StaticImport } from "next/dist/shared/lib/get-img-props";

// const components: { title: string; href: string }[] = [
//   { title: "Ydelser", href: "/services" },
//   { title: "Om NAOMA", href: "/about" },
//   { title: "Jobs", href: "/about/jobs" },
//   { title: "Insights", href: "/insights" },
//   { title: "Kontakt os", href: "/contact" },
// ];

// export function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   return (
//     <Navbar
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//       className="h-10 w-full bg-transparent backdrop-blur-md md:h-16"
//       classNames={{
//         wrapper: "max-w-[2024px]",
//       }}
//     >
//       <NavbarContent>
//         <NavbarBrand>
//           <Link href={"/"} className="text-3xl">
//             <Image
//               src={logo as StaticImport}
//               alt="logo"
//               width={100}
//               height={80}
//               className="min-w-[40%] max-w-[60%] md:max-w-[100%]"
//             />
//           </Link>
//         </NavbarBrand>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="ml-auto sm:hidden"
//         />
//       </NavbarContent>

//       {isMenuOpen && (
//         <NavbarMenu className="top-[36px] bg-transparent backdrop-blur-none ">
//           {menuLinks.map((link, index) => (
//             <NavbarMenuItem
//               className=" -mx-6 -my-[4px] bg-white/90 px-1 py-1 font-light"
//               key={index}
//             >
//               <Link href={link.href}>
//                 <p onClick={() => setIsMenuOpen(!isMenuOpen)}>{link.title}</p>
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       )}

//       <NavbarContent
//         className="hidden gap-6 text-sm sm:flex md:text-lg"
//         justify="center"
//       >
//         {menuLinks.map((link, index) => (
//           <NavbarItem
//             key={index}
//             className="duration-200 hover:scale-110 hover:underline"
//           >
//             <Link href={link.href}>
//               <p>{link.title}</p>
//             </Link>
//           </NavbarItem>
//         ))}
//       </NavbarContent>
//     </Navbar>
//   );
// }
