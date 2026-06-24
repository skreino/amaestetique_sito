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
      className={`editorial-button inline-flex items-center justify-center text-xs font-bold transition ${
        variant === "light"
          ? "bg-warm text-cocoa hover:bg-cream"
          : "bg-cocoa text-warm hover:bg-terracotta"
      }`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cocoa px-4 pb-16 pt-24 text-warm sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:min-h-[820px] lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
        <Reveal className="relative z-10 pb-0 lg:pb-16">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-cream/70">
            <span>Beauty Studio · Busnago</span>
            <span className="h-px w-14 bg-peach/60" />
            <span>Google Reviews 5/5</span>
          </div>
          <h1 className="magazine-title text-[clamp(5.8rem,17vw,15rem)] leading-[0.78]">
            Ama<br />
            <span className="italic text-peach">Esthetique</span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-[clamp(2.4rem,5vw,5.5rem)] italic leading-[0.95] text-cream">
            La bellezza che si prende il suo tempo.
          </p>
          <p className="mt-7 max-w-lg text-base leading-8 text-cream/72">
            Mani, viso, corpo e sguardo lavorati con una calma rara: quella di chi conosce le clienti per nome, e spesso da anni.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink variant="light">Prenota su WhatsApp</CtaLink>
            <a
              href="#trattamenti"
              className="editorial-button inline-flex items-center justify-center border border-cream/24 text-xs font-bold uppercase tracking-[0.08em] text-cream hover:border-peach"
            >
              Trattamenti
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-2 gap-4 border-t border-cream/18 pt-5 text-sm text-cream/68">
            <p>Via Giovanni XXIII, 17</p>
            <p>Lun-Sab · 09-20</p>
          </div>
        </Reveal>

        <div className="relative min-h-[620px] lg:min-h-[760px]">
          <ImageLift className="image-soft absolute right-0 top-0 h-[72%] w-[82%]">
            <Image
              src="/images/ama-nails-soft.png"
              alt="Manicure nude Ama Esthetique"
              fill
              priority
              className="object-cover object-[46%_40%]"
            />
          </ImageLift>
          <ImageLift className="image-soft absolute bottom-8 left-0 h-[42%] w-[52%]" delay={0.08}>
            <Image src="/images/ama-nails-red.png" alt="Nail art Ama Esthetique" fill className="object-cover object-[48%_52%]" />
          </ImageLift>
          <ImageLift className="image-soft absolute bottom-0 right-[4%] h-[34%] w-[36%]" delay={0.14}>
            <Image src="/images/editorial-facial.jpg" alt="Trattamento viso caldo" fill className="object-cover object-[54%_42%]" />
          </ImageLift>
          <div className="absolute right-[18%] top-[62%] grid size-28 place-items-center rounded-full bg-terracotta text-center font-serif text-2xl italic leading-none text-warm shadow-soft">
            5/5
            <span className="block font-sans text-[0.58rem] uppercase tracking-[0.18em]">Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section-pad overflow-hidden bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="relative min-h-[420px]">
          <span className="font-serif text-[11rem] italic leading-none text-terracotta/45">01</span>
          <div className="image-soft absolute bottom-2 left-8 h-72 w-52 rotate-[-3deg] sm:left-16">
            <Image src="/images/editorial-interior.jpg" alt="Atmosfera boutique beauty studio" fill className="object-cover object-[55%_50%]" />
          </div>
        </div>
        <div className="pt-6 lg:pt-16">
          <p className="font-serif text-[clamp(3.2rem,8vw,9.2rem)] leading-[0.9] text-cocoa">
            Si torna dove ci si sente <span className="italic text-terracotta">viste</span>, non solo servite.
          </p>
          <p className="mt-9 max-w-3xl text-xl leading-10 text-cocoa/72">
            Da Ama Esthetique il trattamento parte dall'ascolto e dal mestiere: mani precise, viso letto con cautela, corpo
            seguito senza fretta. Le recensioni parlano di dieci e vent'anni di fiducia: e questa è la parte più concreta del brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="trattamenti" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <h2 className="magazine-title text-[clamp(4rem,10vw,11rem)]">
            Trattamenti, <span className="italic text-terracotta">senza rumore.</span>
          </h2>
          <p className="max-w-md text-lg leading-8 text-cocoa/70">
            Una lista essenziale, come in uno studio boutique: pochi titoli, molta mano, una consulenza prima del gesto.
          </p>
        </div>

        <div className="mt-14 border-t border-cocoa/18">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid gap-5 border-b border-cocoa/18 py-7 transition hover:bg-warm/70 sm:grid-cols-[0.18fr_0.32fr_0.38fr_0.12fr] sm:items-center sm:px-4"
            >
              <span className="font-serif text-[clamp(3.6rem,8vw,7.2rem)] italic leading-none text-terracotta/55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-[clamp(2.2rem,4vw,4.8rem)] leading-none text-cocoa">{service.title}</h3>
              <p className="max-w-xl leading-8 text-cocoa/68">{service.text}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="justify-self-start text-xs font-bold uppercase tracking-[0.18em] text-terracotta underline-offset-8 group-hover:underline sm:justify-self-end"
              >
                Prenota
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Metodo() {
  return (
    <section id="metodo" className="overflow-hidden bg-sage px-4 py-20 text-warm sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div>
          <p className="eyebrow text-peach">Metodo Renata França</p>
          <h2 className="magazine-title mt-7 text-[clamp(4rem,9vw,10rem)]">
            Manualità intensa. <span className="italic text-peach">Corpo più leggero.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-cream/78">
            Il trattamento drenante e modellante viene raccontato con poche parole perché il resto si capisce sul lettino: ritmo,
            pressione, ascolto del corpo e cura del dopo.
          </p>
          <div className="mt-9">
            <CtaLink variant="light">Prenota una consulenza</CtaLink>
          </div>
        </div>
        <div className="relative min-h-[620px]">
          <div className="image-soft absolute left-0 top-0 h-[72%] w-[70%]">
            <Image src="/images/editorial-spa.jpg" alt="Metodo Renata França trattamento corpo" fill className="object-cover object-[48%_44%]" />
          </div>
          <div className="image-soft absolute bottom-0 right-0 h-[42%] w-[48%]">
            <Image src="/images/editorial-facial.jpg" alt="Dettaglio trattamento viso" fill className="object-cover object-[54%_42%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <p className="font-serif text-[clamp(3.4rem,8.5vw,9rem)] leading-[0.9] text-cocoa">
          “Sono ormai 10 anni che vengo da Andressa e Vanessa.”
        </p>
        <div className="relative min-h-[520px]">
          <div className="image-soft absolute right-0 top-0 h-[60%] w-[72%] rotate-1">
            <Image src="/images/ama-nails-red.png" alt="Nail art rossa Ama Esthetique" fill className="object-cover object-[48%_55%]" />
          </div>
          <p className="absolute bottom-10 left-0 max-w-sm bg-cream p-7 font-serif text-3xl italic leading-tight shadow-soft">
            Non una frase da brochure: una recensione reale, e il tipo di fedeltà che uno studio si guadagna solo lavorando bene.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const featured = reviews.slice(0, 3);
  const rest = reviews.slice(3);

  return (
    <section id="recensioni" className="overflow-hidden bg-cocoa py-24 text-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-peach">Google Reviews 5/5</p>
            <h2 className="magazine-title mt-5 max-w-5xl text-[clamp(4rem,9vw,10rem)]">
              Le prove sociali non sono badge. Sono anni.
            </h2>
          </div>
          <div className="rounded-full border border-peach/40 px-6 py-4 font-serif text-3xl italic text-peach">5/5</div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featured.map((review, index) => (
            <blockquote key={review.name} className={`${index === 1 ? "lg:mt-20" : ""} border-t border-cream/20 pt-7`}>
              <p className="text-xs uppercase tracking-[0.24em] text-peach">{index === 0 ? "20 anni" : index === 1 ? "10 anni" : "Mai più senza"}</p>
              <p className="mt-5 font-serif text-[clamp(2.4rem,4vw,4.4rem)] italic leading-[0.98] text-cream">“{review.quote}”</p>
              <cite className="mt-6 block text-sm not-italic text-cream/60">— {review.name}</cite>
            </blockquote>
          ))}
        </div>

        <div className="gallery-strip mt-14 flex gap-5 overflow-x-auto pb-4">
          {rest.map((review) => (
            <blockquote key={review.name} className="w-[310px] shrink-0 border-l border-peach/45 pl-5 sm:w-[390px]">
              <p className="font-serif text-3xl italic leading-tight text-cream/92">“{review.quote}”</p>
              <cite className="mt-5 block text-sm not-italic text-cream/55">— {review.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section-pad overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <h2 className="magazine-title text-[clamp(4rem,9vw,10rem)]">
            Dettagli di mani, pelle, luce.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-cocoa/68">
            Un collage volutamente imperfetto, più vicino a una pagina di magazine che a una gallery ordinata.
          </p>
        </div>
        <div className="relative mt-16 min-h-[760px] lg:min-h-[860px]">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`image-soft absolute ${
                index === 0
                  ? "left-0 top-0 h-[430px] w-[58%] sm:w-[34%]"
                  : index === 1
                    ? "right-0 top-14 h-[370px] w-[52%] sm:w-[31%]"
                    : index === 2
                      ? "left-[18%] top-[380px] h-[420px] w-[64%] sm:left-[30%] sm:w-[30%]"
                      : index === 3
                        ? "bottom-0 left-0 h-[300px] w-[42%] sm:w-[24%]"
                        : "bottom-10 right-[4%] h-[330px] w-[46%] sm:w-[27%]"
              }`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="420px" className="object-cover object-[50%_48%]" />
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_0.42fr]">
        <div>
          <p className="eyebrow text-terracotta">Contatti</p>
          <h2 className="magazine-title mt-5 text-[clamp(4rem,9vw,9.5rem)]">
            Prenota il tuo momento da Ama.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cocoa/70">
            Scrivi su WhatsApp, racconta cosa vuoi fare e lascia che ti indirizzino verso il trattamento giusto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink>Prenota su WhatsApp</CtaLink>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="editorial-button inline-flex items-center justify-center border border-cocoa/22 text-xs font-bold uppercase tracking-[0.08em] text-cocoa hover:border-terracotta"
            >
              Apri su Google Maps
            </a>
          </div>
        </div>
        <div className="bg-cocoa p-7 text-warm shadow-soft sm:p-9">
          <p className="eyebrow text-peach">Ama Esthetique</p>
          <p className="mt-5 font-serif text-4xl leading-none">Via Giovanni XXIII, 17<br />20874 Busnago MB</p>
          <p className="mt-6 text-2xl font-semibold">327 222 7302</p>
          <div className="mt-8 border-y border-cream/18 py-5">
            {hours.map(([day, time]) => (
              <p key={day} className="flex justify-between gap-5 border-b border-cream/10 py-2 text-sm last:border-b-0">
                <span>{day}</span>
                <span className="font-semibold text-peach">{time}</span>
              </p>
            ))}
          </div>
          <a
            href="https://www.instagram.com/amaesthetique/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex text-sm font-bold uppercase tracking-[0.16em] text-peach"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-terracotta px-4 py-20 text-warm sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
        <div>
          <h2 className="magazine-title text-[clamp(4.5rem,10vw,11rem)]">Prenditi tempo.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/82">
            Per una manicure precisa, un viso più luminoso, il Metodo Renata França o un trattamento corpo: il primo gesto è
            scrivere.
          </p>
        </div>
        <CtaLink variant="light">Prenota su WhatsApp</CtaLink>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa/12 bg-warm px-4 py-10 text-sm text-cocoa/68 sm:px-6 lg:px-8">
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

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Prenota su WhatsApp"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-sage px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-warm shadow-soft transition hover:bg-terracotta"
    >
      WhatsApp
    </a>
  );
}
