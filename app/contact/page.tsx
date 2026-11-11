import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro, PhoneIcon } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Debt Review Removal Contact | Exclusive Credit Solutions", description: "Contact Exclusive Credit Solutions about Debt Review Removal eligibility." };

export default function ContactPage() {
  return <main><PageIntro eyebrow="Removal Contact" title="Start with a confidential eligibility conversation." lead="Tell us your current debt-review status and which documents you already have. These Exclusive Credit Solutions contact details are temporary." theme="teal" />
    <section className="contact-page"><div className="shell contact-page-grid"><div className="contact-panel"><p className="eyebrow">Exclusive Credit Solutions</p><h2>Speak to the Removal team.</h2><div className="contact-links"><a href="tel:+27105550210"><span><PhoneIcon /></span><div><small>Landline</small><strong>010 555 0210</strong><em>Click to call</em></div></a><a href="https://wa.me/27600000000" target="_blank" rel="noreferrer"><span>W</span><div><small>WhatsApp</small><strong>060 000 0000</strong><em>Click to chat</em></div></a><a href="mailto:removal@exclusiveremovals.co.za"><span>@</span><div><small>Email</small><strong>removal@exclusiveremovals.co.za</strong><em>Click to email</em></div></a></div><div className="address-box"><small>Temporary address</small><p>1 Example Avenue<br />Sandton, Gauteng, 2196</p></div><p className="draft-warning">These temporary contact and registration details must be replaced before final business use.</p></div><ContactForm email="removal@exclusiveremovals.co.za" serviceLabel="Debt Review Removal" /></div></section>
  </main>;
}
