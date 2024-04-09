import { type Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "NAOMA: Rådgivning i harmoni",

  description:
    "Velkommen til vores ingeniørrådgivningsfirma, hvor erfaring møder innovation. Vores team af højt kvalificerede ingeniører bringer årtiers ekspertise til hvert projekt, sikrer bæredygtige og effektive løsninger på tværs af en bred vifte af industrier. Vi forpligter os til at skabe værdi og fremme fremskridt gennem vores dedikerede rådgivningstjenester. Lad os sammen bygge fremtiden.",
};

export default function Page() {
  return <HomePage />;
}
