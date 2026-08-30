import type { Metadata } from "next";
import { SubsiteAbout } from "@/components/subsite-pages";
export const metadata: Metadata = { title: "About | Exclusive Removal Solutions", description: "About Exclusive Removal Solutions and its eligibility-led approach." };
export default function Page(){ return <SubsiteAbout kind="removal" />; }
