import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, PageIntro } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Debt Mediation | Exclusive Credit Solutions", description: "Access the connected Debt Mediation specialist website." };

export default function ServicesPage() {
  return <main><PageIntro eyebrow="Specialist service" title="Debt Mediation, connected to the main Removal website." lead="Debt Review Removal is the main focus of Exclusive Credit Solutions. Mediation remains available as a connected specialist service with its own information and contact route." theme="cream" />
    <section className="services-directory"><div className="shell">
      <article className="directory-card directory-dark"><span className="directory-index">EM</span><div><p className="eyebrow eyebrow-light">Exclusive Mediation Solutions</p><h2>Debt Mediation</h2><p>Structured assistance for debt-related disputes, communication breakdowns and practical resolution discussions.</p><ul><li>Issue and document review</li><li>Communication support</li><li>Resolution or referral</li></ul><a className="button button-gold" href="/services/mediation">Enter Mediation website <ArrowIcon /></a></div></article>
    </div></section>
    <section className="return-review"><div className="shell"><div><p className="eyebrow">Looking for Removal?</p><h2>Return to Debt Review Removal.</h2></div><Link className="button button-teal" href="/">Return to the main website <ArrowIcon /></Link></div></section>
  </main>;
}
