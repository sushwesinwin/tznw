import Navbar from "@/components/Navbar";
import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import TelevisionPrograms from "@/components/pages/TelevisionPrograms";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TelevisionPrograms />
      <ScrollToTop />
    </main>
  );
}
