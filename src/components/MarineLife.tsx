import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Icons ─────────────────────────────────────────────────────────────────────

const TropicalFishIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-42 -28 84 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="0"
      cy="0"
      rx="22"
      ry="14"
      fill="#FF6B2B"
      stroke="#CC4A0A"
      strokeWidth="1"
    />
    <rect
      x="-4"
      y="-14"
      width="9"
      height="28"
      rx="4"
      fill="white"
      opacity="0.85"
    />
    <path
      d="M22,0 L36,-14 L36,14 Z"
      fill="#FF6B2B"
      stroke="#CC4A0A"
      strokeWidth="1"
    />
    <path
      d="M-8,-14 C-2,-26 10,-26 14,-14"
      fill="#FF8C42"
      stroke="#CC4A0A"
      strokeWidth="1"
    />
    <circle cx="-12" cy="-3" r="4" fill="white" />
    <circle cx="-12" cy="-3" r="2" fill="#1a1a1a" />
    <circle cx="-11" cy="-4" r="0.8" fill="white" />
    <line
      x1="-20"
      y1="-7"
      x2="-20"
      y2="7"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <line
      x1="8"
      y1="-13"
      x2="8"
      y2="13"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      opacity="0.3"
    />
  </svg>
);

const CoralIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-28 -28 56 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="0" cy="16" rx="18" ry="5" fill="#C45A8A" opacity="0.4" />
    <path
      d="M0,16 L0,-6"
      stroke="#E8709A"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M0,2 L-14,-14"
      stroke="#E8709A"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M0,2 L14,-14"
      stroke="#E8709A"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M-7,-4 L-20,-16"
      stroke="#D460A0"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M7,-4 L20,-16"
      stroke="#D460A0"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="0" cy="-8" r="5" fill="#F090C0" />
    <circle cx="-14" cy="-14" r="4" fill="#F090C0" />
    <circle cx="14" cy="-14" r="4" fill="#F090C0" />
    <circle cx="-20" cy="-16" r="3.5" fill="#F8B0D0" />
    <circle cx="20" cy="-16" r="3.5" fill="#F8B0D0" />
    <circle cx="0" cy="-8" r="1.5" fill="#C03070" />
    <circle cx="-14" cy="-14" r="1.5" fill="#C03070" />
    <circle cx="14" cy="-14" r="1.5" fill="#C03070" />
    <circle cx="-20" cy="-16" r="1.2" fill="#C03070" />
    <circle cx="20" cy="-16" r="1.2" fill="#C03070" />
  </svg>
);

const SeaTurtleIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-36 -28 72 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="8"
      cy="-22"
      rx="6"
      ry="12"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
      transform="rotate(-30 8 -22)"
    />
    <ellipse
      cx="8"
      cy="22"
      rx="6"
      ry="12"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
      transform="rotate(30 8 22)"
    />
    <ellipse
      cx="-8"
      cy="-20"
      rx="5"
      ry="10"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
      transform="rotate(20 -8 -20)"
    />
    <ellipse
      cx="-8"
      cy="20"
      rx="5"
      ry="10"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
      transform="rotate(-20 -8 20)"
    />
    <ellipse
      cx="0"
      cy="0"
      rx="20"
      ry="16"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
    />
    <ellipse cx="0" cy="0" rx="11" ry="9" fill="#4ABE80" opacity="0.6" />
    <line
      x1="0"
      y1="-16"
      x2="0"
      y2="16"
      stroke="#277A4A"
      strokeWidth="0.8"
      opacity="0.5"
    />
    <line
      x1="-20"
      y1="0"
      x2="20"
      y2="0"
      stroke="#277A4A"
      strokeWidth="0.8"
      opacity="0.5"
    />
    <line
      x1="-14"
      y1="-10"
      x2="14"
      y2="10"
      stroke="#277A4A"
      strokeWidth="0.8"
      opacity="0.4"
    />
    <line
      x1="14"
      y1="-10"
      x2="-14"
      y2="10"
      stroke="#277A4A"
      strokeWidth="0.8"
      opacity="0.4"
    />
    <ellipse
      cx="-24"
      cy="-4"
      rx="8"
      ry="6"
      fill="#5AC88A"
      stroke="#277A4A"
      strokeWidth="1"
    />
    <circle cx="-27" cy="-6" r="2" fill="#1a3a1a" />
    <circle cx="-26.5" cy="-6.5" r="0.7" fill="white" />
    <path
      d="M20,0 L30,4 L30,-4 Z"
      fill="#3A9E6A"
      stroke="#277A4A"
      strokeWidth="1"
    />
  </svg>
);

const SharkIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-48 -32 96 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="0"
      cy="0"
      rx="30"
      ry="10"
      fill="#6B8FAF"
      stroke="#4A6A8A"
      strokeWidth="1"
    />
    <ellipse cx="2" cy="3" rx="22" ry="5" fill="#D4E4F0" opacity="0.8" />
    <path
      d="M-4,-10 L2,-28 L12,-10"
      fill="#6B8FAF"
      stroke="#4A6A8A"
      strokeWidth="1"
    />
    <path
      d="M30,0 L44,-14 L46,0 L44,14 Z"
      fill="#6B8FAF"
      stroke="#4A6A8A"
      strokeWidth="1"
    />
    <path
      d="M-5,8 L-18,22 L2,10"
      fill="#6B8FAF"
      stroke="#4A6A8A"
      strokeWidth="1"
    />
    <circle cx="-20" cy="-2" r="3.5" fill="#1a2a3a" />
    <circle cx="-19" cy="-3" r="1" fill="white" opacity="0.6" />
    <path
      d="M-12,-8 C-12,-2 -10,4 -12,8"
      fill="none"
      stroke="#4A6A8A"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M-8,-9 C-8,-2 -6,4 -8,9"
      fill="none"
      stroke="#4A6A8A"
      strokeWidth="1"
      opacity="0.5"
    />
    <path d="M0,-22 L2,-28 L4,-22" fill="white" opacity="0.8" />
  </svg>
);

const OctopusIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-34 -32 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-14,0 C-20,10 -22,20 -16,28"
      fill="none"
      stroke="#8B3FA8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M-8,0 C-10,14 -8,24 -4,30"
      fill="none"
      stroke="#8B3FA8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M0,0 C0,16 2,26 4,32"
      fill="none"
      stroke="#8B3FA8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M8,0 C10,14 12,24 10,30"
      fill="none"
      stroke="#8B3FA8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M14,0 C20,10 22,20 18,28"
      fill="none"
      stroke="#8B3FA8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M-16,-4 C-26,2 -28,12 -22,22"
      fill="none"
      stroke="#7A2E98"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M16,-4 C26,2 28,12 22,22"
      fill="none"
      stroke="#7A2E98"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="0"
      cy="-14"
      rx="18"
      ry="14"
      fill="#8B3FA8"
      stroke="#6A2A88"
      strokeWidth="1"
    />
    <ellipse cx="-4" cy="-18" rx="8" ry="6" fill="#B060CC" opacity="0.5" />
    <circle cx="-17" cy="14" r="2" fill="#CC80E8" opacity="0.7" />
    <circle cx="-6" cy="18" r="2" fill="#CC80E8" opacity="0.7" />
    <circle cx="2" cy="20" r="2" fill="#CC80E8" opacity="0.7" />
    <circle cx="11" cy="18" r="2" fill="#CC80E8" opacity="0.7" />
    <circle cx="20" cy="14" r="2" fill="#CC80E8" opacity="0.7" />
    <circle cx="-7" cy="-16" r="4.5" fill="#F0D060" />
    <circle cx="7" cy="-16" r="4.5" fill="#F0D060" />
    <circle cx="-7" cy="-16" r="2.5" fill="#1a0a2a" />
    <circle cx="7" cy="-16" r="2.5" fill="#1a0a2a" />
    <circle cx="-6" cy="-17" r="0.8" fill="white" />
    <circle cx="8" cy="-17" r="0.8" fill="white" />
  </svg>
);

const PufferfishIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="-34 -34 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#8B6914" strokeWidth="1" strokeLinecap="round">
      <line x1="0" y1="-20" x2="0" y2="-30" />
      <line x1="14" y1="-14" x2="20" y2="-22" />
      <line x1="20" y1="0" x2="30" y2="0" />
      <line x1="14" y1="14" x2="20" y2="22" />
      <line x1="0" y1="20" x2="0" y2="30" />
      <line x1="-14" y1="14" x2="-20" y2="22" />
      <line x1="-20" y1="0" x2="-30" y2="0" />
      <line x1="-14" y1="-14" x2="-20" y2="-22" />
    </g>
    <circle
      cx="0"
      cy="0"
      r="20"
      fill="#F5C842"
      stroke="#B89020"
      strokeWidth="1.2"
    />
    <circle cx="-8" cy="-6" r="3" fill="#8B6914" opacity="0.5" />
    <circle cx="6" cy="-10" r="2.5" fill="#8B6914" opacity="0.5" />
    <circle cx="10" cy="5" r="3" fill="#8B6914" opacity="0.5" />
    <circle cx="-4" cy="10" r="2.5" fill="#8B6914" opacity="0.5" />
    <circle cx="-12" cy="6" r="2" fill="#8B6914" opacity="0.4" />
    <ellipse cx="0" cy="6" rx="12" ry="8" fill="#FFF0A0" opacity="0.6" />
    <circle
      cx="-12"
      cy="-6"
      r="5.5"
      fill="white"
      stroke="#B89020"
      strokeWidth="0.8"
    />
    <circle cx="-12" cy="-6" r="3" fill="#1a1a1a" />
    <circle cx="-11" cy="-7" r="1" fill="white" />
    <path
      d="M20,0 C26,-6 28,0 26,6 C24,4 22,2 20,0 Z"
      fill="#D4A820"
      stroke="#B89020"
      strokeWidth="0.8"
    />
    <path
      d="M-18,2 C-16,6 -14,6 -12,2"
      fill="none"
      stroke="#B89020"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const marineItems = [
  {
    Icon: TropicalFishIcon,
    title: "Tropical Fish",
    desc: "Over 200 species of colorful reef fish call these waters home.",
  },
  {
    Icon: CoralIcon,
    title: "Coral Gardens",
    desc: "Pristine hard and soft coral formations stretching for hectares.",
  },
  {
    Icon: SeaTurtleIcon,
    title: "Sea Turtles",
    desc: "Green sea turtles nest and feed in the shallows around the island.",
  },
  {
    Icon: SharkIcon,
    title: "Reef Sharks",
    desc: "Whitetip reef sharks patrol the outer reef edges.",
  },
  {
    Icon: OctopusIcon,
    title: "Octopus & Squid",
    desc: "Intelligent cephalopods camouflage among the coral boulders.",
  },
  {
    Icon: PufferfishIcon,
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

// ── Component ─────────────────────────────────────────────────────────────────

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
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src="/img/CrestaReef.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001f3f]/70" />
      </motion.div>

      {/* Animated bubbles */}
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
        {/* Header */}
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

        {/* Marine grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {marineItems.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass rounded-2xl p-4 sm:p-6 group hover:bg-white/20 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="flex sm:block items-start gap-3 sm:gap-0">
                <motion.div
                  className="flex-shrink-0 mb-0 sm:mb-4 text-4xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Icon />
                </motion.div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="font-body text-white/60 text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-14 md:mt-16 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8
                     grid grid-cols-3 md:flex md:flex-row items-center justify-between gap-2 md:gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <>
              <div key={stat.label} className="text-center">
                <div className="font-body text-[10px] sm:text-xs text-cyan/70 tracking-widest uppercase mb-1">
                  {stat.label}
                </div>
                <div className="font-display text-xl sm:text-3xl md:text-4xl font-light text-white leading-none">
                  {stat.value}
                  {stat.unit && (
                    <span className="block text-xs sm:text-base font-body font-normal text-white/70 mt-0.5">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="font-body text-white/45 text-[10px] sm:text-xs mt-1 leading-snug">
                  {stat.sub}
                </div>
              </div>
              {/* Vertical divider between stats */}
              {i < stats.length - 1 && (
                <div className="hidden md:block h-16 w-px bg-white/10 flex-shrink-0" />
              )}
            </>
          ))}
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
<motion.div
  className="mt-10 sm:mt-14 md:mt-16 glass rounded-2xl sm:rounded-3xl
             px-3 py-5 sm:p-6 md:py-10 md:px-12
             grid grid-cols-3 md:flex md:flex-row items-center justify-between gap-0 md:gap-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {stats.map((stat, i) => (
    <>
      <div
        key={stat.label}
        className="flex flex-col items-center text-center md:flex-1 px-2 md:px-8"
      >
        {/* Label */}
        <div className="font-body text-[9px] md:text-[11px] text-cyan/70 tracking-[0.25em] uppercase mb-2 md:mb-3 whitespace-nowrap">
          {stat.label}
        </div>

        {/* Number + unit inline on same line */}
        <div className="font-display text-2xl sm:text-3xl md:text-5xl font-light text-white leading-none tracking-tight">
          {stat.value}
          {stat.unit && (
            <span className="font-body text-base md:text-xl font-light text-white/60 ml-1.5 align-baseline">
              {stat.unit}
            </span>
          )}
        </div>

        {/* Sub-description */}
        <div className="font-body text-white/40 text-[9px] md:text-xs mt-2 md:mt-3 leading-snug max-w-[80px] md:max-w-[120px]">
          {stat.sub}
        </div>
      </div>

      {/* Vertical divider */}
      {i < stats.length - 1 && (
        <div className="hidden md:block h-14 w-px bg-white/10 flex-shrink-0" />
      )}
    </>
  ))}
</motion.div>;
