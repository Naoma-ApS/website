import { type StaticImageData } from "next/image";

export interface Blog {
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
  href: string;
}
