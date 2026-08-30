import type { Metadata } from "next";
import { SubsiteFAQ } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "FAQs | Exclusive Mediation Solutions", description: "Frequently asked questions about Debt Mediation." };
export default function Page(){ return <SubsiteFAQ kind="mediation" />; }
