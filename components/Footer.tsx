import Link from "next/link";
export default function Footer(){return <footer className="footer">
  <div className="container footer-grid">
    <div><div className="footer-brand">Caspian Workforce Group</div><p>International Workforce Solutions</p><strong>TRUST. PARTNERSHIP. RESULTS.</strong></div>
    <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/employers">For Employers</Link><Link href="/job-seekers">For Job Seekers</Link><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link></div>
    <div><h3>Contact</h3><a href="tel:+994997117116">+994 99 711 7116</a><a href="mailto:info@caspianworkforcegroup.com">info@caspianworkforcegroup.com</a></div>
    <div><h3>Legal</h3><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/cookies">Cookie Policy</Link></div>
  </div>
  <div className="container footer-bottom"><span>© 2022–2026 Caspian Workforce Group. All rights reserved.</span><span>English · Русский · Azərbaycan</span></div>
</footer>}
