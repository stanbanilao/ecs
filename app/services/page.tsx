import type { Metadata } from "next";
import { ArrowIcon, PageIntro } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Specialist Services | Exclusive Credit Solutions", description: "Access the connected Debt Review Removal and Debt Mediation specialist websites." };

export default function ServicesPage() {
  return <main><PageIntro eyebrow="Specialist services" title="Two connected services. Each with its own specialist website." lead="Debt Review remains the core focus of Exclusive Credit Solutions. Removal and Mediation operate as connected specialist service areas with their own branding, information and contact routes." theme="cream" />
    <section className="services-directory"><div className="shell">
      <article className="directory-card directory-light"><span className="directory-index">ER</span><div><p className="eyebrow">Exclusive Removal Solutions</p><h2>Debt Review Removal</h2><p>Eligibility-led guidance for consumers who may meet the requirements for clearance or another lawful exit route.</p><ul><li>Eligibility assessment</li><li>Document review</li><li>Clearance and court-route guidance</li></ul><a className="button button-teal" href="/services/removal">Enter Removal website <ArrowIcon /></a></div></article>
      <article className="directory-card directory-dark"><span className="directory-index">EM</span><div><p className="eyebrow eyebrow-light">Exclusive Mediation Solutions</p><h2>Debt Mediation</h2><p>Structured assistance for debt-related disputes, communication breakdowns and practical resolution discussions.</p><ul><li>Issue and document review</li><li>Communication support</li><li>Resolution or referral</li></ul><a className="button button-gold" href="/services/mediation">Enter Mediation website <ArrowIcon /></a></div></article>
    </div></section>
    <section className="return-review"><div className="shell"><div><p className="eyebrow">Looking for Debt Review?</p><h2>Return to Exclusive Credit Solutions.</h2></div><a className="button button-teal" href="/services/debt-review">Explore Debt Review <ArrowIcon /></a></div></section>
  </main>;
}
