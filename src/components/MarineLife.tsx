import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Marine_Icons } from "../lib/UI_Icons";

const marineItems = [
  {
    Icon: Marine_Icons.TropicalFish,
    title: "Tropical Fish",
    desc: "Over 200 species of colorful reef fish call these waters home.",
  },
  {
    Icon: Marine_Icons.Coral,
    title: "Coral Gardens",
    desc: "Pristine hard and soft coral formations stretching for hectares.",
  },
  {
    Icon: Marine_Icons.SeaTurtle,
    title: "Sea Turtles",
    desc: "Green sea turtles nest and feed in the shallows around the island.",
  },
  {
    Icon: Marine_Icons.Shark,
    title: "Reef Sharks",
    desc: "Whitetip reef sharks patrol the outer reef edges.",
  },
  {
    Icon: Marine_Icons.Octopus,
    title: "Octopus & Squid",
    desc: "Intelligent cephalopods camouflage among the coral boulders.",
  },
  {
    Icon: Marine_Icons.PufferFish,
    title: "Pufferfish",
    desc: "Charming pufferfish drift lazily through the seagrass meadows.",
  },
];

const stats = [
  {
    label: "Visibility",
    value: "20+",
    unit: "Meters",
    sub: "Avg. underwater visibility",
  },
  {
    label: "Water Temp",
    value: "28–30°C",
    unit: "",
    sub: "Perfect for snorkeling",
  },
  {
    label: "Marine Species",
    value: "500+",
    unit: "",
    sub: "Species in surrounding waters",
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
      className="relative py-20 sm:py-24 md:py-28 overflow-hidden"
      aria-label="Nature and Marine Life"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src="/img/CrestaReef.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001f3f]/70" />
      </motion.div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan/80 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Beneath the Surface
          </motion.span>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-white leading-none mt-4"
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
            className="font-body text-white/50 mt-5 sm:mt-6 max-w-xl mx-auto leading-relaxed text-sm sm:text-base"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {marineItems.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass rounded-2xl p-5 sm:p-6 group hover:bg-white/20 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <motion.div
                  className="flex-shrink-0"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Icon />
                </motion.div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-white leading-tight">
                  {title}
                </h3>
              </div>

              <p className="font-body text-white/55 text-xs sm:text-sm leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-14 md:mt-16 glass rounded-2xl sm:rounded-3xl
                     px-6 py-6 sm:px-8 sm:py-8 md:py-12 md:px-16
                     grid grid-cols-3 md:flex md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-center justify-center text-center flex-1 px-2 md:px-10">
                <div className="font-body text-[9px] md:text-[11px] text-cyan/70 tracking-[0.25em] uppercase mb-2 md:mb-4 whitespace-nowrap">
                  {stat.label}
                </div>

                <div className="font-display text-2xl sm:text-3xl md:text-5xl font-light text-white leading-none tracking-tight">
                  {stat.value}
                  {stat.unit && (
                    <span className="font-body text-sm md:text-lg font-light text-white/55 ml-1.5 align-baseline">
                      {stat.unit}
                    </span>
                  )}
                </div>

                <div className="font-body text-white/40 text-[9px] md:text-[11px] mt-2 md:mt-3 leading-snug max-w-[80px] md:max-w-none">
                  {stat.sub}
                </div>
              </div>

              {i < stats.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-white/10 flex-shrink-0" />
              )}
            </React.Fragment>
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
            fill="#003B73"
          />
        </svg>
      </div>
    </section>
  );
}
