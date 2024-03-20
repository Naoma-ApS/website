import Image from "next/image";
export default function AboutUsPage() {
  return (
    <>
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="mb-4 text-7xl font-bold text-black">Insights</h1>
            <hr />
            <div className="text-center text-2xl text-black">
              Nyheder og Inspiration
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
