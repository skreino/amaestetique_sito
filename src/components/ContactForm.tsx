"use client";

import { FormEvent, useState } from "react";
import { whatsappBaseUrl } from "@/lib/data";

const treatments = [
  "Nails",
  "Trattamenti viso",
  "Trattamenti corpo",
  "Metodo Renata França",
  "Pedicure",
  "Dermopigmentazione",
  "Cura dello sguardo",
  "Estetica avanzata"
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: treatments[0],
    message: ""
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Ciao Ama Esthetique, sono ${form.name || "[Nome]"}. Vorrei informazioni su ${form.treatment}. Il mio numero è ${
      form.phone || "[Telefono]"
    }. Messaggio: ${form.message || "[Messaggio]"}`;
    window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "min-h-12 rounded-full border border-cocoa/14 bg-cream px-4 text-base font-medium normal-case tracking-normal text-cocoa outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/18";

  return (
    <form onSubmit={submitRequest} className="grid gap-3 rounded-[1.4rem] border border-cocoa/12 bg-warm p-5 shadow-soft sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/62">
          Nome
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClass}
            placeholder="Il tuo nome"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/62">
          Telefono
          <input
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClass}
            placeholder="327..."
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/62">
        Trattamento di interesse
        <select value={form.treatment} onChange={(event) => updateField("treatment", event.target.value)} className={fieldClass}>
          {treatments.map((treatment) => (
            <option key={treatment}>{treatment}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/62">
        Messaggio
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-28 resize-none rounded-[1.2rem] border border-cocoa/14 bg-cream p-4 text-base font-medium normal-case tracking-normal text-cocoa outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/18"
          placeholder="Raccontaci cosa vorresti fare"
        />
      </label>
      <button
        type="submit"
        className="mt-2 min-h-12 rounded-full bg-terracotta px-6 text-xs font-extrabold uppercase tracking-[0.14em] text-warm transition hover:bg-burnt focus:outline-none focus:ring-2 focus:ring-terracotta/35 focus:ring-offset-2 focus:ring-offset-warm"
      >
        Invia richiesta
      </button>
    </form>
  );
}
