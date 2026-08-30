import type { Metadata } from "next";
import { ContactBand, PageIntro } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Debt Review FAQs | Exclusive Credit Solutions", description: "Frequently asked questions about South African Debt Review." };

const questions = [
  ["What is Debt Review?", "Debt Review is a formal, voluntary debt-relief process under the National Credit Act for over-indebted consumers. It begins with an affordability assessment and can lead to a restructured repayment proposal."],
  ["How do I know if I may be over-indebted?", "A formal assessment considers income, essential living costs and monthly debt obligations. Common warning signs include missed payments, using credit for necessities and having too little left for living expenses."],
  ["Can I obtain new credit while under Debt Review?", "Consumers generally cannot take further credit while under Debt Review. This and the other implications should be fully explained before an application is made."],
  ["Does Debt Review write off my debt?", "No. Debt Review does not erase valid debt. It is intended to create a structured repayment route based on verified affordability and the formal process."],
  ["Will creditors stop contacting me?", "The communication process changes once the formal notices and process apply, but the exact protections and responsibilities depend on the stage and compliance with the arrangement."],
  ["What documents are normally required?", "Common documents include identification, proof of income, recent bank statements, living-expense information and statements or details for credit obligations."],
  ["Can I leave Debt Review whenever I want?", "Exit options depend on the stage of the process and whether a court order or determination exists. Removal is a separate specialist service available under the Services menu."],
];

export default function FAQPage() {
  return <main><PageIntro eyebrow="Debt Review FAQs" title="Understand Debt Review before you decide." lead="These answers provide general information about the main Exclusive Credit Solutions service. Your financial position still needs an individual assessment." theme="navy" />
    <section className="faq-page"><div className="shell"><div className="faq-group"><aside><span>01</span><h2>Debt Review questions</h2></aside><div className="faq-list">{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></div></section>
    <ContactBand title="Ask us about Debt Review." />
  </main>;
}
