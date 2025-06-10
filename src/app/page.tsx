// src/app/page.tsx

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // No special container needed, just a fragment
    <>
      <Hero />
      <ContactForm />
      <Footer />
    </>
  );
}