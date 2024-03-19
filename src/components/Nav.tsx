import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.png";

export function Nav() {
  return (
    <nav className="h-18 fixed left-0 top-0 z-30 w-full border px-10 py-2 backdrop-blur-[24px]">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl">
          <Image src={logo} alt="logo" width={100} height={80} />
        </Link>
        <div className="flex gap-4">
          <Link href={"/services"}>Ydelser</Link>
          <Link href={"/insights"}>Insights</Link>
          <Link href={"/about"}>Om NAOMA</Link>
          <Link href={"/contact"}>Kontakt os</Link>
        </div>
      </div>
    </nav>
  );
}
