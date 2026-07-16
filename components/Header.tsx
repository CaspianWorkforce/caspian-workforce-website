"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["For Employers", "/employers"],
  ["For Job Seekers", "/job-seekers"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="header-brand"
          aria-label="Caspian Workforce Group home"
          onClick={() => setOpen(false)}
        >
          <span className="header-brand-symbol">
            <Image
              src="/brand-globe.png"
              alt=""
              width={260}
              height={150}
              priority
              className="header-brand-globe"
            />

            <small>TRUST. PARTNERSHIP. RESULTS.</small>
          </span>

          <span className="header-brand-divider" />

          <span className="header-brand-name">
            <strong>CASPIAN</strong>
            <span>WORKFORCE GROUP</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {nav.map(([title, href]) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="button button-gold header-cta"
        >
          Contact Our Team
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {nav.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}

          <Link
            href="/contact"
            className="button button-gold mobile-contact-button"
            onClick={() => setOpen(false)}
          >
            Contact Our Team
          </Link>
        </nav>
      )}
    </header>
  );
}
