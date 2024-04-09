import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  alt: string;
  imageSrc: string | StaticImageData;
  title: string;
  href: string;
}

export function BlogCard({ imageSrc, alt, title, href }: BlogCardProps) {
  return (
    <div className="transform rounded-lg transition duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-xl">
      <Link href={href}>
        <Image
          src={imageSrc}
          alt={alt}
          width={300}
          height={200}
          className="w-full rounded-lg "
        />
        <p className="mx-4 my-4 flex flex-wrap text-left hover:underline">
          {title}
        </p>
        <p className="mx-4 text-left underline">
          Læs mere <br />
          <br />
        </p>
      </Link>
    </div>
  );
}
