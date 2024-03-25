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

      <div className="flex items-center justify-center">
        <iframe
          id="abcdef"
          name="abcdef"
          src="https://www.linkedin.com/company/30589743"
          width="1400"
          height="900"
        >
          {/* <a href="http://anotherexternaldomain.com" target="_blank">
          <img src="http://externaldomain.com?pic=99" alt="" />
        </a> */}
        </iframe>
      </div>
    </>
  );
}
