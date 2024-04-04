"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import image from "@assets/Kontakt.jpg";
import { useForm } from "react-hook-form";
import sendEmail from "@lib/sendContactEmail";

export interface ContactFormData {
  email: string;
  title: string;
  message: string;
}

export default function ContactPage() {
  const [errorsWhenSubmitting, setErrorsWhenSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    try {
      await sendEmail(data);
      setErrorsWhenSubmitting(false);
      setSuccess(true);
    } catch (error) {
      setErrorsWhenSubmitting(true);
      throw new Error(JSON.stringify(error));
    }
  }

  function validateEmail(email: string): boolean {
    const checkRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return checkRegex.test(email);
  }

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
        <div className="flex flex-col gap-8">
          <Input
            {...register("email", {
              required: { value: true, message: "Email er påkrævet" },
              validate: (email) => validateEmail(email) || "Email er ugyldig",
            })}
            label="Email"
            labelPlacement="inside"
            errorMessage={errors.email?.message}
            required
          />
          <Input
            {...register("title", {
              required: { value: true, message: "Navn er påkrævet" },
            })}
            label="Emne"
            labelPlacement="inside"
            errorMessage={errors.title?.message}
            required
          />
          <Textarea
            {...register("message", {
              required: { value: true, message: "Besked er påkrævet" },
            })}
            label="Besked"
            errorMessage={errors.message?.message}
            labelPlacement="inside"
            required
          />
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              disabled={isSubmitting || success}
              onClick={handleSubmit(onSubmit)}
              className="w-2/4 rounded-full border border-black bg-black px-4 py-2 text-white duration-100 hover:scale-105 hover:shadow-xl md:w-1/5"
            >
              Send besked
            </Button>
            {errorsWhenSubmitting && !isSubmitting && (
              <p className="text-red-500">
                Noget gik galt, prøv venligst igen. Hvis problem fortsætter,
                send venligst en email til
                <a
                  className="ml-1 underline duration-300 hover:text-red-700"
                  href="mailto:kontakt@naoma.dk"
                >
                  kontakt@naoma.dk
                </a>
              </p>
            )}
            {success && !isSubmitting && (
              <p className="text-green-600">
                Din besked er blevet sendt. Tak! Vi vender tilbage hurtigst
                muligt på din email.
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <div id="map" className="h-[400px] w-screen">
          <iframe
            className="h-full w-full"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=1000&amp;height=400&amp;hl=en&amp;q=Knabrostr%C3%A6de%203,%201210%20%20K%C3%B8benhavn+(NAOMA)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
    </>
  );
}
