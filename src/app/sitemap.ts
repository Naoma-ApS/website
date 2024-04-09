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
    "about/jobs/Intern",
    "services",
    "services/Railway",
    "services/Railway/highCurrent",
    "services/Railway/risk",
    "services/Railway/trafficSystem",
    "services/Railway/trafficSystem/ITS",
    "services/Railway/trafficSystem/trafficAnalysis",
    "services/TrafficSystem",
    "services/Management",
    "services/Management/construction",
    "services/Management/projectManagement",
    "services/Management/riskManagement",
    "services/Management/strategyDevelopment",
    "services/Management/education",
    "services/Energy",
    "services/Energy/solarPower",
    "services/Energy/windPower",
    "services/Energy/elnet",
    "services/Energy/storage",
    "services/Automation",
    "services/ClientConsultancy",
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
