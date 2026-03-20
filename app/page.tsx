import Navbar from "@/components/Navbar";
import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import TelevisionPrograms from "@/components/pages/TelevisionPrograms";
import Photoshoot from "@/components/pages/Photoshoot";
import Bookings from "@/components/pages/Bookings";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <TelevisionPrograms />
            <Photoshoot />
            <Bookings />
            <Footer />
            <ScrollToTop />
        </main>
    );
}
