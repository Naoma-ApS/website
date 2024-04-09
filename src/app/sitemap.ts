import { env } from "@env";
import { type MetadataRoute } from "next";

function generateSitemap(): MetadataRoute.Sitemap {
  const endpointArray = [
    "",
    "contact",
    "insights",
    "about",
    "about/jobs",
    "about/jobs/highCurrent",
    "about/jobs/driveCurrent",
    "about/jobs/batteryTrains",
    "/about/jobs/Intern",
    "services",
    "services/railway",
    "services/railway/highCurrent",
    "services/railway/risk",
    "services/railway/trafficSystem",
    "services/railway/trafficSystem/ITS",
    "services/railway/trafficSystem/trafficAnalysis",
    "services/TrafficSystem",
    "services/management",
    "services/management/construction",
    "services/management/projectManagement",
    "services/management/riskManagement",
    "services/management/strategyDevelopment",
    "services/management/education",
    "services/energy",
    "services/energy/solarPower",
    "services/energy/windPower",
    "services/energy/elnet",
    "services/energy/storage",
    "services/automation",
    "services/clientConsultancy",
  ];

  const frontendUrl = env.NEXT_PUBLIC_FRONTEND_URL;

  return endpointArray.map((endpoint) => ({
    url: `${frontendUrl}/${endpoint}`,
    lastModified: new Date(),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
