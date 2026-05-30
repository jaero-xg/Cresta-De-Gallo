import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiAnchor, FiCompass, FiMapPin } from "react-icons/fi";

const steps = [
  {
    icon: FiMapPin,
    step: "01",
    title: "Depart from Sibuyan Island",
    desc: "Your adventure begins at the port of Sibuyan Island, where local bancas await to carry you across the azure waters of the Sibuyan Sea. Pack light—this is a journey back to nature.",
    detail: "Port departure at dawn",
  },
  {
    icon: FiAnchor,
    step: "02",
    title: "Scenic Boat Ride",
    desc: "Glide through open waters as the island slowly fades behind you. Watch for dolphins, flying fish, and the kaleidoscope of marine life visible through the crystal-clear depths beneath.",
    detail: "2–3 hour sea crossing",
  },
  {
    icon: FiCompass,
    step: "03",
    title: "Arrive at the Sandbar",
    desc: "A sliver of blindingly white sand emerges from turquoise waters\u2014Cresta de Gallo. Step off your banca into ankle-deep warmth and feel the world's noise disappear entirely.",
    detail: "The hidden paradise awaits",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col md:flex-row gap-8 items-start"
    >
      {/* Step number */}
      <div className="flex-shrink-0">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #003B73, #00A8CC)" }}
        >
          <step.icon className="text-white z-10" size={28} />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 70% 70%, white, transparent)`,
            }}
          />
        </div>
      </div>

      <div className="flex-1 pb-12 md:pb-0">
        {/* Step label */}
        <div className="font-body text-xs tracking-[0.3em] uppercase text-cyan mb-2 font-medium">
          Step {step.step} — {step.detail}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-ocean mb-4">
          {step.title}
        </h3>
        <p className="font-body text-ocean/70 leading-relaxed max-w-lg">
          {step.desc}
        </p>

        {/* Decorative line */}
        {index < steps.length - 1 && (
          <div className="hidden md:block absolute left-10 top-20 w-0.5 h-24 bg-gradient-to-b from-cyan/40 to-transparent" />
        )}
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--sand)" }}
      aria-label="The Journey"
    >
      {/* Decorative ocean illustration */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block"
        style={{ x: bgX }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 80% 50%, rgba(0, 168, 204, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse at 60% 80%, rgba(0, 59, 115, 0.05) 0%, transparent 60%)
            `,
          }}
        />
        {/* Illustrated boat silhouette using CSS */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10">
          <svg
            width="340"
            height="260"
            viewBox="0 0 340 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sail */}
            <path d="M170 20 L170 160 L90 160 Z" fill="#003B73" />
            <path
              d="M170 40 L170 160 L250 160 Z"
              fill="#00A8CC"
              opacity="0.7"
            />
            {/* Mast */}
            <rect x="168" y="10" width="4" height="170" fill="#003B73" />
            {/* Hull */}
            <path
              d="M60 170 Q170 220 280 170 L270 195 Q170 240 70 195 Z"
              fill="#003B73"
            />
            {/* Water waves */}
            <path
              d="M20 220 Q80 205 140 220 Q200 235 260 220 Q310 205 340 220"
              stroke="#00A8CC"
              strokeWidth="3"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M0 240 Q60 225 120 240 Q180 255 240 240 Q300 225 340 240"
              stroke="#00A8CC"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium">
              Getting There
            </span>
          </motion.div>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ocean leading-none mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The
            <br />
            <span className="italic font-semibold">Journey</span>
          </motion.h2>
          <motion.p
            className="font-body text-ocean/70 leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Reaching Cresta de Gallo is an adventure in itself. The remoteness
            is part of the magic— the further you travel, the more the world's
            noise fades away.
          </motion.p>

          {/* Time estimate */}
          <motion.div
            className="mt-10 inline-flex items-center gap-4 border border-ocean/15 rounded-2xl px-6 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-semibold text-ocean">
                7–9h
              </div>
              <div className="font-body text-xs text-ocean/50 tracking-widest uppercase">
                Total Journey
              </div>
            </div>
            <div className="w-px h-12 bg-ocean/15" />
            <div className="text-center">
              <div className="font-display text-3xl font-semibold text-ocean">
                2–3h
              </div>
              <div className="font-body text-xs text-ocean/50 tracking-widest uppercase">
                By Banca Boat
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Timeline steps */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical connector line */}
          <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan/30 via-ocean/20 to-transparent hidden md:block" />
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
