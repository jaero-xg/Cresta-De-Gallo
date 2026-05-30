import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const highlights = [
  {
    emoji: "🏖️",
    title: "Powdery White Sand",
    desc: "Pristine shores so fine they squeak underfoot",
  },
  {
    emoji: "💎",
    title: "Crystal-Clear Waters",
    desc: "Visibility extending 20+ meters into the deep",
  },
  {
    emoji: "🌿",
    title: "Unspoiled Nature",
    desc: "No electricity, no crowds—pure wilderness",
  },
  {
    emoji: "🕊️",
    title: "Island Serenity",
    desc: "The deepest peace you will ever know",
  },
];

export default function Discover() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="discover"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(180deg, #F8F5F0 0%, #e8f4f8 100%)",
      }}
      aria-label="Discover the Island"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image panel */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="w-full relative" style={{ aspectRatio: "4/5" }}>
              <img
                src="/img/CrestaDiscover-Large.png"
                alt="Cresta de Gallo island aerial view"
                className="w-full h-full object-cover"
              />
              {/* Overlay for depth */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,59,115,0.3) 0%, transparent 40%, rgba(0,30,60,0.15) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Second smaller image */}
          <motion.div
            className="absolute -right-8 top-16 w-44 h-44 rounded-2xl overflow-hidden shadow-xl hidden lg:block"
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]),
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/CrestaDiscover-Small.png"
              alt="Coral reef underwater"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text panel */}
        <motion.div
          ref={textRef}
          style={{ y: textY }}
          className="order-1 lg:order-2"
        >
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Island
          </motion.span>

          <motion.h2
            className="font-display text-5xl md:text-6xl font-light text-ocean leading-none mt-3 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Discover
            <br />
            <span className="italic font-semibold">the Island</span>
          </motion.h2>

          <motion.p
            className="font-body text-ocean/70 leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Cresta de Gallo is a small uninhabited sandbar island—a crescent of
            white silica sand completely surrounded by shallow, turquoise
            waters. With no permanent structures, no electricity, and virtually
            no tourists, it remains one of the Philippines' most pristine
            natural wonders.
          </motion.p>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-ocean/10 rounded-2xl p-5 hover:border-cyan/40 hover:shadow-lg transition-all duration-300 group cursor-default"
                style={{ background: "rgba(255,255,255,0.7)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h4 className="font-display text-sm font-semibold text-ocean mb-1 group-hover:text-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="font-body text-xs text-ocean/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="wave-divider" style={{ bottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C480,0 960,80 1440,30 L1440,80 L0,80 Z"
            fill="#003B73"
          />
        </svg>
      </div>
    </section>
  );
}
