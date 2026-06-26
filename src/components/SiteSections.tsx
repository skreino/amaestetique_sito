import Image from "next/image";
import { ContactForm } from "./ContactForm";
import {
  featuredTreatments,
  hours,
  priceGroups,
  reviews,
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
  const proofItems = [
    {
      label: "Google Reviews",
      value: "5/5",
      icon: (
        <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.19L12 17.18 6.44 20.1l1.06-6.19L3 9.53l6.22-.9L12 3Z" />
      )
    },
    {
      label: "Lun-Sab",
      value: "09-20",
      icon: (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      )
    },
    {
      label: "Via Giovanni XXIII, 17",
      value: "Busnago",
      icon: (
        <>
          <path d="M19 10.2c0 5-7 10-7 10s-7-5-7-10a7 7 0 0 1 14 0Z" />
          <circle cx="12" cy="10.2" r="2.2" />
        </>
      )
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-cream px-4 pb-7 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(240,215,197,0.85),transparent_34%),linear-gradient(180deg,#FFF6EF_0%,#FFFCF8_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:min-h-[650px] lg:grid-cols-[0.47fr_0.53fr] lg:items-center">
        <Reveal className="relative z-20 order-1 lg:pt-6">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-terracotta sm:text-[0.78rem] sm:tracking-[0.28em]">
            Beauty Studio · Busnago
          </p>
          <h1 className="magazine-title mt-4 text-[clamp(3.7rem,18vw,5.3rem)] leading-[0.9] tracking-[-0.02em] text-cocoa sm:mt-5 sm:text-[clamp(4.1rem,8.5vw,8.2rem)] sm:leading-[0.88] lg:tracking-[-0.03em]">
            Ama Esthetique
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[clamp(2rem,9vw,3.05rem)] leading-[1.05] tracking-[-0.01em] text-cocoa sm:text-[clamp(2.15rem,4vw,4.35rem)] sm:tracking-[-0.02em]">
            La bellezza che si prende il suo tempo.
          </p>
          <p className="mt-5 max-w-lg text-base leading-8 text-cocoa/72 sm:text-lg">
            Trattamenti viso, corpo, nails e Metodo Renata França in uno spazio curato, caldo e professionale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#contatti">Prenota ora</PrimaryButton>
            <SecondaryButton href="#trattamenti">Scopri i trattamenti</SecondaryButton>
          </div>

          <div className="mt-7 grid max-w-2xl gap-4 border-t border-cocoa/10 pt-5 sm:mt-8 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-terracotta/25 text-terracotta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.7]">
                    {item.icon}
                  </svg>
                </span>
                <span className="text-sm leading-tight text-cocoa/72">
                  <span className="block font-bold text-cocoa">{item.label}</span>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative z-10 order-2">
          <div className="relative mx-auto max-w-[520px] overflow-visible pt-3 sm:max-w-[680px] sm:pt-6 lg:max-w-none lg:pt-0">
            <div className="absolute right-[4%] top-0 h-[78%] w-[62%] rounded-t-full bg-terracotta" />
            <ImageLift className="relative ml-auto aspect-[0.92] max-h-[430px] w-[82%] overflow-hidden rounded-t-full rounded-b-[1.5rem] border border-warm/70 shadow-[0_24px_55px_rgba(53,35,28,0.14)] sm:aspect-[0.86] sm:max-h-[620px] sm:rounded-b-[2rem] sm:shadow-[0_32px_70px_rgba(53,35,28,0.16)]">
              <Image
                src="/images/ama/hero-main.jpg"
                alt="Trattamento beauty premium Ama Esthetique"
                fill
                priority
                sizes="(max-width: 1024px) 82vw, 48vw"
                className="object-cover object-[54%_48%] transition duration-700 hover:scale-[1.03]"
              />
            </ImageLift>

            <div className="absolute bottom-[7%] left-0 aspect-[1.06] w-[40%] overflow-hidden rounded-[1.1rem] border-[6px] border-cream bg-warm shadow-[0_18px_38px_rgba(53,35,28,0.14)] sm:w-[42%] sm:rounded-[1.45rem] sm:border-[8px] sm:shadow-[0_22px_55px_rgba(53,35,28,0.16)]">
              <Image
                src="/images/ama/viso-01.jpg"
                alt="Trattamento viso Ama Esthetique"
                fill
                sizes="280px"
                className="object-cover object-[50%_42%]"
              />
            </div>

            <div className="absolute bottom-0 right-[8%] aspect-[1.18] w-[24%] overflow-hidden rounded-[0.9rem] border-[5px] border-cream bg-warm shadow-soft sm:w-[25%] sm:rounded-[1rem] sm:border-[7px]">
              <Image
                src="/images/ama/still-life-01.jpg"
                alt="Dettaglio beauty e atmosfera calda"
                fill
                sizes="220px"
                className="object-cover object-[50%_50%]"
              />
            </div>

            <div className="absolute right-0 top-[7%] hidden rounded-full bg-warm px-5 py-4 text-center font-serif text-2xl italic leading-none text-terracotta shadow-soft sm:block">
              5/5
              <span className="mt-1 block font-sans text-[0.58rem] uppercase tracking-[0.18em] text-cocoa/60">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const benefits = [
    {
      title: "Nails curati",
      text: "Mani precise e ordinate",
      icon: (
        <>
          <path d="M8.5 20.5V9.3a2.2 2.2 0 0 1 4.4 0v10.9" />
          <path d="M12.9 19.8V7.2a2.1 2.1 0 0 1 4.2 0v9.1" />
          <path d="M17.1 16.2v-5.6a2 2 0 0 1 4 0v5.2c0 4.1-2.5 6.7-6.7 6.7H9.8c-2.9 0-5-2.1-5-5v-4.8" />
          <path d="M4.8 12.8V8.7a2.1 2.1 0 0 1 4.2 0v4.1" />
        </>
      )
    },
    {
      title: "Trattamenti viso",
      text: "Luminosità e freschezza",
      icon: (
        <>
          <path d="M7.5 9.5C7.5 5.8 9.7 3 12 3s4.5 2.8 4.5 6.5c0 4.3-2 7.5-4.5 7.5S7.5 13.8 7.5 9.5Z" />
          <path d="M8.7 19.5c1 .9 2.1 1.4 3.3 1.4s2.3-.5 3.3-1.4" />
          <path d="M9.4 10.6h.1M14.5 10.6h.1M10.5 14c.9.5 2.1.5 3 0" />
          <path d="M5 8.2 3.7 7M19 8.2 20.3 7M5.8 17.5l-1.5 1M18.2 17.5l1.5 1" />
        </>
      )
    },
    {
      title: "Metodo Renata França",
      text: "Leggerezza e definizione",
      icon: (
        <>
          <path d="M9 3c-1.2 2.7-1.6 5.1-1 7.2.4 1.5 1.4 2.8 3 3.8" />
          <path d="M15 3c1.2 2.7 1.6 5.1 1 7.2-.4 1.5-1.4 2.8-3 3.8" />
          <path d="M8 21c.9-2.8 2.2-4.6 4-5.4 1.8.8 3.1 2.6 4 5.4" />
        </>
      )
    },
    {
      title: "Ambiente accogliente",
      text: "Cura, relax e professionalità",
      icon: (
        <>
          <path d="M6 14.5h12v5H6z" />
          <path d="M8 14.5v-3.2a4 4 0 0 1 8 0v3.2" />
          <path d="M4 19.5h16M18.5 8.5c1.5-.7 2.6-1.8 3.2-3.5M19.5 12.2c1.4.2 2.4.8 3 1.8" />
        </>
      )
    }
  ];

  return (
    <section className="bg-cream px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.35rem] border border-cocoa/10 bg-warm shadow-[0_18px_55px_rgba(53,35,28,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="flex items-center gap-3 border-b border-cocoa/10 p-4 last:border-b-0 sm:gap-4 sm:p-5 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <span className="grid size-12 shrink-0 place-items-center rounded-full text-terracotta sm:size-14">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-9 fill-none stroke-current stroke-[1.35] sm:size-11">
                {benefit.icon}
              </svg>
            </span>
            <span>
              <span className="block text-sm font-extrabold uppercase tracking-[0.08em] text-cocoa">{benefit.title}</span>
              <span className="mt-1 block text-sm text-cocoa/66">{benefit.text}</span>
            </span>
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
          <h2 className="magazine-title text-[clamp(3rem,14vw,5rem)] text-cocoa sm:text-[clamp(3.6rem,8vw,8rem)]">
            Trattamenti scelti per <span className="italic text-terracotta">valorizzarti.</span>
          </h2>
          <p className="max-w-xl text-lg leading-8 text-cocoa/70">
            Pochi blocchi, chiari e utili: cosa fa il trattamento, per chi è indicato e come chiedere informazioni senza sentirsi
            spinti subito alla chat.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredTreatments.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[1.4rem] border border-cocoa/10 bg-cream shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 sm:p-6">
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

        <div id="metodo" className="mt-6 grid gap-6 rounded-[1.35rem] bg-terracotta p-5 text-warm shadow-editorial sm:mt-8 sm:rounded-[1.6rem] sm:p-6 lg:grid-cols-[0.45fr_0.55fr] lg:p-9">
          <div>
            <p className="eyebrow text-cream">Focus trattamento</p>
            <h3 className="magazine-title mt-4 text-[clamp(2.8rem,13vw,4.8rem)] sm:text-[clamp(3.2rem,6vw,6.8rem)]">
              Metodo Renata França
            </h3>
            <p className="mt-5 max-w-xl leading-8 text-cream/85">
              Trattamento drenante e modellante per chi desidera sentirsi più leggera e definita, con un percorso da valutare in
              base al corpo e agli obiettivi.
            </p>
            <div className="mt-7">
              <SecondaryButton href="#contatti">Richiedi informazioni</SecondaryButton>
            </div>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-[1.2rem] sm:min-h-[280px]">
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
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.35rem] border border-cocoa/10 bg-warm p-5 shadow-soft sm:gap-8 sm:rounded-[1.6rem] sm:p-6 lg:grid-cols-[0.35fr_0.65fr] lg:p-9">
        <div className="self-center">
          <h2 className="magazine-title text-[clamp(2.9rem,13vw,4.7rem)] text-cocoa sm:text-[clamp(3.2rem,6vw,6.4rem)]">
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
          <div className="relative min-h-[230px] overflow-hidden rounded-[1.2rem] sm:min-h-[260px]">
            <Image src="/images/ama/results-01.jpg" alt="Risultato beauty naturale" fill className="object-cover" />
          </div>
          <div className="relative min-h-[230px] overflow-hidden rounded-[1.2rem] sm:min-h-[260px]">
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
          <h2 className="magazine-title text-[clamp(3rem,14vw,5rem)] text-cocoa sm:text-[clamp(3.4rem,7vw,7.2rem)]">
            Una bussola per orientarti.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-cocoa/70">
            Ogni trattamento può variare in base alla tecnica, alla durata e al percorso consigliato. Qui trovi alcune fasce
            orientative utili per capire da dove partire.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
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
            <h2 className="magazine-title mt-4 text-[clamp(2.9rem,13vw,4.8rem)] text-cocoa sm:text-[clamp(3.2rem,6vw,6.5rem)]">
              Le parole di chi ci sceglie.
            </h2>
          </div>
          <p className="rounded-full border border-terracotta/25 bg-warm px-5 py-3 text-sm font-bold text-terracotta">
            Clienti che tornano da anni
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-[1.2rem] border border-cocoa/10 bg-warm p-5 shadow-soft sm:p-6">
              <p className="text-xs tracking-[0.24em] text-terracotta">★★★★★</p>
              <p className="mt-5 font-serif text-[1.7rem] italic leading-tight text-cocoa sm:text-3xl">“{review.quote}”</p>
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
          <h2 className="magazine-title mt-4 text-[clamp(3rem,14vw,5rem)] text-cocoa sm:text-[clamp(3.4rem,7vw,7.4rem)]">
            Prenota il tuo momento.
          </h2>
          <div className="mt-7 rounded-[1.3rem] border border-cocoa/10 bg-cream p-5 shadow-soft sm:p-6">
            <p className="font-serif text-[1.9rem] leading-tight text-cocoa sm:text-3xl">
              Via Giovanni XXIII, 17<br />20874 Busnago MB
            </p>
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
          <div className="relative min-h-[220px] overflow-hidden rounded-[1.4rem] border border-cocoa/10 sm:min-h-[240px]">
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
          <h2 className="magazine-title text-[clamp(3rem,14vw,5rem)] sm:text-[clamp(3.8rem,8vw,8rem)]">Prenditi un momento per te.</h2>
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
