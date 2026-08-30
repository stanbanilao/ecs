"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowIcon } from "@/components/site-chrome";

export function ContactForm({ email = "info@exclusivecreditsolutions.co.za", serviceLabel = "Debt Review" }: { email?: string; serviceLabel?: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${serviceLabel} enquiry — ${data.get("service")}`;
    const body = [`Name: ${data.get("name")}`, `Phone: ${data.get("phone")}`, `Email: ${data.get("email")}`, `Service: ${data.get("service")}`, "", `Message: ${data.get("message")}`].join("\n");
    setSent(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="premium-form" onSubmit={submit}>
    <div className="form-heading"><span>01</span><div><p>Private enquiry</p><h2>Tell us where you need support.</h2></div></div>
    <div className="field-row"><label>Full name<Input name="name" required placeholder="Your full name" /></label><label>Mobile number<Input name="phone" type="tel" required placeholder="071 234 5678" /></label></div>
    <div className="field-row"><label>Email address<Input name="email" type="email" required placeholder="you@example.co.za" /></label><label>Service<Input name="service" required defaultValue={serviceLabel} aria-label="Service" /></label></div>
    <label>Short message<Textarea name="message" required rows={5} placeholder="Briefly explain your situation. Never include banking passwords or PINs." /></label>
    <div className="form-submit"><p>Submitting opens your email app with these details. The receiving email is temporary until you provide the final address.</p><Button className="button button-teal" type="submit">Prepare enquiry <ArrowIcon /></Button></div>
    {sent && <p className="success-note" role="status">Your email app has opened. Press Send there to complete the enquiry.</p>}
  </form>;
}
