import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const thumbs = [
  { src: "/img/Cresta-Hero.png", alt: "Main" },
  { src: "/img/CrestaGallery1.png", alt: "Sandbar aerial" },
  { src: "/img/CrestaReef.png", alt: "Crystal waters" },
  { src: "/img/CrestaGallery5.png", alt: "Sunset shore" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeBg, setActiveBg] = useState("/img/Cresta-Hero.png");
  const [prev, setPrev] = useState("/img/Cresta-Hero.png");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleThumbClick = (src: string) => {
    if (src === activeBg) return;
    setPrev(activeBg);
    setActiveBg(src);
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex flex-col"
      aria-label="Hero – Cresta de Gallo"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src={prev}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <AnimatePresence mode="wait">
          <motion.img
            key={activeBg}
            src={activeBg}
            alt="Aerial view of Cresta de Gallo"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,20,50,0.80) 0%, rgba(0,20,50,0.5) 60%, rgba(0,20,50,0.2) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,20,50,0.6), transparent)",
          }}
        />
      </motion.div>

      {/* ── Main content: fills height, stacks vertically on mobile ── */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-between pt-28 pb-6 lg:pt-0 lg:pb-0 lg:flex-row lg:items-center"
        style={{ y: textY, opacity }}
      >
        {/* ── Text block ─────────────────────────────────────────── */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-start lg:items-center justify-between gap-6 lg:flex-1">
          <div className="w-full lg:max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5 text-xs font-body text-white/90 tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <MdLocationOn className="text-gold" />
              Romblon, Philippines
            </motion.div>

            <motion.h1
              className="font-display font-light text-white leading-none mb-4"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Cresta de
              <br />
              <span
                className="italic font-semibold"
                style={{ color: "#FFB84C" }}
              >
                Gallo
              </span>
            </motion.h1>

            <motion.p
              className="font-body text-white/70 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A hidden sandbar paradise in the heart of the Philippines — wild,
              untouched, and unforgettable.
            </motion.p>

            {/* Scroll indicator — desktop, inline with text */}
            <motion.div
              className="hidden lg:flex mt-10 items-center gap-3 text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiChevronDown size={18} />
              </motion.div>
              <span className="font-body text-xs tracking-[0.3em] uppercase">
                Scroll
              </span>
            </motion.div>
          </div>

          {/* Desktop thumbnail strip */}
          <motion.div
            className="hidden lg:flex flex-col gap-3 shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            {thumbs.map((thumb, i) => (
              <motion.div
                key={i}
                className="relative w-36 h-24 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handleThumbClick(thumb.src)}
                whileHover={{ scale: 1.05, x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 rounded-xl"
                  animate={{ opacity: activeBg === thumb.src ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                {activeBg === thumb.src && (
                  <motion.div
                    layoutId="activeThumbDesktop"
                    className="absolute inset-0 rounded-xl ring-2 ring-gold shadow-lg shadow-gold/40"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {activeBg === thumb.src && (
                  <motion.div
                    layoutId="activeDotDesktop"
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mobile bottom section: thumbs + scroll cue ─────────── */}
        <motion.div
          className="lg:hidden flex flex-col items-center gap-4 pb-20 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Thumbnail strip */}
          <div className="flex gap-2.5">
            {thumbs.map((thumb, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer shrink-0"
                style={{ width: "68px", height: "52px" }}
                onClick={() => handleThumbClick(thumb.src)}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/45 rounded-xl"
                  animate={{ opacity: activeBg === thumb.src ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                {activeBg === thumb.src && (
                  <motion.div
                    layoutId="activeThumbMobile"
                    className="absolute inset-0 rounded-xl ring-2 ring-gold shadow-md shadow-gold/40"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Active label */}
          <motion.p
            key={activeBg}
            className="font-body text-white/40 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {thumbs.find((t) => t.src === activeBg)?.alt}
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            className="flex items-center gap-2 text-white/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiChevronDown size={16} />
            </motion.div>
            <span className="font-body text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="wave-divider z-20">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#F8F5F0"
          />
        </svg>
      </div>
    </section>
  );
}
