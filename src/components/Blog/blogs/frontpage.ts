import type { Blog } from "../types";
import image8 from "@assets/BlogImages/1697022731568-1400x1076.jpg";
import image9 from "@assets/BlogImages/mjba_siteinspection-1400x1076.jpeg";
import image10 from "@assets/BlogImages/Skyrmbillede_2023-10-20_112142-transformed-700x538.png";
import image11 from "@assets/BlogImages/stroem-1400x1076.jpg";

export const frontPageBlogs: Blog[] = [
  {
    title: "Praktikophold med mulighed for afgangsprojekt",
    imageSrc: image10,
    alt: "Praktikophold med mulighed for afgangsprojekt",
    href: "/about/jobs/Intern",
    content: "Praktikophold med mulighed for afgangsprojekt",
  },
  {
    title: "Stærkstrømsingeniør til Jernbanen",
    imageSrc: image11,
    alt: "Stærkstrømsingeniør til Jernbanen",
    href: "/about/jobs/highCurrent",
    content: "Stærkstrømsingeniør til Jernbanen",
  },
  {
    title: "Ingeniør til Kørestrøm",
    imageSrc: image8,
    alt: "Ingeniør til Kørestrøm",
    href: "/about/jobs/driveCurrent",
    content: "Ingeniør til Kørestrøm",
  },
  {
    title: "NAOMA hjælper med at byde velkommen til Danmarks første batteritog",
    imageSrc: image9,
    alt: "NAOMA hjælper med at byde velkommen til Danmarks første batteritog",
    href: "/about/jobs/batteryTrains",
    content:
      "NAOMA hjælper med at byde velkommen til Danmarks første batteritog",
  },
];
