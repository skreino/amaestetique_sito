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
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${
        variant === "light" ? "bg-warm text-cocoa hover:bg-cream" : "bg-terracotta text-warm hover:bg-cocoa"
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
          <h1 className="magazine-title text-[clamp(5rem,15vw,13rem)]">Ama</h1>
          <div className="-mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
            <h2 className="magazine-title text-[clamp(3.4rem,9vw,8rem)] italic text-terracotta">Esthetique</h2>
            <span className="mb-5 hidden h-px w-24 bg-cocoa/30 sm:block" />
          </div>
          <p className="mt-7 max-w-xl font-serif text-4xl leading-[0.98] text-cocoa sm:text-5xl">
            La bellezza che si prende <span className="italic">il suo tempo.</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cocoa/72">
            Andressa e Vanessa lavorano sui dettagli che si notano da vicino: mani pulite, pelle più luminosa, corpo più leggero,
            sopracciglia che restano naturali.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink>Prenota su WhatsApp</CtaLink>
            <a
              href="#trattamenti"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/18 px-6 text-sm font-bold text-cocoa transition hover:border-terracotta hover:text-terracotta"
            >
              Scopri i trattamenti
            </a>
          </div>
          <div className="mt-9 flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-sm text-cocoa/70">
            <span>Google Reviews 5/5</span>
            <span>Via Giovanni XXIII, 17</span>
            <span>Lun-Sab · 09-20</span>
          </div>
        </Reveal>
        <div className="relative min-h-[560px] lg:min-h-[700px]">
          <ImageLift className="image-soft absolute right-0 top-2 h-[70%] w-[78%]">
            <Image
              src="/images/editorial-facial.jpg"
              alt="Trattamento viso Ama Esthetique"
              fill
              priority
              className="object-cover object-[54%_42%]"
            />
          </ImageLift>
          <ImageLift className="image-soft absolute bottom-0 left-0 h-[42%] w-[48%]" delay={0.12}>
            <Image src="/images/ama-nails-soft.png" alt="Manicure nude con decorazione elegante" fill className="object-cover object-[48%_42%]" />
          </ImageLift>
          <div className="absolute bottom-[16%] right-[6%] rounded-full bg-sage px-5 py-4 text-center font-serif text-lg italic leading-none text-warm shadow-soft">
            5/5<br />
            <span className="font-sans text-[10px] uppercase tracking-[0.18em]">Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <div>
          <h2 className="magazine-title max-w-4xl text-[clamp(3rem,8vw,8.8rem)]">
            Qui si torna perché il lavoro resta <span className="italic text-terracotta">pulito.</span>
          </h2>
        </div>
        <div className="relative">
          <p className="max-w-2xl text-xl leading-10 text-cocoa/76">
            Da Ama Esthetique il trattamento non parte da un menu, ma da una domanda fatta bene: cosa vuoi sistemare davvero oggi?
            Le clienti lo raccontano da anni, spesso nominando Andressa, Vanessa e Martina come si nomina una persona di fiducia.
          </p>
          <p className="mt-8 max-w-xl border-l border-terracotta pl-6 font-serif text-3xl italic leading-tight text-cocoa">
            Oltre 200 clienti fidelizzate, molte da dieci o vent’anni. Non è fortuna, è mestiere.
          </p>
          <div className="image-soft mt-10 aspect-[4/3] w-[82%]">
            <Image
              src="/images/editorial-interior.jpg"
              alt="Interno caldo di beauty studio"
              width={900}
              height={680}
              className="h-full w-full object-cover object-[55%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [renata, nails, ...compactServices] = services;

  return (
    <section id="trattamenti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <h2 className="magazine-title max-w-5xl text-[clamp(3.5rem,8.4vw,9rem)]">
            20 anni di clienti fedeli. <span className="italic text-terracotta">Non è fortuna, è mestiere.</span>
          </h2>
          <p className="pb-3 text-lg leading-8 text-cocoa/70">
            Il sito non deve promettere miracoli: deve mostrare cosa succede quando mani esperte fanno bene le cose ripetute ogni
            giorno.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="group grid min-h-[520px] overflow-hidden rounded-[2rem] bg-cocoa text-warm shadow-soft">
            <div className="relative min-h-[250px]">
              <Image src="/images/editorial-spa.jpg" alt="Metodo Renata França" fill className="object-cover object-[50%_45%] opacity-90" />
            </div>
            <div className="p-7 sm:p-9">
              <p className="eyebrow text-peach">Trattamento richiesto</p>
              <h3 className="mt-5 font-serif text-5xl leading-none">{renata.title}</h3>
              <p className="mt-6 max-w-xl leading-8 text-cream/78">{renata.text}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex text-sm font-bold text-peach underline-offset-8 group-hover:underline">
                Prenota
              </a>
            </div>
          </article>

          <article className="group grid min-h-[520px] overflow-hidden rounded-[2rem] border border-cocoa/12 bg-cream shadow-soft">
            <div className="relative min-h-[250px]">
              <Image src="/images/ama-nails-red.png" alt="Nails Ama Esthetique" fill className="object-cover object-[48%_52%]" />
            </div>
            <div className="p-7 sm:p-9">
              <p className="eyebrow text-terracotta">Il dettaglio che si vede</p>
              <h3 className="mt-5 font-serif text-5xl leading-none">{nails.title}</h3>
              <p className="mt-6 max-w-xl leading-8 text-cocoa/70">{nails.text}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex text-sm font-bold text-terracotta underline-offset-8 group-hover:underline">
                Prenota
              </a>
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-x-10 border-y border-cocoa/16 py-4 md:grid-cols-2">
          {compactServices.map((service) => (
            <article key={service.title} className="grid gap-3 border-b border-cocoa/12 py-6 last:border-b-0 md:grid-cols-[0.34fr_0.66fr] md:even:translate-y-7">
              <h3 className="font-serif text-3xl leading-none">{service.title}</h3>
              <div>
                <p className="leading-7 text-cocoa/68">{service.text}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  Prenota
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Metodo() {
  const benefits = ["gambe più leggere", "manualità energica", "ritmo drenante", "risultato percepibile", "cura del post trattamento"];
  return (
    <section id="metodo" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-sage text-warm shadow-soft lg:grid-cols-[0.52fr_0.48fr]">
        <div className="relative min-h-[420px] lg:min-h-[680px]">
          <Image src="/images/editorial-spa.jpg" alt="Metodo Renata França trattamento corpo" fill className="object-cover object-[48%_45%]" />
        </div>
        <div className="p-8 sm:p-12 lg:p-16">
          <p className="eyebrow text-peach">Metodo Renata França</p>
          <h2 className="magazine-title mt-7 text-[clamp(3.8rem,7vw,7.2rem)]">Il trattamento che molte chiedono per nome.</h2>
          <p className="mt-7 leading-8 text-cream/80">
            Non viene raccontato come una magia. È un lavoro manuale intenso, preciso, fisico. Piace perché dopo il corpo sembra
            più sveglio, più drenato, più presente.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <span key={benefit} className="rounded-full border border-warm/18 px-4 py-3 text-sm text-cream/88">
                {benefit}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink variant="light">Prenota una consulenza</CtaLink>
          </div>
        </div>
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
            <Image src="/images/ama-nails-red.png" alt="Nail art rossa Ama Esthetique" fill className="object-cover object-[48%_55%]" />
          </div>
          <div className="image-soft absolute bottom-0 right-0 h-[48%] w-[62%]">
            <Image src="/images/editorial-facial.jpg" alt="Dettaglio trattamento viso" fill className="object-cover object-[52%_42%]" />
          </div>
        </ImageLift>
        <div>
          <p className="max-w-3xl font-serif text-[clamp(2.6rem,5.8vw,6.6rem)] leading-[0.94]">
            “Se una cliente viene da noi da dieci anni, non è perché non ha alternative.”
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-cocoa/72">
            È perché si sente riconosciuta. Sa che il colore non viene scelto di fretta, che una pelle sensibile viene trattata con
            cautela, che un uomo può entrare senza sentirsi fuori posto. Ama Esthetique vive lì: nella confidenza costruita un
            appuntamento alla volta.
          </p>
          <p className="mt-8 inline-block rotate-[-2deg] border-b border-terracotta pb-1 font-serif text-3xl italic text-terracotta">
            Andressa & Vanessa
          </p>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="recensioni" className="overflow-hidden bg-cocoa py-24 text-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow text-peach">Google Reviews 5/5</p>
          <h2 className="magazine-title mt-5 text-[clamp(3.4rem,7vw,8rem)]">Le frasi che restano dopo il trattamento.</h2>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-12">
          {reviews.map((review, index) => (
            <blockquote
              key={review.name}
              className={`${
                index === 0 || index === 1 ? "md:col-span-6" : index === 2 || index === 5 ? "md:col-span-7" : "md:col-span-5"
              } ${index === 3 ? "md:translate-y-14" : ""} ${index === 4 ? "md:-translate-y-4" : ""}`}
            >
              {index !== 2 && index !== 5 ? <p className="text-xs tracking-[0.26em] text-peach">★★★★★</p> : null}
              <p className={`${index < 2 ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"} mt-4 font-serif italic leading-[1.05] text-cream`}>
                “{review.quote}”
              </p>
              <cite className="mt-5 block text-sm not-italic text-cream/62">— {review.name}</cite>
            </blockquote>
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
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <p className="max-w-sm text-lg leading-8 text-cocoa/70">
            Dettagli reali e immagini di atmosfera, tenute volutamente come appunti visivi: mani, pelle, stanza, luce calda.
          </p>
          <h2 className="magazine-title text-[clamp(3.2rem,7vw,7.5rem)]">Non una gallery. Un tavolo di lavoro.</h2>
        </div>
        <div className="gallery-strip mt-14 flex gap-4 overflow-x-auto pb-5">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`image-soft relative shrink-0 ${
                index === 0 ? "h-[430px] w-[285px]" : index === 1 ? "mt-20 h-[340px] w-[300px]" : index === 2 ? "h-[500px] w-[360px]" : "mt-10 h-[300px] w-[280px]"
              }`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="360px" className="object-cover object-[50%_48%] transition duration-700 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contatti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.54fr_0.46fr]">
        <div>
          <p className="eyebrow text-terracotta">Busnago, Via Giovanni XXIII</p>
          <h2 className="magazine-title mt-5 max-w-4xl text-[clamp(3.2rem,7vw,7.4rem)]">
            Vieni con un’idea. Esci con un appuntamento già segnato.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink>Scrivici su WhatsApp</CtaLink>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/18 px-6 text-sm font-bold text-cocoa hover:border-terracotta">
              Apri su Google Maps
            </a>
            <a href="https://www.instagram.com/amaesthetique/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/18 px-6 text-sm font-bold text-cocoa hover:border-terracotta">
              Instagram
            </a>
          </div>
        </div>
        <div className="relative rounded-[1.2rem] border border-cocoa/18 bg-cream p-6 shadow-soft sm:p-9">
          <div className="absolute right-7 top-7 rotate-3 rounded-full border border-terracotta px-4 py-2 font-serif text-xl italic text-terracotta">
            menù
          </div>
          <p className="eyebrow text-terracotta">Ama Esthetique</p>
          <p className="mt-5 font-serif text-4xl leading-none">Via Giovanni XXIII, 17<br />20874 Busnago MB</p>
          <p className="mt-6 text-2xl font-semibold text-cocoa">327 222 7302</p>
          <div className="mt-8 columns-2 gap-8 border-y border-cocoa/15 py-5">
            {hours.map(([day, time]) => (
              <p key={day} className="mb-3 break-inside-avoid text-sm">
                <span className="block font-semibold">{day}</span>
                <span className="text-cocoa/62">{time}</span>
              </p>
            ))}
          </div>
          <p className="mt-6 font-serif text-2xl italic leading-tight text-cocoa/72">
            Appuntamenti da lunedì a sabato. La domenica si lascia respirare l’agenda.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-terracotta px-7 py-16 text-warm sm:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
          <div>
            <h2 className="magazine-title text-[clamp(3.6rem,7vw,8rem)]">Prenditi un momento per te.</h2>
            <p className="mt-7 max-w-2xl leading-8 text-cream/82">
              Mani, viso, corpo o semplicemente quel trattamento che rimandi da troppo: scrivi, racconta cosa ti serve e lasciati
              guidare.
            </p>
          </div>
          <CtaLink variant="light">Prenota su WhatsApp</CtaLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa/12 px-4 py-10 text-sm text-cocoa/68 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl text-cocoa">
            Ama <span className="italic text-terracotta">Esthetique</span>
          </p>
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
