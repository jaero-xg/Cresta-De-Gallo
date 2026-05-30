import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🏖️",
    title: "White Sand Beaches",
    desc: "Fine powdery silica sand stretches around the entire sandbar, blindingly white and untouched. No footprints last long here—the tide washes them away.",
    color: "from-amber-400/20 to-yellow-200/10",
    accent: "#FFB84C",
  },
  {
    icon: "💎",
    title: "Crystal Clear Waters",
    desc: "Water so transparent you can count the grains of sand beneath your feet in 3 meters of depth. Snorkel, swim, or simply float in nature's infinity pool.",
    color: "from-cyan-400/20 to-blue-200/10",
    accent: "#00A8CC",
  },
  {
    icon: "⛵",
    title: "Island Hopping",
    desc: "Explore neighboring islets, limestone cliffs, sea caves, and hidden coves. Each island has its own unique character and marine ecosystem to discover.",
    color: "from-emerald-400/20 to-teal-200/10",
    accent: "#2F855A",
  },
  {
    icon: "🕊️",
    title: "Peaceful Escape",
    desc: "Zero mobile signal. No resorts. No roads. Just wind, waves, and birdsong. The most profound digital detox your body and mind have ever experienced.",
    color: "from-indigo-400/20 to-blue-300/10",
    accent: "#003B73",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--sand)" }}
      aria-label="Why Visit Cresta de Gallo"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, rgba(0,168,204,0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            The Experience
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ocean leading-none mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why Visit{" "}
            <span className="italic font-semibold block md:inline">
              Cresta de Gallo
            </span>
          </motion.h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 overflow-hidden border border-ocean/8 cursor-default group`}
              style={{ background: "white" }}
            >
              {/* Card gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className="text-5xl mb-6 relative z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                {feat.icon}
              </motion.div>

              {/* Accent bar */}
              <div
                className="w-8 h-1 rounded-full mb-5 relative z-10"
                style={{ background: feat.accent }}
              />

              <h3 className="font-display text-xl font-semibold text-ocean mb-3 relative z-10 group-hover:text-ocean">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-ocean/65 leading-relaxed relative z-10">
                {feat.desc}
              </p>

              {/* Corner decoration */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: feat.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          className="mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="font-display text-5xl text-cyan/20 leading-none mb-2">
            "
          </div>
          <p className="font-display text-2xl md:text-3xl italic font-light text-ocean leading-snug">
            There are islands hidden from the world for a reason.
            <br />
            Cresta de Gallo is one of them.
          </p>
          <div className="font-display text-5xl text-cyan/20 leading-none mt-2 text-right">
            "
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
