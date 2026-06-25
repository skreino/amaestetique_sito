import Image from "next/image";
import { gallery, hours, reviews, services, whatsappUrl } from "@/lib/data";
import { ImageLift, Reveal } from "./Motion";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Via%20Giovanni%20XXIII%2017%2020874%20Busnago%20MB";

const heroImages = [...gallery, ...gallery];

const whyItems = [
  {
    title: "Team esperto e accogliente",
    text: "Andressa, Vanessa e Martina tornano spesso nelle recensioni: non come nomi messi in pagina, ma come persone ricordate."
  },
  {
    title: "Clienti fidelizzate da anni",
    text: "Dieci anni, vent'anni, mai più senza: la fiducia qui non è una promessa, è una traccia lasciata dalle clienti."
  },
  {
    title: "Risultati curati e naturali",
    text: "Mani, viso, corpo e sguardo vengono trattati con misura, senza forzare lo stile della persona."
  },
  {
    title: "Ambiente rilassante e professionale",
    text: "Un ritmo caldo e preciso: il tempo giusto per ascoltare, lavorare bene e far uscire ogni dettaglio pulito."
  }
];

function CtaLink({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`editorial-button inline-flex items-center justify-center text-xs font-extrabold transition ${
        variant === "light"
          ? "bg-warm text-cocoa hover:bg-cream"
          : "bg-terracotta text-warm hover:bg-burnt"
      }`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-warm pb-16 pt-24">
      <div className="overflow-hidden border-y border-cocoa/18 bg-cream py-3">
        <div className="hero-carousel flex gap-3 px-3">
          {heroImages.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className={`relative shrink-0 overflow-hidden rounded-2xl border border-cocoa/10 bg-sand ${
                index % 3 === 1 ? "h-[220px] w-[310px] sm:h-[260px] sm:w-[410px]" : "h-[220px] w-[260px] sm:h-[260px] sm:w-[350px]"
              }`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="420px" priority={index < 3} className="object-cover object-[50%_48%]" />
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1460px] gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[0.43fr_0.57fr] lg:gap-16 lg:pt-14">
        <Reveal className="lg:pt-4">
          <p className="eyebrow text-terracotta">Beauty studio · Busnago</p>
          <h1 className="magazine-title mt-6 text-[clamp(5.4rem,14vw,14rem)] leading-[0.8] text-cocoa">
            Ama<br />
            <span className="italic text-terracotta">Esthetique</span>
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink>Prenota su WhatsApp</CtaLink>
            <a
              href="#trattamenti"
              className="editorial-button inline-flex items-center justify-center border border-cocoa text-xs font-extrabold uppercase tracking-[0.1em] text-cocoa transition hover:bg-cocoa hover:text-warm"
            >
              Scopri i trattamenti
            </a>
          </div>
        </Reveal>

        <Reveal className="grid content-end gap-8 lg:pb-4" delay={0.08}>
          <p className="max-w-4xl font-serif text-[clamp(3rem,6.7vw,8.3rem)] italic leading-[0.92] text-cocoa">
            La bellezza che si prende il suo tempo.
          </p>
          <div className="grid gap-7 border-t border-cocoa/18 pt-7 md:grid-cols-[0.65fr_0.35fr]">
            <p className="max-w-2xl text-lg leading-9 text-cocoa/72">
              Un centro estetico a Busnago dove manualità, precisione e cura si incontrano in trattamenti pensati per farti
              sentire bene, dentro e fuori.
            </p>
            <div className="grid gap-3 text-sm text-cocoa/70">
              <p className="border-b border-cocoa/12 pb-3">Lun-Sab · 09-20</p>
              <p className="border-b border-cocoa/12 pb-3">Via Giovanni XXIII, 17</p>
              <p className="font-semibold text-terracotta">Google Reviews · 5/5</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section-pad overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="relative min-h-[430px]">
          <span className="font-serif text-[12rem] italic leading-none text-terracotta/55">01</span>
          <div className="image-soft absolute bottom-0 left-8 h-80 w-56 rotate-[-3deg] border border-cocoa/12 sm:left-20">
            <Image src="/images/editorial-interior.jpg" alt="Atmosfera boutique beauty studio" fill className="object-cover object-[55%_50%]" />
          </div>
        </div>
        <div className="lg:pt-16">
          <h2 className="magazine-title max-w-5xl text-[clamp(3.6rem,8.4vw,9.2rem)] text-cocoa">
            Un centro estetico dove ogni dettaglio <span className="italic text-terracotta">parla di cura.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-10 text-cocoa/72">
            Da Ama Esthetique ogni trattamento parte dall'ascolto. Che si tratti di mani, viso, corpo o dermopigmentazione,
            l'obiettivo è valorizzare la persona con risultati curati, naturali e coerenti con il suo stile.
          </p>
          <div className="mt-10 grid gap-4 border-y border-cocoa/16 py-6 text-sm uppercase tracking-[0.16em] text-cocoa/70 md:grid-cols-3">
            <p>Precisione nei dettagli</p>
            <p>Trattamenti personalizzati</p>
            <p>Ambiente caldo e professionale</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="trattamenti" className="section-pad bg-warm px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
          <h2 className="magazine-title text-[clamp(3.8rem,9vw,10.5rem)] text-cocoa">
            Trattamenti pensati per valorizzarti, <span className="italic text-terracotta">non per cambiarti.</span>
          </h2>
          <p className="max-w-md text-lg leading-8 text-cocoa/68">
            Una lista editoriale, diretta: linee sottili, numeri grandi, micro azioni. Il gesto resta protagonista.
          </p>
        </div>

        <div className="mt-16 border-t border-cocoa/18">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid gap-5 border-b border-cocoa/18 py-7 transition duration-500 hover:bg-[#F3DDC9]/60 sm:grid-cols-[0.18fr_0.28fr_0.42fr_0.12fr] sm:items-center sm:px-4"
            >
              <span className="font-serif text-[clamp(3.8rem,8vw,7rem)] italic leading-none text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-[clamp(2.25rem,4vw,4.8rem)] leading-none text-cocoa transition group-hover:text-burnt">
                {service.title}
              </h3>
              <p className="max-w-xl leading-8 text-cocoa/68">{service.text}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="justify-self-start text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta underline-offset-8 group-hover:underline sm:justify-self-end"
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
  const benefits = [
    "Sensazione di leggerezza",
    "Effetto drenante",
    "Corpo più definito",
    "Manualità professionale",
    "Esperienza intensa ma rilassante"
  ];

  return (
    <section id="metodo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-terracotta text-warm shadow-editorial lg:grid-cols-[0.48fr_0.52fr]">
        <div className="p-8 sm:p-12 lg:p-16">
          <p className="eyebrow text-cream">Metodo Renata França</p>
          <h2 className="magazine-title mt-7 text-[clamp(4rem,8vw,8.6rem)]">
            Leggerezza, definizione e benessere <span className="italic text-peach">in un trattamento iconico.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-cream/86">
            Un trattamento manuale conosciuto per il suo approccio drenante e modellante. Ideale per chi desidera sentirsi più
            leggera, migliorare la percezione del corpo e concedersi un momento di cura profonda.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <span key={benefit} className="rounded-full border border-warm/28 px-4 py-3 text-sm text-cream/90">
                {benefit}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink variant="light">Prenota una consulenza</CtaLink>
          </div>
        </div>
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <Image src="/images/editorial-spa.jpg" alt="Metodo Renata França trattamento corpo" fill className="object-cover object-[48%_44%]" />
          <div className="absolute bottom-8 left-8 hidden max-w-xs bg-warm p-6 font-serif text-3xl italic leading-none text-cocoa shadow-soft sm:block">
            manualità intensa, ritmo drenante, cura del dopo
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-terracotta">Perché sceglierci</p>
          <h2 className="magazine-title mt-5 text-[clamp(3.6rem,7vw,8rem)] text-cocoa">
            Non solo estetica. <span className="italic text-terracotta">Un posto dove tornare.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-cocoa/68">
            Le recensioni raccontano una cosa chiara: chi entra da Ama Esthetique non cerca solo un trattamento, ma persone di cui
            fidarsi.
          </p>
        </div>
        <div className="grid gap-4">
          {whyItems.map((item, index) => (
            <article
              key={item.title}
              className="group grid min-h-[128px] overflow-hidden border border-cocoa bg-warm transition-all duration-500 hover:min-h-[260px] hover:bg-cocoa hover:text-warm md:grid-cols-[0.22fr_0.78fr]"
            >
              <div className="grid place-items-start border-b border-cocoa p-6 font-serif text-6xl italic text-terracotta group-hover:border-warm/20 group-hover:text-peach md:border-b-0 md:border-r">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-4xl leading-none">{item.title}</h3>
                <p className="mt-5 max-w-2xl leading-8 text-cocoa/70 opacity-100 transition group-hover:text-cream/82 md:opacity-0 md:group-hover:opacity-100">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
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
            <p className="eyebrow text-peach">Google Reviews · 5/5</p>
            <h2 className="magazine-title mt-5 max-w-5xl text-[clamp(4rem,9vw,10rem)]">
              Le parole di chi ci sceglie.
            </h2>
          </div>
          <div className="rounded-full border border-peach/40 px-6 py-4 font-serif text-3xl italic text-peach">5/5</div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featured.map((review, index) => (
            <blockquote key={review.name} className={`${index === 1 ? "lg:mt-20" : ""} border-t border-cream/20 pt-7`}>
              <p className="text-xs uppercase tracking-[0.24em] text-peach">
                {index === 0 ? "Conosco le ragazze da 20 anni" : index === 1 ? "Vengo da 10 anni" : "Mai più senza Vanessa"}
              </p>
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
          <h2 className="magazine-title text-[clamp(4rem,9vw,10rem)] text-cocoa">
            Momenti di bellezza, dettagli di cura.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-cocoa/68">
            Un collage beauty magazine: verticali e orizzontali alternati, crop ravvicinati, luce calda e dettagli reali.
          </p>
        </div>
        <div className="relative mt-16 min-h-[760px] lg:min-h-[860px]">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`image-soft absolute border border-cocoa/10 transition duration-700 hover:scale-[1.025] ${
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
          <p className="eyebrow text-terracotta">Orari e contatti</p>
          <h2 className="magazine-title mt-5 text-[clamp(3.7rem,8vw,9rem)] text-cocoa">
            Prenota il tuo momento da Ama Esthetique.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cocoa/70">
            WhatsApp è il modo più diretto: scrivi cosa desideri fare e lasciati guidare verso il trattamento giusto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink>Scrivici su WhatsApp</CtaLink>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="editorial-button inline-flex items-center justify-center border border-cocoa text-xs font-extrabold uppercase tracking-[0.1em] text-cocoa transition hover:bg-cocoa hover:text-warm"
            >
              Apri su Google Maps
            </a>
            <a
              href="https://www.instagram.com/amaesthetique/"
              target="_blank"
              rel="noreferrer"
              className="editorial-button inline-flex items-center justify-center border border-cocoa text-xs font-extrabold uppercase tracking-[0.1em] text-cocoa transition hover:bg-cocoa hover:text-warm"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="border border-cocoa bg-cocoa p-7 text-warm shadow-soft sm:p-9">
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
          <p className="mt-7 font-serif text-2xl italic leading-tight text-cream/82">
            Aperto dal lunedì al sabato. Domenica chiuso.
          </p>
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
          <h2 className="magazine-title text-[clamp(4.2rem,9vw,10rem)]">Prenditi un momento per te.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/82">
            Che tu voglia curare le mani, concederti un trattamento corpo, migliorare la pelle o semplicemente ritagliarti un
            momento di benessere, Ama Esthetique ti accoglie con attenzione, precisione e calore.
          </p>
        </div>
        <CtaLink variant="light">Prenota su WhatsApp</CtaLink>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa bg-cocoa px-4 py-10 text-sm text-cream/72 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl text-warm">
            Ama <span className="italic text-peach">Esthetique</span>
          </p>
          <p>Beauty Studio · Busnago</p>
        </div>
        <p>Via Giovanni XXIII, 17 · 327 222 7302 · Lun-Sab 09-20</p>
        <a href="https://www.instagram.com/amaesthetique/" target="_blank" rel="noreferrer" className="font-bold text-peach">
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
      className="fixed bottom-4 right-4 z-50 rounded-full bg-terracotta px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-warm shadow-soft transition hover:bg-burnt"
    >
      WhatsApp
    </a>
  );
}
