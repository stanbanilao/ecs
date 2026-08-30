import type { Metadata } from "next";
import { SubsiteContact } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "Contact | Exclusive Mediation Solutions", description: "Contact Exclusive Mediation Solutions." };
export default function Page(){ return <SubsiteContact kind="mediation" />; }
