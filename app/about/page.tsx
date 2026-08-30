import type { Metadata } from "next";
import { ContactBand, PageIntro } from "@/components/site-chrome";

export const metadata: Metadata = { title: "About | Exclusive Credit Solutions", description: "Learn about the Debt Review principles and approach behind Exclusive Credit Solutions." };

export default function AboutPage() {
  return <main><PageIntro eyebrow="About ECS" title="Debt Review deserves clarity, dignity and honest guidance." lead="Exclusive Credit Solutions is focused on helping over-indebted consumers understand the Debt Review process before making a commitment." theme="cream" />
    <section className="about-story"><div className="shell about-story-grid"><div className="story-mark"><span>E</span><i>C</i><p>Exclusive Credit<br />Solutions</p></div><div><p className="eyebrow">Our reason for existing</p><h2>Professional Debt Review guidance should still feel human.</h2><p className="large-copy-dark">Debt problems affect more than a monthly budget. They can change sleep, relationships, confidence and everyday choices. Our approach is designed to lower the noise, assess affordability and help people understand the formal process.</p><p>We do not believe in signing people up before they understand the implications. Debt Review has requirements, responsibilities and consequences. Explaining those details clearly is part of respecting the client.</p></div></div></section>
    <section className="values-section"><div className="shell"><div className="section-heading"><p className="eyebrow eyebrow-light">The ECS standard</p><h2>Four principles behind every conversation.</h2></div><div className="values-premium"><article><span>01</span><h3>Listen without judgement</h3><p>We begin with the real situation, not assumptions.</p></article><article><span>02</span><h3>Verify before advising</h3><p>Facts and documents determine the appropriate route.</p></article><article><span>03</span><h3>Explain without pressure</h3><p>You should understand implications before deciding.</p></article><article><span>04</span><h3>Stay within the process</h3><p>Responsible guidance respects legal and professional boundaries.</p></article></div></div></section>
    <section className="brand-statement"><div className="shell"><p>Our name carries our promise</p><blockquote>“Exclusive” means the guidance must feel personal—even when the process is formal.</blockquote></div></section>
    <ContactBand />
  </main>;
}
