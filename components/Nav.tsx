"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 ${scrolled
          ? "bg-ink-950/96 backdrop-blur-md border-b border-ink-800"
          : "bg-linear-to-b from-ink-950/95 to-transparent"
        }`}
    >
      <Link
        href="/"
        className="font-cinzel font-bold text-xl md:text-2xl tracking-[0.18em] text-ember-500 no-underline"
        id="nav-logo-brand"
      >
        FORGE
      </Link>
      <ul className="hidden md:flex gap-10 list-none">
        <li>
          <Link
            href="#how"
            className="font-cinzel text-xs tracking-[0.2em] text-text-muted hover:text-ember-300 no-underline uppercase transition-colors duration-300"
            id="nav-link-method"
          >
            The Method
          </Link>
        </li>
        <li>
          <Link
            href="#phases"
            className="font-cinzel text-xs tracking-[0.2em] text-text-muted hover:text-ember-300 no-underline uppercase transition-colors duration-300"
            id="nav-link-phases"
          >
            90 Days
          </Link>
        </li>
        <li>
          <Link
            href="#download"
            className="font-cinzel text-xs tracking-[0.2em] text-text-muted hover:text-ember-300 no-underline uppercase transition-colors duration-300"
            id="nav-link-download"
          >
            Download
          </Link>
        </li>
      </ul>
      <Link
        href="#download"
        className="font-cinzel text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-ember-600 text-ember-400 no-underline hover:bg-ember-700/50 hover:border-ember-500 hover:text-ember-300 transition-all duration-300 bg-transparent"
        id="nav-btn-begin"
      >
        Begin
      </Link>
    </nav>
  );
}
