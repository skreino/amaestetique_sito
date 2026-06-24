"use client";

import { useState } from "react";
import { navItems, whatsappUrl } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cocoa/10 bg-warm/76 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-serif text-2xl font-semibold tracking-normal text-cocoa">
          Ama <span className="italic text-terracotta">Esthetique</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-cocoa/72 transition hover:text-terracotta">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-cocoa px-5 py-2.5 text-sm font-semibold text-warm transition hover:bg-terracotta md:inline-flex"
        >
          Prenota ora
        </a>
        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-cocoa/15 text-cocoa lg:hidden"
        >
          <span className="space-y-1.5">
            <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      {open ? (
        <div className="border-t border-cocoa/10 bg-warm px-4 pb-5 pt-2 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 font-serif text-2xl text-cocoa transition hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-terracotta px-5 py-3 text-center text-sm font-bold text-warm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
