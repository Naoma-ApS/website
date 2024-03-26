export default function AboutUsPage() {
  return (
    <>
      <div className="relative h-96 w-full">
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

      <div className="flex items-center justify-center ">
        <iframe
          src="https://www.juicer.io/api/feeds/naoma/iframe?truncate=600"
          width="1000"
          height="800"
        />
      </div>
    </>
  );
}
