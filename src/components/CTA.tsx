import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="cta"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Call to Action – Plan Your Visit"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/img/CrestaSunset.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center blur-sm"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </motion.div>

      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 text-sm font-body text-white/80 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <FiMapPin className="text-gold" />
          Romblon, Philippines
        </motion.div>

        <motion.h2
          className="font-display font-light text-white leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Ready to Discover
          <br />
          <span className="italic font-semibold text-gold">Paradise?</span>
        </motion.h2>

        <motion.p
          className="font-body text-white/70 text-lg mb-14 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Cresta de Gallo is waiting—wild, untouched, and more beautiful than
          any photograph can capture. The only thing missing is you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://visitromblon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 font-body font-semibold px-8 py-4 rounded-full text-ocean bg-gold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-gold/30 tracking-wide"
          >
            Explore Romblon
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            className="group inline-flex items-center justify-center gap-3 font-body font-semibold px-8 py-4 rounded-full text-white border border-white/30 hover:bg-white/15 transition-all duration-300 tracking-wide glass"
            onClick={() => {
              const el = document.getElementById("travel");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Plan Your Visit
          </button>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { n: "Uninhabited", l: "Pristine island" },
            { n: "4.9★", l: "Traveler rating" },
            { n: "Top 10", l: "Philippines beaches" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-xl md:text-2xl font-semibold text-gold">
                {s.n}
              </div>
              <div className="font-body text-white/50 text-xs mt-1 tracking-wide">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#002b5c"
          />
        </svg>
      </div>
    </section>
  );
}
