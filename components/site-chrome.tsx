"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type SiteKind = "review" | "removal" | "mediation";

const sites = {
  review: { title: "Exclusive", subtitle: "Credit Solutions", code: "EC", home: "/", phone: "+27105550198", displayPhone: "010 555 0198", email: "info@exclusivecreditsolutions.co.za", line: "Debt Review guidance for a clearer financial future" },
  removal: { title: "Exclusive", subtitle: "Removal Solutions", code: "ER", home: "/services/removal", phone: "+27105550210", displayPhone: "010 555 0210", email: "removal@exclusiveremovals.co.za", line: "Eligibility-led Debt Review Removal support" },
  mediation: { title: "Exclusive", subtitle: "Mediation Solutions", code: "EM", home: "/services/mediation", phone: "+27105550220", displayPhone: "010 555 0220", email: "mediation@exclusivemediation.co.za", line: "Structured Debt Mediation support" },
} as const;

function useSiteKind(): SiteKind {
  const path = usePathname() || "/";
  if (path.startsWith("/services/removal")) return "removal";
  if (path.startsWith("/services/mediation")) return "mediation";
  return "review";
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.4 3.8 9 7.2 7.3 9.4c1.5 3.3 4 5.8 7.3 7.3l2.2-1.7 3.4 2.6-.8 3.1c-.2.8-.9 1.3-1.7 1.3A15.7 15.7 0 0 1 2 6.3c0-.8.5-1.5 1.3-1.7l3.1-.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Logo({ light = false, kind = "review" }: { light?: boolean; kind?: SiteKind }) {
  const site = sites[kind];
  return <a className={`brand ${light ? "brand-light" : ""}`} href={site.home} aria-label={`${site.title} ${site.subtitle} home`}><span className="brand-symbol"><span>{site.code[0]}</span><i>{site.code[1]}</i></span><span className="brand-words"><strong>{site.title}</strong><small>{site.subtitle}</small></span></a>;
}

function ServicesMenu() {
  return <DropdownMenu><DropdownMenuTrigger className="services-trigger">Services <span>⌄</span></DropdownMenuTrigger><DropdownMenuContent align="end" className="services-dropdown"><DropdownMenuItem asChild><a href="/services/removal"><strong>Debt Review Removal</strong><small>Eligibility and clearance routes</small></a></DropdownMenuItem><DropdownMenuItem asChild><a href="/services/mediation"><strong>Debt Mediation</strong><small>Disputes and structured resolution</small></a></DropdownMenuItem></DropdownMenuContent></DropdownMenu>;
}

function navFor(kind: SiteKind) {
  if (kind === "removal") return [["Removal Home", "/services/removal"], ["About", "/services/removal/about"], ["FAQs", "/services/removal/faq"], ["Contact", "/services/removal/contact"]];
  if (kind === "mediation") return [["Mediation Home", "/services/mediation"], ["About", "/services/mediation/about"], ["FAQs", "/services/mediation/faq"], ["Contact", "/services/mediation/contact"]];
  return [["Home", "/"], ["Debt Review", "/services/debt-review"], ["About", "/about"], ["FAQs", "/faq"], ["Contact", "/contact"]];
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const kind = useSiteKind();
  const site = sites[kind];
  const navItems = navFor(kind);
  return <>
    <div className={`topline topline-${kind}`}><div className="shell"><p>{site.line}</p><a href={`tel:${site.phone}`}><PhoneIcon /> <span>{site.displayPhone}</span><em>Temporary number</em></a></div></div>
    <header className={`site-header header-${kind}`}><div className="shell header-inner"><Logo kind={kind} />
      <nav aria-label="Primary navigation">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}{kind === "review" ? <ServicesMenu /> : <a className="back-to-main" href="/">Debt Review Site</a>}</nav>
      <a className="call-cta" href={`tel:${site.phone}`} aria-label="Request a call"><span className="call-icon"><PhoneIcon /></span><span><small>Talk to our team</small>Request a call</span></a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>{open && <div className="mobile-menu">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}{kind === "review" ? <><span className="mobile-section-label">Services</span><a href="/services/removal">Debt Review Removal</a><a href="/services/mediation">Debt Mediation</a></> : <a href="/">Return to Debt Review site</a>}<a className="mobile-call" href={`tel:${site.phone}`}><PhoneIcon /> Request a call</a></div>}</header>
  </>;
}

export function SiteFooter() {
  const kind = useSiteKind();
  const site = sites[kind];
  const navItems = navFor(kind);
  const description = kind === "review" ? "Clear, responsible Debt Review guidance for over-indebted South African consumers." : kind === "removal" ? "Eligibility-led guidance for lawful Debt Review clearance and exit routes." : "Structured support for debt-related disputes, communication and practical resolution.";
  return <footer className={`site-footer footer-${kind}`}><div className="shell footer-main">
    <div className="footer-brand"><Logo light kind={kind} /><p>{description}</p><span className="pending-tag">Registration details to be supplied</span></div>
    <div><h3>{kind === "review" ? "Debt Review" : site.subtitle}</h3>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
    <div><h3>{kind === "review" ? "Specialist services" : "Connected sites"}</h3>{kind === "review" ? <><a href="/services/removal">Debt Review Removal</a><a href="/services/mediation">Debt Mediation</a></> : <><a href="/">Exclusive Credit Solutions</a><a href={kind === "removal" ? "/services/mediation" : "/services/removal"}>{kind === "removal" ? "Debt Mediation" : "Debt Review Removal"}</a></>}</div>
    <div><h3>Temporary contact</h3><a href={`tel:${site.phone}`}>{site.displayPhone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>1 Example Avenue<br />Sandton, Gauteng, 2196</p></div>
  </div><div className="shell footer-legal"><p>© 2026 {site.title} {site.subtitle}</p><p>Information is general and does not guarantee eligibility or a particular outcome. Final legal, registration and contact details are pending.</p></div></footer>;
}

export function FloatingActions() {
  const kind = useSiteKind();
  const site = sites[kind];
  const message = encodeURIComponent(`Hello ${site.title} ${site.subtitle}, I would like assistance.`);
  return <a className={`whatsapp-float whatsapp-${kind}`} href={`https://wa.me/27600000000?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Chat with ${site.title} ${site.subtitle} on WhatsApp`}><span className="whatsapp-icon">W</span><span className="whatsapp-copy"><small>Need help?</small>Chat on WhatsApp</span></a>;
}

export function PageIntro({ eyebrow, title, lead, theme = "navy" }: { eyebrow: string; title: string; lead: string; theme?: "navy" | "teal" | "cream" }) {
  const kind = useSiteKind();
  const site = sites[kind];
  return <section className={`page-intro page-intro-${theme} intro-${kind}`}><div className="page-intro-shape"></div><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lead">{lead}</p><div className="breadcrumb"><a href={site.home}>{kind === "review" ? "Home" : `${kind} home`}</a><span>/</span><span>{eyebrow}</span></div></div></section>;
}

export function ContactBand({ title = "Let’s find the right next step." }: { title?: string }) {
  const kind = useSiteKind();
  const site = sites[kind];
  const contact = kind === "review" ? "/contact" : `/services/${kind}/contact`;
  return <section className={`contact-band contact-band-${kind}`}><div className="shell"><div><p className="eyebrow">Confidential support</p><h2>{title}</h2></div><div className="band-actions"><a className="button button-gold" href={contact}>Request an assessment <ArrowIcon /></a><a className="button button-outline-light" href={`tel:${site.phone}`}><PhoneIcon /> Call {site.displayPhone}</a></div></div></section>;
}
