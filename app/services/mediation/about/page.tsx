import type { Metadata } from "next";
import { SubsiteAbout } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "About | Exclusive Mediation Solutions", description: "About Exclusive Mediation Solutions and its structured approach." };
export default function Page(){ return <SubsiteAbout kind="mediation" />; }
