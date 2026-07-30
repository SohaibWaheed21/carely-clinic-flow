import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Solutions } from "@/components/site/Solutions";
import { Testimonials } from "@/components/site/Testimonials";
import { RoiCalculator } from "@/components/site/RoiCalculator";
import { Security } from "@/components/site/Security";
import { FAQ } from "@/components/site/FAQ";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Carely — WhatsApp assistant for clinics in Lahore";
const description =
  "Carely answers patient WhatsApp messages in seconds, books and reschedules appointments, and cuts no-shows for dental, physio, aesthetic and general clinics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Solutions />
      <Testimonials />
      <RoiCalculator />
      <Security />
      <FAQ />
      <FinalCta />
    </>
  );
}
