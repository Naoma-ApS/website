import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center ">
        <div
          style={{
            // en anden løsning skal findes
            position: "relative",
            width: "100%",
            height: "50vh",
            marginTop: "-250px",
          }}
        >
          <Image
            src="/om_os_stock-scaled.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className=" absolute inset-0 flex items-center justify-center">
            <header>
              <h1 className="text-7xl font-bold text-white">Om NAOMA</h1>
              <hr />
              <div
                className="text-2xl text-white"
                style={{
                  textAlign: "center",
                }}
              >
                Stiftet i København - 2019
              </div>
            </header>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold  ">
            <span className="text-black">Historien om NAOMA</span>
          </h1>
        </div>
      </main>
    </>
  );
}
