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
      viewBox="0 0 150 132"
      className="brand-mark"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="brandSphere" cx="36%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#173f67" />
          <stop offset="100%" stopColor="#081f38" />
        </radialGradient>

        <linearGradient id="brandGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2c55e" />
          <stop offset="50%" stopColor="#c99528" />
          <stop offset="100%" stopColor="#f0b93e" />
        </linearGradient>

        <clipPath id="sphereClip">
          <circle cx="72" cy="63" r="49" />
        </clipPath>
      </defs>

      <circle
        cx="72"
        cy="63"
        r="49"
        fill="url(#brandSphere)"
      />

      <g clipPath="url(#sphereClip)" fill="#ffffff">
        {[
          [72, 19, 3],
          [57, 21, 3],
          [87, 21, 3],
          [43, 27, 3.5],
          [57, 28, 4],
          [72, 28, 4.5],
          [87, 28, 4],
          [101, 27, 3.5],
          [33, 37, 3.5],
          [47, 38, 4.5],
          [61, 38, 5],
          [76, 38, 5.5],
          [91, 38, 5],
          [105, 37, 4],
          [27, 50, 3],
          [41, 50, 4.5],
          [56, 50, 5.5],
          [72, 50, 6.5],
          [88, 50, 5.5],
          [103, 50, 4.5],
          [116, 50, 3],
          [25, 64, 3],
          [39, 64, 4.5],
          [54, 64, 5.8],
          [71, 64, 7],
          [88, 64, 5.8],
          [103, 64, 4.5],
          [117, 64, 3],
          [28, 78, 3],
          [42, 78, 4.3],
          [57, 78, 5.3],
          [72, 78, 6.2],
          [87, 78, 5.3],
          [102, 78, 4.3],
          [115, 78, 3],
          [35, 91, 3.3],
          [49, 91, 4],
          [63, 91, 4.7],
          [77, 91, 5],
          [91, 91, 4.5],
          [104, 91, 3.5],
          [45, 102, 3],
          [59, 103, 3.5],
          [73, 104, 4],
          [87, 103, 3.5],
          [99, 101, 3],
        ].map(([cx, cy, r], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={r}
          />
        ))}
      </g>

      <ellipse
        cx="73"
        cy="66"
        rx="67"
        ry="22"
        fill="none"
        stroke="url(#brandGold)"
        strokeWidth="7"
        transform="rotate(-17 73 66)"
      />

      <circle
        cx="130"
        cy="42"
        r="4"
        fill="#e2ad38"
      />
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
