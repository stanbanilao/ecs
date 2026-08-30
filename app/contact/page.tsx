import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro, PhoneIcon } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Debt Review Contact | Exclusive Credit Solutions", description: "Contact Exclusive Credit Solutions about Debt Review." };

export default function ContactPage() {
  return <main><PageIntro eyebrow="Debt Review Contact" title="Start with a confidential Debt Review conversation." lead="Tell us about your monthly affordability concerns and provide a short summary. These Exclusive Credit Solutions contact details are temporary." theme="teal" />
    <section className="contact-page"><div className="shell contact-page-grid"><div className="contact-panel"><p className="eyebrow">Exclusive Credit Solutions</p><h2>Speak to the Debt Review team.</h2><div className="contact-links"><a href="tel:+27105550198"><span><PhoneIcon /></span><div><small>Landline</small><strong>010 555 0198</strong><em>Click to call</em></div></a><a href="https://wa.me/27600000000" target="_blank" rel="noreferrer"><span>W</span><div><small>WhatsApp</small><strong>060 000 0000</strong><em>Click to chat</em></div></a><a href="mailto:info@exclusivecreditsolutions.co.za"><span>@</span><div><small>Email</small><strong>info@exclusivecreditsolutions.co.za</strong><em>Click to email</em></div></a></div><div className="address-box"><small>Temporary address</small><p>1 Example Avenue<br />Sandton, Gauteng, 2196</p></div><p className="draft-warning">These contact details belong to the main Debt Review website and must be replaced before final business use.</p></div><ContactForm email="info@exclusivecreditsolutions.co.za" serviceLabel="Debt Review" /></div></section>
  </main>;
}
