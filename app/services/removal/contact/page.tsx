import type { Metadata } from "next";
import { SubsiteContact } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "Contact | Exclusive Removal Solutions", description: "Contact Exclusive Removal Solutions." };
export default function Page(){ return <SubsiteContact kind="removal" />; }
