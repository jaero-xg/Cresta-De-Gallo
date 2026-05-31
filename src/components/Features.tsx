import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Icons ─────────────────────────────────────────────────────────────────────

const BeachIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="-22 -28 44 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="0"
      cy="-18"
      r="9"
      fill="#F5C518"
      stroke="#C49A0A"
      strokeWidth="1.2"
    />
    <g stroke="#F5C518" strokeWidth="2" strokeLinecap="round">
      <line x1="0" y1="-31" x2="0" y2="-35" />
      <line x1="0" y1="-5" x2="0" y2="-1" />
      <line x1="10" y1="-26" x2="13" y2="-29" />
      <line x1="-10" y1="-26" x2="-13" y2="-29" />
      <line x1="13" y1="-18" x2="17" y2="-18" />
      <line x1="-13" y1="-18" x2="-17" y2="-18" />
      <line x1="10" y1="-10" x2="13" y2="-7" />
      <line x1="-10" y1="-10" x2="-13" y2="-7" />
    </g>
    <path
      d="M-18,4 Q-9,-3 0,4 Q9,11 18,4 L18,16 L-18,16 Z"
      fill="#4DB8D4"
      opacity="0.7"
    />
    <path
      d="M-18,4 Q-9,-3 0,4 Q9,11 18,4"
      fill="none"
      stroke="#2A9BB5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <ellipse cx="0" cy="20" rx="20" ry="5" fill="#E8C97A" />
  </svg>
);

const DiamondIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="-24 -28 48 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="0,-24 20,-4 0,24 -20,-4"
      fill="#2563EB"
      stroke="#1D4ED8"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polyline
      points="-20,-4 -7,-4 0,-24 7,-4 20,-4"
      fill="none"
      stroke="#93C5FD"
      strokeWidth="1.2"
    />
    <polyline
      points="-7,-4 0,24 7,-4"
      fill="none"
      stroke="#1D4ED8"
      strokeWidth="1"
    />
    <polygon points="-6,-20 0,-24 4,-14 -2,-12" fill="#BFDBFE" opacity="0.6" />
  </svg>
);

const SailboatIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="-28 -30 56 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* mast */}
    <rect x="-1.5" y="-26" width="3" height="38" rx="1.5" fill="#4A3728" />
    {/* main sail */}
    <path
      d="M1.5,-22 L1.5,10 L-20,10 Z"
      fill="#F8F4EC"
      stroke="#C8B89A"
      strokeWidth="1"
    />
    {/* jib sail */}
    <path
      d="M1.5,-18 L1.5,10 L22,10 Z"
      fill="#E8DDD0"
      stroke="#C8B89A"
      strokeWidth="1"
      opacity="0.9"
    />
    {/* hull */}
    <path
      d="M-22,14 Q0,22 22,14 L18,20 Q0,26 -18,20 Z"
      fill="#2563EB"
      stroke="#1D4ED8"
      strokeWidth="1"
    />
    {/* waterline */}
    <path
      d="M-24,18 Q-12,14 0,18 Q12,22 24,18"
      fill="none"
      stroke="#4DB8D4"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M-22,22 Q-10,18 2,22 Q14,26 24,22"
      fill="none"
      stroke="#4DB8D4"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const DoveIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="-32 -20 60 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-3,8 C-15,3 -15,-12 -3,-14 C3,-15 10,-11 12,-4 C14,3 9,12 1,16 C-8,20 -18,15 -20,6"
      fill="white"
      stroke="#C8D8E8"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M-3,-10 C3,-22 18,-20 20,-9 C12,-11 3,-10 -3,-10 Z"
      fill="white"
      stroke="#C8D8E8"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M-3,-10 C3,-22 18,-20 20,-9 C12,-11 3,-10 -3,-10 Z"
      fill="#E0ECF8"
      opacity="0.5"
    />
    <path
      d="M-20,6 C-25,0 -26,-7 -21,-12"
      fill="none"
      stroke="#C8D8E8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M-20,6 C-27,3 -30,-4 -23,-11"
      fill="none"
      stroke="#C8D8E8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="-4"
      r="5.5"
      fill="white"
      stroke="#C8D8E8"
      strokeWidth="1.2"
    />
    <circle cx="13.5" cy="-5.5" r="1.2" fill="#003B73" />
    <path d="M17,-3 L22,-2 L17,-1 Z" fill="#F5C518" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
  {
    Icon: BeachIcon,
    title: "White Sand Beaches",
    desc: "Fine powdery silica sand stretches around the entire sandbar, blindingly white and untouched. No footprints last long here—the tide washes them away.",
    color: "from-amber-400/20 to-yellow-200/10",
    accent: "#FFB84C",
  },
  {
    Icon: DiamondIcon,
    title: "Crystal Clear Waters",
    desc: "Water so transparent you can count the grains of sand beneath your feet in 3 meters of depth. Snorkel, swim, or simply float in nature's infinity pool.",
    color: "from-cyan-400/20 to-blue-200/10",
    accent: "#00A8CC",
  },
  {
    Icon: SailboatIcon,
    title: "Island Hopping",
    desc: "Explore neighboring islets, limestone cliffs, sea caves, and hidden coves. Each island has its own unique character and marine ecosystem to discover.",
    color: "from-emerald-400/20 to-teal-200/10",
    accent: "#2F855A",
  },
  {
    Icon: DoveIcon,
    title: "Peaceful Escape",
    desc: "Zero mobile signal. No resorts. No roads. Just wind, waves, and birdsong. The most profound digital detox your body and mind have ever experienced.",
    color: "from-indigo-400/20 to-blue-300/10",
    accent: "#003B73",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
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

        {/* Feature cards
            mobile  (<sm): 1 col — compact row layout (icon + accent bar left, text right)
            sm:            2 cols — stacked card layout
            xl:            4 cols                                                          */}
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
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* ── Mobile layout: horizontal pill ─────────────────────────
                   Icon + accent bar sit in a left column; title + desc in right.
                   On sm+ the card becomes fully vertical (the original design). */}
              <div className="flex sm:block items-start gap-4 p-5 sm:p-8 relative z-10">
                {/* Left column on mobile: icon + accent bar stacked */}
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
                  {/* Accent bar — horizontal on mobile (below icon), same on sm+ */}
                  <div
                    className="w-6 h-1 sm:w-8 rounded-full sm:mb-5"
                    style={{ background: accent }}
                  />
                </div>

                {/* Right column on mobile / full block on sm+ */}
                <div className="sm:mt-0">
                  <h3 className="font-display text-base sm:text-xl font-semibold text-ocean mb-1.5 sm:mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ocean/65 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
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
