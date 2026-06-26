"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

const instagramUrl = "https://www.instagram.com/amaesthetique/";
const leftNavItems = navItems.slice(0, 3);
const rightNavItems = navItems.slice(3);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 18);

      const visible = navItems
        .map((item) => {
          const element = document.querySelector(item.href);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return { href: item.href, visible: rect.top <= 150 && rect.bottom >= 150 };
        })
        .filter(Boolean)
        .find((item) => item?.visible);

      if (visible) setActiveSection(visible.href);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Navigazione principale"
        className={`relative mx-auto flex max-w-[1120px] items-center rounded-full border border-warm/35 bg-terracotta px-2 text-warm shadow-[0_18px_42px_rgba(53,35,28,0.14)] transition-all duration-300 ${
          scrolled ? "h-[56px] bg-burnt/96 sm:h-[58px]" : "h-[60px] bg-terracotta sm:h-[66px]"
        }`}
      >
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Ama Esthetique home"
          className={`absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[1.35rem] border border-cocoa/20 bg-warm px-7 py-2 text-center text-cocoa shadow-[0_8px_0_rgba(53,35,28,0.22)] outline-none transition hover:rotate-0 focus-visible:ring-2 focus-visible:ring-warm/80 lg:block ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <span className="block font-serif text-[2rem] italic leading-[0.82] tracking-[-0.02em]">Ama</span>
          <span className="block text-[0.56rem] font-extrabold uppercase tracking-[0.22em] text-terracotta">Esthetique</span>
        </a>

        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-full px-2 py-2 outline-none focus-visible:ring-2 focus-visible:ring-warm/80 sm:px-3 lg:hidden"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-warm font-serif text-2xl italic text-terracotta sm:size-10">A</span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-serif text-[1.2rem] text-warm sm:text-[1.35rem]">Ama Esthetique</span>
            <span className="mt-1 block truncate text-[0.52rem] font-bold uppercase tracking-[0.14em] text-warm/70 sm:text-[0.56rem] sm:tracking-[0.16em]">
              Beauty Studio · Busnago
            </span>
          </span>
        </a>

        <div className="hidden h-full flex-1 items-center justify-between lg:flex">
          <div className="flex h-full min-w-0 flex-1 items-center justify-start gap-1">
            {leftNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`inline-flex h-11 items-center rounded-full px-5 font-serif text-[1.02rem] outline-none transition focus-visible:ring-2 focus-visible:ring-warm/75 ${
                  activeSection === item.href ? "bg-warm text-cocoa shadow-[0_2px_0_rgba(53,35,28,0.2)]" : "text-warm/88 hover:bg-warm/14 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div aria-hidden="true" className="w-[220px] shrink-0" />

          <div className="flex h-full min-w-0 flex-1 items-center justify-end gap-1">
            {rightNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`inline-flex h-11 items-center rounded-full px-5 font-serif text-[1.02rem] outline-none transition focus-visible:ring-2 focus-visible:ring-warm/75 ${
                  activeSection === item.href ? "bg-warm text-cocoa shadow-[0_2px_0_rgba(53,35,28,0.2)]" : "text-warm/88 hover:bg-warm/14 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="ml-2 hidden items-center gap-2 xl:flex">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-warm/70 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-warm/75"
          >
            Instagram
          </a>
          <a
            href="#contatti"
            className="inline-flex h-11 items-center justify-center rounded-full bg-warm px-5 text-[0.72rem] font-extrabold uppercase tracking-[0.13em] text-cocoa shadow-[0_3px_0_rgba(53,35,28,0.18)] outline-none transition hover:bg-cream focus-visible:ring-2 focus-visible:ring-warm/75"
          >
            Prenota
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-full bg-warm text-cocoa shadow-[0_2px_0_rgba(53,35,28,0.18)] outline-none transition hover:bg-cream focus-visible:ring-2 focus-visible:ring-warm/80 lg:hidden"
        >
          <span className="space-y-1.5" aria-hidden="true">
            <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] max-w-[1120px] overflow-y-auto overscroll-contain rounded-[1.45rem] border border-cocoa/10 bg-warm shadow-[0_24px_70px_rgba(53,35,28,0.14)] lg:hidden"
        >
          <div className="bg-terracotta px-5 py-4 text-warm">
            <p className="font-serif text-4xl italic leading-none">Ama</p>
            <p className="mt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-warm/74">Esthetique · Busnago</p>
          </div>
          <div className="grid px-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`min-h-12 rounded-full px-5 py-3 font-serif text-[1.75rem] leading-none outline-none transition focus-visible:ring-2 focus-visible:ring-terracotta/35 ${
                  activeSection === item.href ? "bg-terracotta text-warm" : "text-cocoa hover:bg-cream"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="grid gap-3 border-t border-cocoa/10 p-4">
            <a
              href="#contatti"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-5 text-xs font-extrabold uppercase tracking-[0.16em] text-warm outline-none transition hover:bg-burnt focus-visible:ring-2 focus-visible:ring-terracotta/40"
            >
              Prenota
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-cocoa/12 px-5 text-xs font-extrabold uppercase tracking-[0.16em] text-cocoa outline-none transition hover:border-terracotta hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/35"
            >
              Instagram
            </a>
            <div className="grid gap-1 px-1 pt-2 text-sm leading-6 text-cocoa/62">
              <p>Via Giovanni XXIII, 17 · Busnago</p>
              <p className="font-bold text-cocoa">327 222 7302</p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
