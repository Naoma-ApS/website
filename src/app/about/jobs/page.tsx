import Image from "next/image";
import image1 from "@assets/om_os_stock-scaled.jpg";
import { jobs } from "src/app/about/jobs/jobs";
import { BlogCard } from "@components/Blog/BlogCard";

export default function AboutUsPage() {
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <header>
            <h1 className="text-center text-7xl font-bold text-white">Jobs</h1>
            <hr />
            <div className="text-center text-2xl text-white">Oplev NAOMA</div>
          </header>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5">
        <h1 className="mb-10 text-center text-2xl font-semibold text-black md:text-4xl">
          <span>
            Skab din karriere med NAOMA: Udforsk vores ledige stillinger!
          </span>
        </h1>

        {/* blog section */}
        <div></div>
        <div className="grid-cols-3 gap-6 px-5 text-center md:grid md:px-0">
          {jobs.map((blog, index) => (
            <div key={index} className="col-span-1">
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                alt={blog.alt}
                title={blog.title}
                href={blog.href}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
