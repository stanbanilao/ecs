import type { Metadata } from "next";
import { SubsiteFAQ } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "FAQs | Exclusive Removal Solutions", description: "Frequently asked questions about Debt Review Removal." };
export default function Page(){ return <SubsiteFAQ kind="removal" />; }
