import { ContactForm } from "@/components/contact-form";
import { ContactBand, PageIntro, PhoneIcon } from "@/components/site-chrome";

type Kind = "mediation";

const content = {
  mediation: {
    brand: "Exclusive Mediation Solutions", short: "Mediation", email: "mediation@exclusivemediation.co.za", phone: "+27105550220", displayPhone: "010 555 0220",
    aboutTitle: "A structured way to move difficult debt conversations forward.",
    aboutLead: "We help organise the issue, the records and the communication so practical options can be explored.",
    aboutCopy: "Debt-related disputes often become harder when the facts are scattered and communication has broken down. Exclusive Mediation Solutions creates a structured process to define the issue, assemble supporting information and support clear discussion. Mediation cannot force agreement and does not replace legal representation.",
    values: [["Define", "Identify the exact issue and desired outcome."], ["Document", "Organise records that support the facts."], ["Discuss", "Create a clear, practical communication route."]],
    faqs: [["Can mediation force an agreement?", "No. Mediation supports structured discussion but cannot compel another party to agree."], ["Does mediation erase debt?", "No. It does not erase valid debt or replace a formal legal process."], ["When is legal help required?", "If court action, legal interpretation or representation is needed, the appropriate legal referral should be made."], ["What should I prepare?", "Bring statements, payment records, correspondence and a concise explanation of the issue and desired resolution."]],
  },
} as const;

export function SubsiteAbout({ kind }: { kind: Kind }) {
  const c = content[kind];
  return <main><PageIntro eyebrow={`About ${c.short}`} title={c.aboutTitle} lead={c.aboutLead} theme="cream" /><section className="subsite-about"><div className="shell subsite-about-grid"><div className={`subsite-monogram monogram-${kind}`}><span>EM</span><p>{c.brand}</p></div><div><p className="eyebrow">Our approach</p><h2>Specialist support with clear boundaries.</h2><p>{c.aboutCopy}</p><div className="subsite-values">{c.values.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section><ContactBand title={`Talk to the ${c.short} team.`} /></main>;
}

export function SubsiteFAQ({ kind }: { kind: Kind }) {
  const c = content[kind];
  return <main><PageIntro eyebrow={`${c.short} FAQs`} title={`Clear answers about Debt ${c.short}.`} lead={`General answers from ${c.brand}. Your individual circumstances still need to be assessed.`} theme="navy" /><section className="faq-page"><div className="shell"><div className="faq-group"><aside><span>01</span><h2>{c.short} questions</h2></aside><div className="faq-list">{c.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></div></section><ContactBand title={`Ask the ${c.short} team directly.`} /></main>;
}

export function SubsiteContact({ kind }: { kind: Kind }) {
  const c = content[kind];
  return <main><PageIntro eyebrow={`${c.short} contact`} title={`Speak to ${c.brand}.`} lead={`Send a private ${c.short.toLowerCase()} enquiry. All contact details are temporary until the final business information is supplied.`} theme="cream" /><section className="contact-page"><div className="shell contact-page-grid"><div className="contact-panel"><p className="eyebrow">Temporary contact details</p><h2>{c.short} support.</h2><div className="contact-links"><a href={`tel:${c.phone}`}><span><PhoneIcon /></span><div><small>Landline</small><strong>{c.displayPhone}</strong><em>Click to call</em></div></a><a href="https://wa.me/27600000000" target="_blank" rel="noreferrer"><span>W</span><div><small>WhatsApp</small><strong>060 000 0000</strong><em>Click to chat</em></div></a><a href={`mailto:${c.email}`}><span>@</span><div><small>Email</small><strong>{c.email}</strong><em>Click to email</em></div></a></div><p className="draft-warning">These are separate temporary contact details for {c.brand}. Replace them before final business use.</p></div><ContactForm email={c.email} serviceLabel={`Debt ${c.short}`} /></div></section></main>;
}
