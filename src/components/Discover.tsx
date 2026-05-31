import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const BeachIcon = () => (
  <svg
    width="28"
    height="28"
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
    width="28"
    height="28"
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

const LeafIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="-24 -32 48 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,22 C0,22 -22,-2 -11,-20 C-4,-30 11,-28 15,-17 C22,-2 0,22 0,22 Z"
      fill="#22C55E"
      stroke="#16A34A"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <line
      x1="0"
      y1="22"
      x2="0"
      y2="-16"
      stroke="#15803D"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M0,6 C-7,0 -13,-8 -11,-20"
      fill="none"
      stroke="#15803D"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M0,6 C7,0 13,-8 11,-20"
      fill="none"
      stroke="#15803D"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const DoveIcon = () => (
  <svg
    width="28"
    height="28"
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

const highlights = [
  {
    icon: BeachIcon,
    title: "Powdery White Sand",
    desc: "Pristine shores so fine they squeak underfoot",
  },
  {
    icon: DiamondIcon,
    title: "Crystal-Clear Waters",
    desc: "Visibility extending 20+ meters into the deep",
  },
  {
    icon: LeafIcon,
    title: "Unspoiled Nature",
    desc: "No electricity, no crowds—pure wilderness",
  },
  {
    icon: DoveIcon,
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
      {/* KEY CHANGE 1: asymmetric columns — image 5fr, text 6fr — gives text more room */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[5fr_6fr] gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* ── Image panel ── */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* KEY CHANGE 2: clean Tailwind aspect-ratio classes, no broken hidden-div trick */}
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

          {/* KEY CHANGE 3: accent image pulled inward (-right-4) and smaller (w-36 h-36)
              so it stays within the image column and doesn't crowd the text panel */}
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

        {/* ── Text panel ── */}
        {/* KEY CHANGE 4: max-w cap + justify-self-start keeps text well-proportioned */}
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
