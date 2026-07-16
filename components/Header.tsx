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
          className="brand brand-image-link"
          aria-label="Caspian Workforce Group home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-horizontal.png"
            alt="Caspian Workforce Group"
            width={620}
            height={420}
            priority
            className="header-logo-image"
          />
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
