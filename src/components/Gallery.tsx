import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    title: "Aerial Sandbar",
    span: "row-span-2",
    src: "/img/CrestaGallery1.png",
    aspect: "2/3",
  },
  {
    id: 2,
    title: "Crystal Waters",
    span: "",
    src: "/img/CrestaGallery4.jpg",
    aspect: "4/3",
  },
  {
    id: 3,
    title: "Sunset Shore",
    span: "",
    src: "/img/CrestaGallery5.png",
    aspect: "4/3",
  },
  {
    id: 4,
    title: "Coral Garden",
    span: "",
    src: "/img/CrestaReef.png",
    aspect: "4/3",
  },
  {
    id: 5,
    title: "Palm Silhouette",
    span: "row-span-2",
    src: "/img/CrestaGallery6.png",
    aspect: "2/3",
  },
  {
    id: 6,
    title: "Morning Banca",
    span: "",
    src: "/img/CrestaGallery11.png",
    aspect: "4/3",
  },
];

function GalleryCard({
  item,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl cursor-zoom-in group ${item.span}`}
      style={{ aspectRatio: item.aspect }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7 }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <FiZoomIn size={16} />
          <span className="font-body text-sm">{item.title}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null,
  );

  return (
    <section
      id="gallery"
      className="py-28 relative"
      style={{ background: "var(--sand)" }}
      aria-label="Photo Gallery"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Visual Journey
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-6xl font-light text-ocean mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Island <span className="italic font-semibold">Gallery</span>
          </motion.h2>
          <motion.p
            className="font-body text-ocean/60 mt-4 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Click any image to explore
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
              className="relative max-w-2xl w-full mx-6"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox image */}
              <div
                className="w-full rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl font-light text-white">
                  {selected.title}
                </h3>
                <p className="font-body text-white/50 text-sm mt-1">
                  Cresta de Gallo, Romblon
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-sand transition-colors"
                aria-label="Close lightbox"
              >
                <FiX size={18} className="text-ocean" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
