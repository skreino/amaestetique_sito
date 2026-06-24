import { Contact, FinalCta, FloatingWhatsApp, Footer, Gallery, Hero, Intro, Metodo, Reviews, Services, WhyUs } from "@/components/SiteSections";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Metodo />
        <WhyUs />
        <Reviews />
        <Gallery />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
