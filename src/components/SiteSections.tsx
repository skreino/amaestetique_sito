import Image from "next/image";
import { ContactForm } from "./ContactForm";
import {
  featuredTreatments,
  hours,
  priceGroups,
  proofPoints,
  reviews,
  visualAssets,
  whatsappUrl
} from "@/lib/data";
import { ImageLift, Reveal } from "./Motion";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Via%20Giovanni%20XXIII%2017%2020874%20Busnago%20MB";

function PrimaryButton({ children, href = whatsappUrl }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-xs font-extrabold uppercase tracking-[0.14em] text-warm shadow-editorial transition hover:bg-burnt"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/18 bg-warm/70 px-6 text-xs font-extrabold uppercase tracking-[0.14em] text-cocoa transition hover:border-terracotta hover:text-terracotta"
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[680px] lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
        <Reveal className="relative z-10">
          <p className="eyebrow text-terracotta">Beauty studio · Busnago</p>
          <h1 className="magazine-title mt-5 text-[clamp(4.6rem,11vw,10.8rem)] leading-[0.82] text-cocoa">
            Ama <span className="italic text-terracotta">Esthetique</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-[clamp(2.45rem,5vw,5.8rem)] italic leading-[0.98] text-cocoa">
            La bellezza che si prende il suo tempo.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cocoa/72">
            Un centro estetico a Busnago dove trattamenti viso, corpo, nails e Metodo Renata França si incontrano in
            un’esperienza curata, elegante e professionale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Prenota</PrimaryButton>
            <SecondaryButton href="#trattamenti">Scopri i trattamenti</SecondaryButton>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 border-t border-cocoa/12 pt-5 text-sm text-cocoa/68 sm:grid-cols-3">
            <p>Google Reviews 5/5</p>
            <p>Via Giovanni XXIII, 17 · Busnago</p>
            <p>Lun-Sab · 09-20</p>
          </div>
        </Reveal>

        <div className="relative min-h-[500px] lg:min-h-[620px]">
          <ImageLift className="image-soft absolute right-0 top-0 h-[78%] w-[82%] rounded-[2rem]">
            <Image
              src="/images/ama/hero-main.jpg"
              alt="Visual premium Ama Esthetique"
              fill
              priority
              className="object-cover object-[50%_50%]"
            />
          </ImageLift>
          <div className="image-soft absolute bottom-0 left-0 h-[40%] w-[46%] rounded-[1.4rem] border-8 border-cream">
            <Image src="/images/ama/still-life-01.jpg" alt="Dettagli beauty premium" fill className="object-cover" />
          </div>
          <div className="absolute bottom-[14%] right-[4%] rounded-full bg-warm px-5 py-4 text-center font-serif text-2xl italic leading-none text-terracotta shadow-soft">
            5/5
            <span className="mt-1 block font-sans text-[0.58rem] uppercase tracking-[0.18em] text-cocoa/60">Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="bg-warm px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.2rem] border border-cocoa/10 bg-cream shadow-soft md:grid-cols-4">
        {proofPoints.map((point) => (
          <article key={point.title} className="border-b border-cocoa/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="font-serif text-3xl leading-none text-cocoa">{point.title}</p>
            <p className="mt-3 text-sm leading-6 text-cocoa/66">{point.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="trattamenti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <h2 className="magazine-title text-[clamp(3.6rem,8vw,8rem)] text-cocoa">
            Trattamenti scelti per <span className="italic text-terracotta">valorizzarti.</span>
          </h2>
          <p className="max-w-xl text-lg leading-8 text-cocoa/70">
            Pochi blocchi, chiari e utili: cosa fa il trattamento, per chi è indicato e come chiedere informazioni senza sentirsi
            spinti subito alla chat.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {featuredTreatments.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[1.4rem] border border-cocoa/10 bg-cream shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-4xl leading-none text-cocoa">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cocoa/68">{item.text}</p>
                <p className="mt-4 border-t border-cocoa/10 pt-4 text-sm leading-6 text-cocoa/62">
                  <span className="font-bold text-terracotta">Ideale per: </span>
                  {item.ideal}
                </p>
                <a href="#contatti" className="mt-5 inline-flex text-xs font-extrabold uppercase tracking-[0.16em] text-terracotta">
                  Richiedi informazioni
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="metodo" className="mt-8 grid gap-6 rounded-[1.6rem] bg-terracotta p-6 text-warm shadow-editorial lg:grid-cols-[0.45fr_0.55fr] lg:p-9">
          <div>
            <p className="eyebrow text-cream">Focus trattamento</p>
            <h3 className="magazine-title mt-4 text-[clamp(3.2rem,6vw,6.8rem)]">Metodo Renata França</h3>
            <p className="mt-5 max-w-xl leading-8 text-cream/85">
              Trattamento drenante e modellante per chi desidera sentirsi più leggera e definita, con un percorso da valutare in
              base al corpo e agli obiettivi.
            </p>
            <div className="mt-7">
              <SecondaryButton href="#contatti">Richiedi informazioni</SecondaryButton>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.2rem]">
            <Image src="/images/ama/corpo-01.jpg" alt="Metodo Renata França" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResultsFocus() {
  return (
    <section className="bg-cream px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.6rem] border border-cocoa/10 bg-warm p-6 shadow-soft lg:grid-cols-[0.35fr_0.65fr] lg:p-9">
        <div className="self-center">
          <h2 className="magazine-title text-[clamp(3.2rem,6vw,6.4rem)] text-cocoa">
            Risultati visibili. <span className="italic text-terracotta">Cura reale.</span>
          </h2>
          <p className="mt-5 leading-8 text-cocoa/70">
            Un approccio professionale pensato per valorizzare il viso, il corpo e i dettagli che fanno la differenza.
          </p>
          <div className="mt-7">
            <SecondaryButton href="#trattamenti">Scopri i trattamenti</SecondaryButton>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.2rem]">
            <Image src="/images/ama/results-01.jpg" alt="Risultato beauty naturale" fill className="object-cover" />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.2rem]">
            <Image src="/images/ama/viso-01.jpg" alt="Trattamento viso Ama Esthetique" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Prices() {
  return (
    <section id="prezzi" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.5fr_0.5fr] lg:items-end">
          <h2 className="magazine-title text-[clamp(3.4rem,7vw,7.2rem)] text-cocoa">Una bussola per orientarti.</h2>
          <p className="max-w-2xl text-lg leading-8 text-cocoa/70">
            Ogni trattamento può variare in base alla tecnica, alla durata e al percorso consigliato. Qui trovi alcune fasce
            orientative utili per capire da dove partire.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {priceGroups.map((group) => (
            <article key={group.title} className="rounded-[1.2rem] border border-cocoa/10 bg-cream p-5 shadow-soft">
              <h3 className="font-serif text-3xl text-cocoa">{group.title}</h3>
              <div className="mt-4 grid gap-3">
                {group.items.map(([label, price]) => (
                  <p key={label} className="flex items-baseline justify-between gap-4 border-t border-cocoa/10 pt-3 text-sm">
                    <span className="text-cocoa/72">{label}</span>
                    <span className="font-bold text-terracotta">{price}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[1.2rem] bg-sand p-5 text-center">
          <p className="font-serif text-3xl text-cocoa">Hai dubbi sul trattamento giusto?</p>
          <a href="#contatti" className="mt-4 inline-flex text-xs font-extrabold uppercase tracking-[0.16em] text-terracotta">
            Richiedi informazioni
          </a>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="recensioni" className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-terracotta">Google Reviews · 5/5</p>
            <h2 className="magazine-title mt-4 text-[clamp(3.2rem,6vw,6.5rem)] text-cocoa">Le parole di chi ci sceglie.</h2>
          </div>
          <p className="rounded-full border border-terracotta/25 bg-warm px-5 py-3 text-sm font-bold text-terracotta">
            Clienti che tornano da anni
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-[1.2rem] border border-cocoa/10 bg-warm p-6 shadow-soft">
              <p className="text-xs tracking-[0.24em] text-terracotta">★★★★★</p>
              <p className="mt-5 font-serif text-3xl italic leading-tight text-cocoa">“{review.quote}”</p>
              <cite className="mt-5 block text-sm not-italic text-cocoa/58">— {review.name}</cite>
            </blockquote>
          ))}
        </div>
        <a href="#contatti" className="mt-7 inline-flex text-xs font-extrabold uppercase tracking-[0.16em] text-terracotta">
          Leggi altre recensioni
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contatti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="eyebrow text-terracotta">Contatti</p>
          <h2 className="magazine-title mt-4 text-[clamp(3.4rem,7vw,7.4rem)] text-cocoa">Prenota il tuo momento.</h2>
          <div className="mt-7 rounded-[1.3rem] border border-cocoa/10 bg-cream p-6 shadow-soft">
            <p className="font-serif text-3xl text-cocoa">Via Giovanni XXIII, 17<br />20874 Busnago MB</p>
            <p className="mt-4 text-xl font-bold text-cocoa">327 222 7302</p>
            <div className="mt-6 grid gap-2 border-y border-cocoa/10 py-4 text-sm">
              {hours.map(([day, time]) => (
                <p key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span className="font-bold text-terracotta">{time}</span>
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <PrimaryButton>WhatsApp</PrimaryButton>
              <SecondaryButton href={mapsUrl}>Google Maps</SecondaryButton>
              <SecondaryButton href="https://www.instagram.com/amaesthetique/">Instagram</SecondaryButton>
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <ContactForm />
          <div className="relative min-h-[240px] overflow-hidden rounded-[1.4rem] border border-cocoa/10">
            <Image src="/images/ama/contact-visual.jpg" alt="Ama Esthetique studio" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-cocoa px-4 py-16 text-warm sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
        <div>
          <h2 className="magazine-title text-[clamp(3.8rem,8vw,8rem)]">Prenditi un momento per te.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/86">
            Che tu voglia curare le mani, migliorare la pelle, dedicarti a un trattamento corpo o semplicemente ritagliarti un
            momento di benessere, Ama Esthetique ti accoglie con attenzione, precisione e calore.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <PrimaryButton>Prenota</PrimaryButton>
          <SecondaryButton href="#contatti">Richiedi informazioni</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-warm px-4 py-8 text-sm text-cocoa/66 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl text-cocoa">
            Ama <span className="italic text-terracotta">Esthetique</span>
          </p>
          <p>Beauty Studio · Busnago</p>
        </div>
        <p>Via Giovanni XXIII, 17 · 327 222 7302 · Lun-Sab 09-20</p>
        <a href="https://www.instagram.com/amaesthetique/" target="_blank" rel="noreferrer" className="font-bold text-terracotta">
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
      className="fixed bottom-4 right-4 z-50 rounded-full bg-cocoa px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-warm shadow-soft transition hover:bg-terracotta"
    >
      WA
    </a>
  );
}
