"use client";

import { useState } from "react";
import { navItems, whatsappUrl } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto flex h-[58px] max-w-7xl items-stretch overflow-hidden rounded-2xl border border-cocoa bg-warm/92 shadow-[0_18px_50px_rgba(53,35,28,0.08)] backdrop-blur-xl">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 border-r border-cocoa px-5 font-sans text-xs font-extrabold uppercase tracking-[0.22em] text-cocoa sm:px-6"
        >
          <span className="size-2.5 rounded-full bg-terracotta" />
          Ama
        </a>

        <div className="hidden flex-1 items-stretch lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-label={item.label}
              className="nav-flip grid min-w-[116px] place-items-center border-r border-cocoa px-5 text-[0.72rem] font-bold uppercase tracking-[0.11em] text-cocoa"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="ml-auto hidden min-w-[176px] items-center justify-center bg-terracotta px-6 text-[0.72rem] font-extrabold uppercase tracking-[0.13em] text-warm transition hover:bg-burnt md:flex"
        >
          Prenota ora
        </a>

        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid w-[58px] place-items-center border-l border-cocoa text-cocoa lg:hidden"
        >
          <span className="space-y-1.5">
            <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-cocoa bg-warm shadow-soft lg:hidden">
          <div className="grid">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cocoa/18 px-5 py-4 font-serif text-3xl leading-none text-cocoa transition hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-terracotta px-5 py-4 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-warm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
