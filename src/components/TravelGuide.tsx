import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiInfo,
  FiActivity,
  FiAlertTriangle,
} from "react-icons/fi";

const cards = [
  {
    icon: FiMapPin,
    title: "Location",
    color: "#00A8CC",
    items: [
      "Cresta de Gallo Island",
      "Municipality of San Fernando",
      "Romblon Province, Philippines",
      "Sibuyan Sea, MIMAROPA Region",
    ],
  },
  {
    icon: FiCalendar,
    title: "Best Time to Visit",
    color: "#FFB84C",
    items: [
      "November to May (dry season)",
      "Peak: January–April",
      "Calmest seas: February–March",
      "Avoid June–October (typhoon season)",
    ],
  },
  {
    icon: FiActivity,
    title: "Activities",
    color: "#2F855A",
    items: [
      "Snorkeling & freediving",
      "Beach camping overnight",
      "Island hopping by banca",
      "Nature photography",
      "Birdwatching at dawn",
    ],
  },
  {
    icon: FiInfo,
    title: "How to Get There",
    color: "#003B73",
    items: [
      "Manila → Romblon by ferry",
      "Romblon → Sibuyan by ferry",
      "Sab Fernando → Cresta de Gallo by bangka",
      "Total: 12–18 hours from Manila",
    ],
  },
  {
    icon: FiAlertTriangle,
    title: "Travel Tips",
    color: "#e05f00",
    items: [
      "Bring all food, water & supplies",
      "No electricity or resorts on island",
      "Leave no trace — pack out all waste",
      "Hire local boatmen from Cajidiocan",
      "Check weather before departure",
    ],
  },
];

export default function TravelGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="travel"
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F5F0 0%, #dceef5 100%)",
      }}
      aria-label="Travel Information"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00A8CC, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            className="font-body text-xs tracking-[0.3em] uppercase text-cyan font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Plan Your Trip
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-6xl font-light text-ocean mt-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Travel <span className="italic font-semibold">Information</span>
          </motion.h2>
          <motion.p
            className="font-body text-ocean/60 mt-5 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything you need to plan a safe, responsible, and unforgettable
            visit.
          </motion.p>
        </div>

        {/* Cards masonry-ish grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className={`rounded-3xl overflow-hidden border border-white/80 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Card header */}
              <div
                className="px-7 py-5 flex items-center gap-3"
                style={{ background: `${card.color}18` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: card.color }}
                >
                  <card.icon className="text-white" size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ocean">
                  {card.title}
                </h3>
              </div>

              {/* Card body */}
              <ul className="px-7 py-5 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-ocean/75"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: card.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Map placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="rounded-3xl overflow-hidden border border-white/80 shadow-sm md:col-span-2 lg:col-span-1 relative"
            style={{ minHeight: "240px" }}
          >
            {/* Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121431.45504441625!2d122.65154367493777!3d12.223683434210711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a44956a82e361d%3A0x6294a619a3a16136!2sCresta%20de%20Gallo!5e0!3m2!1sen!2sph!4v1780128907215!5m2!1sen!2sph"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
