import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
