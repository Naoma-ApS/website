import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logoNaoma.svg";

export function Nav() {
  return (
    <nav className="h-18 fixed left-0 top-0 z-30 w-full border px-10 py-2 backdrop-blur">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl">
          <Image src={logo} alt="logo" width={100} height={80} />
        </Link>
        <div className="flex gap-4">
          <Link
            className="px-1 py-1  duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/services"}
          >
            Ydelser
          </Link>
          <Link
            className="px-1 py-1  duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/insights"}
          >
            Insights
          </Link>
          <Link
            className="px-1 py-1  duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/about"}
          >
            Om NAOMA
          </Link>
          <Link
            className="px-1 py-1  duration-200 hover:rounded-lg hover:bg-gray-200"
            href={"/contact"}
          >
            Kontakt os
          </Link>
        </div>
      </div>
    </nav>
  );
}
