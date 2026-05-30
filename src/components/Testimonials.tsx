import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "One of the most beautiful islands in the Philippines. I've traveled all 7,641 islands and Cresta de Gallo left me speechless.",
    author: "Maria Santos",
    role: "Travel Photographer, Manila",
    stars: 5,
  },
  {
    quote:
      "The water is unbelievably clear. You can see every detail of the reef from 5 meters above. It felt like floating in liquid glass.",
    author: "James Reyes",
    role: "Marine Biologist, Cebu",
    stars: 5,
  },
  {
    quote:
      "A true hidden gem of Romblon. No tourists, no noise—just you and the most pristine sandbar you've ever seen in your life.",
    author: "Ana Villanueva",
    role: "Adventure Blogger",
    stars: 5,
  },
  {
    quote:
      "We camped overnight on the sandbar. Watching the Milky Way from a remote Philippine island with waves lapping around us—indescribable.",
    author: "David Lim",
    role: "Architect & Traveler, Singapore",
    stars: 5,
  },
  {
    quote:
      "The journey to get there is half the adventure. Seven hours of sea, and then this tiny strip of paradise appears from nowhere. Magic.",
    author: "Celine Morales",
    role: "Digital Nomad",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #003B73 0%, #001f3f 50%, #002b5c 100%)",
      }}
      aria-label="Visitor Testimonials"
    >
      {/* Floating decorative orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            left: `${(i * 18) % 90}%`,
            top: `${(i * 23) % 80}%`,
            background: `radial-gradient(circle, rgba(0,168,204,0.06), transparent)`,
            border: "1px solid rgba(0,168,204,0.05)",
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7 }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan/70 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Real Stories
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-6xl font-light text-white mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Visitor{" "}
            <span className="italic font-semibold text-gold">Experiences</span>
          </motion.h2>
        </div>

        {/* Main carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-14 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic font-light text-white leading-snug mb-10">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #00A8CC, #003B73)",
                  }}
                >
                  {testimonials[current].author[0]}
                </div>
                <div className="text-left">
                  <div className="font-body font-medium text-white">
                    {testimonials[current].author}
                  </div>
                  <div className="font-body text-sm text-white/50">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2 bg-gold"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mini cards (visible on larger screens) */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.button
              key={t.author}
              className={`text-left rounded-2xl p-5 transition-all duration-300 ${
                current === i
                  ? "glass border border-gold/30"
                  : "border border-white/5 hover:border-white/20"
              }`}
              style={{
                background:
                  current === i ? undefined : "rgba(255,255,255,0.04)",
              }}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="font-body text-xs text-white/40 mb-2">
                {t.author}
              </div>
              <p className="font-body text-sm text-white/70 line-clamp-2 italic">
                "{t.quote.slice(0, 70)}..."
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
