"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/blogs", label: "Latest News" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-(--foreground) transition hover:opacity-90"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/rightcarelogo.png"
            alt="Right Haven For Care logo"
            width={136}
            height={136}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-(--border) sm:h-14 sm:w-14"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="text-base font-semibold tracking-tight sm:text-lg">
              Right Haven For Care
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-(--brand)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:07368461829"
            className="inline-flex items-center gap-2 rounded-full bg-(--brand) px-3 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(12,119,111,0.95)] transition hover:bg-(--brand-dark) sm:px-4"
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
            <span>07368 461829</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-white text-slate-800 transition hover:border-(--brand) hover:text-(--brand) lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={2.2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-(--border) bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-(--accent) hover:text-(--brand)"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
