import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Discover from "./components/Discover";
import MarineLife from "./components/MarineLife";
import Features from "./components/Features";
import TravelGuide from "./components/TravelGuide";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -80 });
    }
  };

  const navLinks = [
    { label: "The Journey", id: "journey" },
    { label: "Discover", id: "discover" },
    { label: "Marine Life", id: "marine" },
    { label: "Gallery", id: "gallery" },
    { label: "Travel Info", id: "travel" },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark py-3" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => lenisRef.current?.scrollTo(0)}
            className="font-display text-xl font-semibold text-white tracking-widest uppercase"
          >
            Cresta de Gallo
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm text-white/80 hover:text-gold transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="font-body text-sm bg-gold text-ocean font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors tracking-wide"
            >
              Plan Visit
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden glass-dark mt-2 mx-4 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-white/90 text-left py-2 border-b border-white/10 last:border-0"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("cta")}
                  className="font-body bg-gold text-ocean font-semibold px-5 py-3 rounded-full mt-2"
                >
                  Plan Your Visit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <Hero />
        <Journey />
        <Discover />
        <MarineLife />
        <Features />
        <TravelGuide />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-ocean text-white/60 py-8 text-center font-body text-sm">
        <p>© 2025 Cresta de Gallo Tourism | Romblon, Philippines</p>
        <p className="mt-1 text-white/40 text-xs">
          Preserving paradise for future generations.
        </p>
      </footer>
    </>
  );
}

export default App;
