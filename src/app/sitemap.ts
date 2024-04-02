import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/railway",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/railway/starkstrom",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/railway/sikkerhed",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/trafficSystem",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/trafficSystem/ITS",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/trafficSystem/trafikAnalyse",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management/byggeledelse",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management/projektledelse",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management/risikoledelse",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management/strategiudvikling",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/management/undervisning",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/energy",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/energy/solarPower",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/energy/windPower",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/energy/elnet",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/energy/storage",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/clientConsultancy",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/services/automation",
      lastModified: new Date(),
    },
  ];
}
