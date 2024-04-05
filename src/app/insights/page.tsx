export default function insight() {
  return (
    <>
      <div className="relative h-60 w-full">
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
        <span className="absolute inset-y-[400px] left-0 h-[95px] w-full bg-white"></span>

        <iframe
          className="h-full w-full"
          src="https://www.juicer.io/api/feeds/naoma/iframe?truncate=900"
        />
      </div>
    </>
  );
}
