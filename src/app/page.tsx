import {
  Benefits,
  Contact,
  FinalCta,
  FloatingWhatsApp,
  Footer,
  Hero,
  Prices,
  ResultsFocus,
  Reviews,
  Services
} from "@/components/SiteSections";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <ResultsFocus />
        <Prices />
        <Reviews />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
