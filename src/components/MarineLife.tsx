import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const marineItems = [
  {
    icon: "🐠",
    title: "Tropical Fish",
    desc: "Over 200 species of colorful reef fish call these waters home.",
  },
  {
    icon: "🪸",
    title: "Coral Gardens",
    desc: "Pristine hard and soft coral formations stretching for hectares.",
  },
  {
    icon: "🐢",
    title: "Sea Turtles",
    desc: "Green sea turtles nest and feed in the shallows around the island.",
  },
  {
    icon: "🦈",
    title: "Reef Sharks",
    desc: "Whitetip reef sharks patrol the outer reef edges.",
  },
  {
    icon: "🐙",
    title: "Octopus & Squid",
    desc: "Intelligent cephalopods camouflage among the coral boulders.",
  },
  {
    icon: "🐡",
    title: "Pufferfish",
    desc: "Charming pufferfish drift lazily through the seagrass meadows.",
  },
];

export default function MarineLife() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      id="marine"
      className="relative py-28 overflow-hidden"
      aria-label="Nature and Marine Life"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src="/img/CrestaReef.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#001f3f]/70" />
      </motion.div>

      {/* Animated background bubbles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${8 + (i % 5) * 12}px`,
            height: `${8 + (i % 5) * 12}px`,
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan/80 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Beneath the Surface
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-7xl font-light text-white leading-none mt-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Nature &{" "}
            <span className="italic font-semibold" style={{ color: "#00A8CC" }}>
              Marine Life
            </span>
          </motion.h2>
          <motion.p
            className="font-body text-white/50 mt-6 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The waters surrounding Cresta de Gallo host one of the most
            biodiverse marine ecosystems in the Philippines. Strap on a mask and
            fins—an entire universe awaits below.
          </motion.p>
        </div>

        {/* Marine grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {marineItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Snorkeling CTA strip */}
        <motion.div
          className="mt-16 glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="font-body text-xs text-cyan/70 tracking-widest uppercase mb-2">
              Visibility
            </div>
            <div className="font-display text-4xl font-light text-white">
              20+ Meters
            </div>
            <div className="font-body text-white/50 text-sm mt-1">
              Average underwater visibility year-round
            </div>
          </div>
          <div className="h-px md:h-16 w-full md:w-px bg-white/10" />
          <div>
            <div className="font-body text-xs text-cyan/70 tracking-widest uppercase mb-2">
              Water Temp
            </div>
            <div className="font-display text-4xl font-light text-white">
              28–30°C
            </div>
            <div className="font-body text-white/50 text-sm mt-1">
              Perfect snorkeling & diving conditions
            </div>
          </div>
          <div className="h-px md:h-16 w-full md:w-px bg-white/10" />
          <div>
            <div className="font-body text-xs text-cyan/70 tracking-widest uppercase mb-2">
              Marine Species
            </div>
            <div className="font-display text-4xl font-light text-white">
              500+
            </div>
            <div className="font-body text-white/50 text-sm mt-1">
              Species recorded in surrounding waters
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#003B73"
          />
        </svg>
      </div>
    </section>
  );
}
