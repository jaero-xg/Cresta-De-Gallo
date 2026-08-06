import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Feat_Icons } from "../lib/UI_Icons";

const features = [
  {
    Icon: Feat_Icons.Beach,
    title: "White Sand Beaches",
    desc: "Fine powdery silica sand stretches around the entire sandbar, blindingly white and untouched. No footprints last long here—the tide washes them away.",
    color: "from-amber-400/20 to-yellow-200/10",
    accent: "#FFB84C",
  },
  {
    Icon: Feat_Icons.Diamond,
    title: "Crystal Clear Waters",
    desc: "Water so transparent you can count the grains of sand beneath your feet in 3 meters of depth. Snorkel, swim, or simply float in nature's infinity pool.",
    color: "from-cyan-400/20 to-blue-200/10",
    accent: "#00A8CC",
  },
  {
    Icon: Feat_Icons.SailBoat,
    title: "Island Hopping",
    desc: "Explore neighboring islets, limestone cliffs, sea caves, and hidden coves. Each island has its own unique character and marine ecosystem to discover.",
    color: "from-emerald-400/20 to-teal-200/10",
    accent: "#2F855A",
  },
  {
    Icon: Feat_Icons.Dove,
    title: "Peaceful Escape",
    desc: "Zero mobile signal. No resorts. No roads. Just wind, waves, and birdsong. The most profound digital detox your body and mind have ever experienced.",
    color: "from-indigo-400/20 to-blue-300/10",
    accent: "#003B73",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--sand)" }}
      aria-label="Why Visit Cresta de Gallo"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, rgba(0,168,204,0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            The Experience
          </motion.span>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ocean leading-none mt-4"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map(({ Icon, title, desc, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-ocean/8 cursor-default group"
              style={{ background: "white" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="flex sm:block items-start gap-4 p-5 sm:p-8 relative z-10">
                <div className="flex flex-col items-center gap-3 flex-shrink-0 sm:items-start">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  >
                    <Icon />
                  </motion.div>

                  <div
                    className="w-6 h-1 sm:w-8 rounded-full sm:mb-5"
                    style={{ background: accent }}
                  />
                </div>

                <div className="sm:mt-0">
                  <h3 className="font-display text-base sm:text-xl font-semibold text-ocean mb-1.5 sm:mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ocean/65 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: accent }}
              />
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="mt-14 sm:mt-16 md:mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="font-display text-4xl sm:text-5xl text-cyan/20 leading-none mb-2">
            "
          </div>
          <p className="font-display text-xl sm:text-2xl md:text-3xl italic font-light text-ocean leading-snug px-2">
            There are islands hidden from the world for a reason.
            <br className="hidden sm:block" /> Cresta de Gallo is one of them.
          </p>
          <div className="font-display text-4xl sm:text-5xl text-cyan/20 leading-none mt-2 text-right">
            "
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
