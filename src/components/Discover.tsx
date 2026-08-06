import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { highlights } from "../context/discoverPage";

export default function Discover() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const accentY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="discover"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        background: "linear-gradient(180deg, #F8F5F0 0%, #e8f4f8 100%)",
      }}
      aria-label="Discover the Island"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[5fr_6fr] gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="/img/CrestaDiscover-Large.png"
                alt="Cresta de Gallo island aerial view"
                className="w-full h-full object-cover"
              />
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

          <motion.div
            className="absolute -right-4 top-12 w-36 h-36 rounded-2xl overflow-hidden shadow-xl hidden xl:block"
            style={{ y: accentY }}
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

        <motion.div
          ref={textRef}
          style={{ y: textY }}
          className="order-1 lg:order-2 lg:max-w-[540px] justify-self-start w-full"
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
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ocean leading-none mt-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Discover
            <br />
            <span className="italic font-semibold">the Island</span>
          </motion.h2>

          <motion.p
            className="font-body text-sm sm:text-base text-ocean/70 leading-relaxed mb-8 sm:mb-10 max-w-md"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-ocean/10 rounded-2xl p-4 sm:p-5 hover:border-cyan/40 hover:shadow-lg transition-all duration-300 group cursor-default"
                style={{ background: "rgba(255,255,255,0.7)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex sm:block items-start gap-3 sm:gap-0">
                  <div className="flex-shrink-0 mb-0 sm:mb-3">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ocean mb-1 group-hover:text-cyan transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-ocean/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
