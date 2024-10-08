import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",

  description:
    " I løbet af det seneste år har NAOMA udviklet sig betydeligt. Vi har haft mange nye betydningsfulde tilføjelser til vores team i år",
};
export default function insight() {
  return (
    <>
      <div className="relative mt-14 h-96 w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="text-7xl font-bold text-black">Insights</h1>
            <hr />
            <div className="text-center text-2xl text-black">
              Nyheder og Inspiration
            </div>
          </header>
        </div>
      </div>
      <hr className="mx-auto my-20 max-w-7xl" />
      <div className="flex h-[100vh] w-screen items-center justify-center">
        <span className="absolute inset-y-[290px] left-0 h-[95px] w-full bg-white"></span>

        <iframe
          src="https://www.juicer.io/api/feeds/naoma-5b5d66a5-85d7-4519-b233-54947a43f78a/iframe"
          width="1000"
          height="1000"
        ></iframe>
      </div>
    </>
  );
}
