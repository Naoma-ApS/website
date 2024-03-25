import { Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import image from "@assets/kontakt.jpg";

export default function AboutUsPage() {
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="text-7xl font-bold text-white">Kontakt</h1>
            <hr />
            <div className="text-center text-2xl text-white">
              Søg nye muligheder
            </div>
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email">Din email</label>
            <Input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              classNames={{ inputWrapper: "h-10 mx-2" }}
              placeholder="navn@eksempel.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Emne</label>
            <Input
              classNames={{ inputWrapper: "h-10 mx-2" }}
              type="text"
              id="subject"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              placeholder="Hvad handler din forespørsel om?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-black"
            >
              Besked:
            </label>
            <textarea
              id="message"
              rows={6}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              placeholder=""
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
