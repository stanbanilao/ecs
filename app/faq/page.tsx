import type { Metadata } from "next";
import { ContactBand, PageIntro } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Debt Review Removal FAQs | Exclusive Credit Solutions", description: "Frequently asked questions about Debt Review Removal in South Africa." };

const questions = [
  ["Can Debt Review Removal be guaranteed?", "No. Eligibility and the correct route must be established from your status, documents, settlement position and any court order."],
  ["Can I remove the flag myself?", "You may dispute incorrect credit-bureau information directly. Lawful clearance from debt review normally requires the appropriate process and supporting documentation, and court involvement may be necessary in some cases."],
  ["Does paying my debts remove the flag automatically?", "No. Settlement may be an important requirement, but the proper clearance process and credit-bureau updates still need to be completed and verified."],
  ["What if a court order already exists?", "A court route may be required. A debt counsellor cannot simply cancel or withdraw an existing court order."],
  ["What if only my home loan remains?", "You may potentially qualify for a clearance route when the relevant requirements are met and the remaining home-loan position is compliant. Your documents must be assessed."],
  ["Which documents may be needed?", "Common records include identification, a recent credit report, paid-up letters, payment records, the court order and debt-counsellor correspondence."],
  ["How long does removal take?", "No responsible timeline can be guaranteed before the case, required documents and third-party processing steps are understood."],
];

export default function FAQPage() {
  return <main><PageIntro eyebrow="Removal FAQs" title="Understand the removal process before paying for a promise." lead="These answers provide general information. Your own status and documents still need an individual eligibility assessment." theme="navy" />
    <section className="faq-page"><div className="shell"><div className="faq-group"><aside><span>01</span><h2>Removal questions</h2></aside><div className="faq-list">{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></div></section>
    <ContactBand title="Ask about your removal eligibility." />
  </main>;
}
