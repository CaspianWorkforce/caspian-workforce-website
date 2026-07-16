"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav=[
  ["Home","/"],
  ["For Employers","/employers"],
  ["For Job Seekers","/job-seekers"],
  ["About Us","/about"],
  ["Contact Us","/contact"]
];

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="Caspian Workforce Group home">
        <Image src="/logo.jpeg" alt="Caspian Workforce Group" width={176} height={70} priority/>
      </Link>
      <nav className="nav" aria-label="Primary navigation">{nav.map(([t,h])=><Link key={h} href={h}>{t}</Link>)}</nav>
      <Link href="/contact" className="button button-gold header-cta">Contact Our Team</Link>
      <button className="menu-button" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button>
    </div>
    {open && <div className="mobile-menu">{nav.map(([t,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}</div>}
  </header>
}
