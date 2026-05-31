import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  { id: 1, title: "Aerial Sandbar", src: "/img/CrestaGallery1.png" },
  { id: 2, title: "Crystal Waters", src: "/img/CrestaGallery4.jpg" },
  { id: 3, title: "Sunset Shore", src: "/img/CrestaGallery5.png" },
  { id: 4, title: "Coral Garden", src: "/img/CrestaReef.png" },
  { id: 5, title: "Palm Silhouette", src: "/img/CrestaGallery6.png" },
  { id: 6, title: "Morning Banca", src: "/img/CrestaGallery11.png" },
];

/* ── Reusable hover card ─────────────────────────────────────────── */
function Card({
  item,
  style,
  delay = 0,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  style?: React.CSSProperties;
  delay?: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-end p-4">
        <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <FiZoomIn size={14} />
          <span className="font-body text-xs sm:text-sm tracking-wide">
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null,
  );
  const selectedIndex = galleryItems.findIndex((i) => i.id === selected?.id);

  const prev = () =>
    setSelected(
      galleryItems[
        (selectedIndex - 1 + galleryItems.length) % galleryItems.length
      ],
    );
  const next = () =>
    setSelected(galleryItems[(selectedIndex + 1) % galleryItems.length]);

  const open = (item: (typeof galleryItems)[0]) => setSelected(item);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 relative"
      style={{ background: "var(--sand)" }}
      aria-label="Photo Gallery"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Visual Journey
          </motion.span>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ocean mt-3 leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Island <span className="italic font-semibold">Gallery</span>
          </motion.h2>
          <motion.p
            className="font-body text-ocean/50 mt-4 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Click any image to explore
          </motion.p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            MOBILE  (<sm): 2-col uniform grid — all square, clean
        ───────────────────────────────────────────────────────── */}
        <div className="sm:hidden grid grid-cols-2 gap-2">
          {galleryItems.map((item, i) => (
            <Card
              key={item.id}
              item={item}
              delay={i * 0.06}
              style={{ aspectRatio: "1/1" }}
              onClick={() => open(item)}
            />
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────
            SM–MD: 2 rows
            Row 1: hero left (wide landscape) + two portrait stacks right
            Row 2: three equal landscape cards
        ───────────────────────────────────────────────────────── */}
        <div className="hidden sm:flex lg:hidden flex-col gap-2 sm:gap-3">
          {/* Row 1 */}
          <div
            className="grid gap-2 sm:gap-3"
            style={{ gridTemplateColumns: "3fr 2fr" }}
          >
            {/* Hero */}
            <Card
              item={galleryItems[0]}
              style={{ aspectRatio: "16/10" }}
              delay={0}
              onClick={() => open(galleryItems[0])}
            />
            {/* Two stacked */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <Card
                item={galleryItems[1]}
                style={{ aspectRatio: "4/3" }}
                delay={0.1}
                onClick={() => open(galleryItems[1])}
              />
              <Card
                item={galleryItems[2]}
                style={{ aspectRatio: "4/3" }}
                delay={0.2}
                onClick={() => open(galleryItems[2])}
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[galleryItems[3], galleryItems[4], galleryItems[5]].map(
              (item, i) => (
                <Card
                  key={item.id}
                  item={item}
                  style={{ aspectRatio: "4/3" }}
                  delay={i * 0.1}
                  onClick={() => open(item)}
                />
              ),
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            LG+: editorial two-row layout
            Row 1: large hero (col 1–8) + two cards stacked (col 9–12)
            Row 2: wide mid (col 1–5) + portrait (col 5–8) + square (col 9–12)
        ───────────────────────────────────────────────────────── */}
        <div
          className="hidden lg:grid gap-3"
          style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          {/* Row 1 — hero */}
          <div
            style={{ gridColumn: "1 / 9", aspectRatio: "16/10" }}
            className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
          >
            <Card
              item={galleryItems[0]}
              style={{ aspectRatio: "16/10", position: "static" }}
              delay={0}
              onClick={() => open(galleryItems[0])}
            />
          </div>

          {/* Row 1 — two stacked right */}
          <div style={{ gridColumn: "9 / 13" }} className="flex flex-col gap-3">
            <Card
              item={galleryItems[1]}
              style={{ aspectRatio: "4/3", flex: 1 }}
              delay={0.1}
              onClick={() => open(galleryItems[1])}
            />
            <Card
              item={galleryItems[2]}
              style={{ aspectRatio: "4/3", flex: 1 }}
              delay={0.2}
              onClick={() => open(galleryItems[2])}
            />
          </div>

          {/* Row 2 — wide left */}
          <div style={{ gridColumn: "1 / 6" }}>
            <Card
              item={galleryItems[3]}
              style={{ aspectRatio: "4/3" }}
              delay={0.1}
              onClick={() => open(galleryItems[3])}
            />
          </div>
          {/* Row 2 — portrait mid */}
          <div style={{ gridColumn: "6 / 9" }}>
            <Card
              item={galleryItems[4]}
              style={{ aspectRatio: "3/4" }}
              delay={0.2}
              onClick={() => open(galleryItems[4])}
            />
          </div>
          {/* Row 2 — square right */}
          <div style={{ gridColumn: "9 / 13" }}>
            <Card
              item={galleryItems[5]}
              style={{ aspectRatio: "1/1" }}
              delay={0.3}
              onClick={() => open(galleryItems[5])}
            />
          </div>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full mx-5 sm:mx-0"
              style={{ maxWidth: "800px" }}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div
                className="w-full rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption + counter + nav */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-light text-white">
                    {selected.title}
                  </h3>
                  <p className="font-body text-white/45 text-xs sm:text-sm mt-0.5">
                    Cresta de Gallo, Romblon
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={18} color="white" />
                  </button>
                  <span className="font-body text-white/40 text-xs tabular-nums min-w-[36px] text-center">
                    {selectedIndex + 1} / {galleryItems.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                    aria-label="Next image"
                  >
                    <FiChevronRight size={18} color="white" />
                  </button>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-sand transition-colors"
                aria-label="Close lightbox"
              >
                <FiX size={16} className="text-ocean" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
