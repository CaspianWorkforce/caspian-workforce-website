"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["For Employers", "/employers"],
  ["For Job Seekers", "/job-seekers"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

function BrandMark() {
  return (
    <svg
      viewBox="0 0 88 72"
      className="brand-mark"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="logoDots"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="#0f2b46" />
        </pattern>
      </defs>

      <ellipse
        cx="40"
        cy="34"
        rx="28"
        ry="28"
        fill="url(#logoDots)"
      />

      <ellipse
        cx="42"
        cy="36"
        rx="38"
        ry="13"
        fill="none"
        stroke="#c8a24d"
        strokeWidth="4"
        transform="rotate(-18 42 36)"
      />

      <circle cx="72" cy="23" r="3" fill="#c8a24d" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand brand-horizontal"
          aria-label="Caspian Workforce Group home"
          onClick={() => setOpen(false)}
        >
          <BrandMark />

          <span className="brand-copy">
            <strong>CASPIAN</strong>
            <span>WORKFORCE GROUP</span>
            <small>TRUST. PARTNERSHIP. RESULTS.</small>
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
