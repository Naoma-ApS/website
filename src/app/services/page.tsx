import Image from "next/image";
import image from "@assets/Services.jpg";
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
            <h1 className="text-7xl font-bold text-white">Ydelser</h1>
            <hr />
            <div className="text-center text-2xl text-white">
              Ekspertiser og områder
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
