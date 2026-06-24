import Image from "next/image";
import { gallery, hours, reviews, services, whatsappUrl } from "@/lib/data";
import { ImageLift, Reveal } from "./Motion";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Via%20Giovanni%20XXIII%2C%2017%2C%2020874%20Busnago%20MB";

function CtaLink({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${
        variant === "light"
          ? "bg-warm text-cocoa hover:bg-cream"
          : "bg-terracotta text-warm hover:bg-cocoa"
      }`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pb-20 lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <Reveal className="relative z-10 max-w-2xl pb-0 lg:pb-20">
          <p className="eyebrow mb-7 text-terracotta">Beauty studio · Busnago</p>
          <h1 className="magazine-title text-[clamp(5rem,15vw,13rem)]">Ama</h1>
          <div className="-mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
            <h2 className="magazine-title text-[clamp(3.4rem,9vw,8rem)] italic text-terracotta">Esthetique</h2>
            <span className="mb-5 hidden h-px w-24 bg-cocoa/30 sm:block" />
          </div>
          <p className="mt-7 max-w-xl font-serif text-4xl leading-[0.98] text-cocoa sm:text-5xl">
            La bellezza che si prende <span className="italic">il suo tempo.</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cocoa/72">
            Un centro estetico a Busnago dove manualità, precisione e cura si incontrano in trattamenti pensati per farti
            sentire bene, dentro e fuori.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink>Prenota su WhatsApp</CtaLink>
            <a
              href="#trattamenti"
              className="inline-flex items-center justify-center rounded-full border border-cocoa/18 px-6 py-3 text-sm font-bold text-cocoa transition hover:border-terracotta hover:text-terracotta"
            >
              Scopri i trattamenti
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 text-sm text-cocoa/70 sm:grid-cols-3">
            <span className="border-t border-cocoa/15 pt-3">Google Reviews 5/5</span>
            <span className="border-t border-cocoa/15 pt-3">Via Giovanni XXIII, 17</span>
            <span className="border-t border-cocoa/15 pt-3">Lun-Sab · 09-20</span>
          </div>
        </Reveal>
        <div className="relative min-h-[560px] lg:min-h-[700px]">
          <ImageLift className="image-soft absolute right-0 top-2 h-[70%] w-[78%]">
            <Image src="/images/editorial-facial.jpg" alt="Trattamento viso Ama Esthetique" fill priority className="object-cover" />
          </ImageLift>
          <ImageLift className="image-soft absolute bottom-0 left-0 h-[42%] w-[48%]" delay={0.12}>
            <Image src="/images/ama-nails-soft.png" alt="Manicure nude con decorazione elegante" fill className="object-cover" />
          </ImageLift>
          <div className="absolute bottom-[16%] right-[6%] rounded-full bg-sage px-5 py-4 text-center font-serif text-lg italic leading-none text-warm shadow-soft">
            5/5<br />
            <span className="font-sans text-[10px] uppercase tracking-[0.18em]">review</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <Reveal>
          <span className="font-serif text-8xl text-terracotta/55">01</span>
          <h2 className="magazine-title mt-4 max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            Un centro estetico dove ogni dettaglio parla di <span className="italic">cura.</span>
          </h2>
        </Reveal>
        <Reveal className="relative">
          <p className="text-lg leading-9 text-cocoa/76">
            Da Ama Esthetique ogni trattamento parte dall'ascolto. Che si tratti di mani, viso, corpo o dermopigmentazione,
            l'obiettivo è valorizzare la persona con risultati curati, naturali e coerenti con il suo stile.
          </p>
          <div className="mt-10 grid gap-4">
            {["Precisione nei dettagli", "Trattamenti personalizzati", "Ambiente caldo e professionale"].map((value) => (
              <div key={value} className="flex items-center justify-between border-t border-cocoa/15 py-4">
                <span className="font-serif text-2xl italic">{value}</span>
                <span className="size-2 rounded-full bg-terracotta" />
              </div>
            ))}
          </div>
          <div className="image-soft mt-8 aspect-[4/3] w-3/4">
            <Image src="/images/editorial-interior.jpg" alt="Interno caldo di beauty studio" width={900} height={680} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="trattamenti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <h2 className="magazine-title max-w-5xl text-6xl sm:text-7xl lg:text-8xl">
            Trattamenti pensati per valorizzarti, <span className="italic text-terracotta">non per cambiarti.</span>
          </h2>
          <p className="pb-3 leading-8 text-cocoa/68">Servizi studiati con la precisione di un atelier beauty e la naturalezza di chi conosce davvero il corpo.</p>
        </Reveal>
        <div className="mt-16 grid border-t border-cocoa/18 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 4) * 0.04}
              className="group min-h-[260px] border-b border-cocoa/18 px-0 py-8 transition hover:bg-cream/70 sm:px-7 lg:odd:border-r"
            >
              <div className="flex gap-6">
                <span className="font-serif text-5xl italic text-terracotta/60">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-4xl leading-none">{service.title}</h3>
                  <p className="mt-5 max-w-xl leading-8 text-cocoa/68">{service.text}</p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex text-sm font-bold text-terracotta underline-offset-8 group-hover:underline">
                    Prenota
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Metodo() {
  const benefits = ["Sensazione di leggerezza", "Effetto drenante", "Corpo più definito", "Manualità professionale", "Esperienza intensa ma rilassante"];
  return (
    <section id="metodo" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-sage text-warm shadow-soft lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[680px]">
          <Image src="/images/editorial-spa.jpg" alt="Metodo Renata França trattamento corpo" fill className="object-cover" />
        </div>
        <Reveal className="p-8 sm:p-12 lg:p-16">
          <p className="eyebrow text-peach">Focus trattamento</p>
          <h2 className="magazine-title mt-7 text-6xl sm:text-7xl">Metodo Renata França</h2>
          <p className="mt-6 font-serif text-3xl italic leading-tight text-cream">Leggerezza, definizione e benessere in un trattamento iconico.</p>
          <p className="mt-7 leading-8 text-cream/78">
            Un trattamento manuale conosciuto per il suo approccio drenante e modellante. Ideale per chi desidera sentirsi più
            leggera, migliorare la percezione del corpo e concedersi un momento di cura profonda.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <span key={benefit} className="rounded-full border border-warm/18 px-4 py-3 text-sm text-cream/88">
                {benefit}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink variant="light">Prenota una consulenza</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <ImageLift className="relative min-h-[600px]">
          <div className="image-soft absolute left-0 top-0 h-[58%] w-[78%]">
            <Image src="/images/ama-nails-red.png" alt="Nail art rossa Ama Esthetique" fill className="object-cover" />
          </div>
          <div className="image-soft absolute bottom-0 right-0 h-[48%] w-[62%]">
            <Image src="/images/editorial-facial.jpg" alt="Dettaglio trattamento viso" fill className="object-cover" />
          </div>
        </ImageLift>
        <Reveal>
          <h2 className="magazine-title text-6xl sm:text-7xl lg:text-8xl">
            Non solo estetica. <span className="italic text-terracotta">Un posto dove tornare.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-cocoa/72">
            Le recensioni raccontano una cosa chiara: chi entra da Ama Esthetique non cerca solo un trattamento, ma persone di cui
            fidarsi. Professionalità, cordialità e attenzione ai dettagli sono parte dell'esperienza.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {["Team esperto e accogliente", "Clienti fidelizzate da anni", "Risultati curati e naturali", "Ambiente rilassante e professionale"].map((item) => (
              <div key={item} className="border-t border-cocoa/15 pt-5 font-serif text-3xl italic">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section id="recensioni" className="overflow-hidden bg-cocoa py-24 text-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-peach">Google Reviews 5/5</p>
            <h2 className="magazine-title mt-5 text-6xl sm:text-7xl">Le parole di chi ci sceglie.</h2>
          </div>
          <p className="max-w-md leading-8 text-cream/72">Recensioni reali lasciate dalle clienti su Google, raccolte in un racconto semplice: fiducia.</p>
        </Reveal>
      </div>
      <div className="mt-14 flex overflow-hidden">
        <div className="marquee gap-5 px-4">
          {doubled.map((review, index) => (
            <article key={`${review.name}-${index}`} className="w-[330px] shrink-0 rounded-3xl border border-warm/12 bg-warm/8 p-7 backdrop-blur sm:w-[420px]">
              <div className="text-sm tracking-[0.22em] text-peach">★★★★★</div>
              <p className="mt-8 font-serif text-3xl italic leading-tight">"{review.quote}"</p>
              <p className="mt-8 text-sm font-bold text-cream/82">— {review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-terracotta">Moodboard</p>
          <h2 className="magazine-title mt-5 text-6xl sm:text-7xl">Momenti di bellezza, dettagli di cura.</h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-6">
          {gallery.map((item, index) => (
            <ImageLift
              key={item.src}
              delay={index * 0.04}
              className={`image-soft relative ${index === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""} ${
                index === 2 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 4 ? "col-span-2 md:col-span-2" : ""}`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
            </ImageLift>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contatti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_0.42fr]">
        <Reveal>
          <p className="eyebrow text-terracotta">Orari e contatti</p>
          <h2 className="magazine-title mt-5 max-w-4xl text-6xl sm:text-7xl">
            Prenota il tuo momento da <span className="italic">Ama Esthetique.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink>Scrivici su WhatsApp</CtaLink>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cocoa/18 px-6 py-3 text-sm font-bold text-cocoa hover:border-terracotta">
              Apri su Google Maps
            </a>
            <a href="https://www.instagram.com/amaesthetique/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cocoa/18 px-6 py-3 text-sm font-bold text-cocoa hover:border-terracotta">
              Instagram
            </a>
          </div>
        </Reveal>
        <Reveal className="rounded-[2rem] border border-cocoa/12 bg-cream p-7 shadow-soft">
          <div className="border-b border-cocoa/15 pb-6">
            <p className="text-sm uppercase tracking-[0.18em] text-terracotta">Indirizzo</p>
            <p className="mt-3 font-serif text-3xl">Via Giovanni XXIII, 17<br />20874 Busnago MB</p>
          </div>
          <div className="border-b border-cocoa/15 py-6">
            <p className="text-sm uppercase tracking-[0.18em] text-terracotta">Telefono</p>
            <p className="mt-3 font-serif text-3xl">327 222 7302</p>
          </div>
          <div className="pt-6">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between border-b border-cocoa/10 py-3 text-sm">
                <span>{day}</span>
                <span className="font-bold">{time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl rounded-[2rem] bg-terracotta px-7 py-16 text-warm sm:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
          <div>
            <h2 className="magazine-title text-6xl sm:text-8xl">Prenditi un momento per te.</h2>
            <p className="mt-7 max-w-2xl leading-8 text-cream/82">
              Che tu voglia curare le mani, concederti un trattamento corpo, migliorare la pelle o semplicemente ritagliarti un
              momento di benessere, Ama Esthetique ti accoglie con attenzione, precisione e calore.
            </p>
          </div>
          <CtaLink variant="light">Prenota su WhatsApp</CtaLink>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa/12 px-4 py-10 text-sm text-cocoa/68 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl text-cocoa">Ama <span className="italic text-terracotta">Esthetique</span></p>
          <p>Beauty Studio · Busnago</p>
        </div>
        <p>Via Giovanni XXIII, 17 · 327 222 7302 · Lun-Sab 09-20</p>
        <a href="https://www.instagram.com/amaesthetique/" target="_blank" rel="noreferrer" className="font-bold text-cocoa">
          Instagram
        </a>
        <p>© 2026 Ama Esthetique</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Prenota su WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-sage text-xs font-bold uppercase tracking-[0.12em] text-warm shadow-soft transition hover:bg-terracotta"
    >
      WA
    </a>
  );
}
